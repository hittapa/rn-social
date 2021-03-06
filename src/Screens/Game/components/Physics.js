import Matter from 'matter-js';
import Constants from '../constants';

import { addPipesAtLocation } from '../functions';

let tick = 0;
let pose = 1;
let pipes = 0;

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;
  let bird = entities.bird.body;

  // console.log("engine:");
  // console.log(engine);
  // console.log("world:");
  // console.log(world);
  // console.log("bird:");
  // console.log(bird);

  let hadTouches = false;
  touches.filter(t => t.type === "press").forEach(t => {
    if (!hadTouches) {
      if (world.gravity.y === 0.0) {
        world.gravity.y = 1.4;

        addPipesAtLocation((Constants.MAX_WIDTH * 1) - (Constants.PIPE_WIDTH / 2), world, entities, pipes);
        addPipesAtLocation((Constants.MAX_WIDTH * 1.5) - (Constants.PIPE_WIDTH / 2), world, entities, pipes);
      }

      hadTouches = true;
      dispatch({ type: "touched" });
      Matter.Body.setVelocity(bird, {
        x: bird.velocity.x,
        y: -10
      });
    }
  });

  Matter.Engine.update(engine, time.delta);

  Object.keys(entities).forEach(key => {
    if (key.indexOf("pipe") === 0 && entities.hasOwnProperty(key)) {
      Matter.Body.translate(entities[key].body, { x: -3, y: 0 });

      if (key.indexOf("Top") !== -1 && parseInt(key.replace("pipe", "")) % 2 === 0) {
        if (entities[key].body.position.x + 20 <= bird.position.x && !entities[key].scored) {
          entities[key].scored = true;
          dispatch({ type: "score" });
        }

        // if (entities[key].body.position.x <= -1 * (Constants.PIPE_WIDTH / 2)) {
        //   let pipeIndex = parseInt(key.replace("pipe", ""));
        //   delete (entities["pipe" + (pipeIndex - 1) + "Top"]);
        //   delete (entities["pipe" + (pipeIndex - 1)]);
        //   delete (entities["pipe" + pipeIndex + "Top"]);
        //   delete (entities["pipe" + pipeIndex]);
        // }
        if (entities[key].body.position.x <= -1 * (Constants.PIPE_WIDTH / 2)) {
          addPipesAtLocation(Constants.MAX_WIDTH, world, entities, pipes);
        }

      }
    } else if (key.indexOf("floor") === 0) {
      if (entities[key].body.position.x <= -1 * Constants.MAX_WIDTH / 3) {
        Matter.Body.setPosition(entities[key].body, { x: Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 3), y: entities[key].body.position.y })
      } else {
        Matter.Body.translate(entities[key].body, { x: -3, y: 0 });
      }
    }
  });

  tick += 1;
  if (tick % 5 === 0) {
    pose = pose + 1;
    if (pose > 3) {
      pose = 1;
    }
    entities.bird.pose = pose;
  }

  return entities;
}

export default Physics;
