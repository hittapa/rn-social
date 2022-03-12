import { Dimensions } from 'react-native';

const Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height - 200,
  GAP_SIZE: 240,
  PIPE_WIDTH: 10,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 40
}

export default Constants;
