import ApiHelper from "./ApiHelper";

class AuthService {

  static async GetOTP(mobileNumber, countryCode) {
    return ApiHelper.postAnonymous("auth/login-phone?phone_number=" + mobileNumber + "&country_code=" + countryCode, {});
  }

  static async VerifyOTP(mobileNumber, countryCode, otp) {
    return ApiHelper.postAnonymous("auth/verify-otp?phone_number=" + mobileNumber + "&country_code=" + countryCode + "&otp=" + otp, {});
    }

  static async UpdateFirstName(firstName) {
    return ApiHelper.postAuthenticated("v2/update-profile?first_name=" + firstName, {});
  }

  static async UpdateDateOfBirth(dob) {
    return ApiHelper.postAuthenticated("v2/update-profile?dob=" + dob, {});
  }

  static async UpdateGender(gender) {
    return ApiHelper.postAuthenticated("v2/update-profile?gender=" + gender, {});
  }

  static async HideAndLogOut(hideMe) {
    return ApiHelper.postAuthenticated("v2/update-profile?hide_me=" + hideMe, {});
  }

  static async UpdateAgeRange(min_age, max_age) {
    return ApiHelper.postAuthenticated("v2/update-profile?min_age=" + min_age + "&max_age=" + max_age, {});
  }

  static async UpdateInterestedIn(interestedIn) {
    return ApiHelper.postAuthenticated("v2/update-profile?show_me_profile=" + interestedIn, {});
  }

  static async UploadImage(file) {
    return ApiHelper.postFileAuthenticated("v2/upload-image", { file });
  }

  static async UpdateSchoolName(schoolName) {
    return ApiHelper.postAuthenticated("v2/update-profile?school_name=" + schoolName, {});
  }

  static async UpdateEmail(email) {
    return ApiHelper.postAuthenticated("v2/update-profile?email=" + email, {});
  }

  static async UpagradeStellar(packages, stripeToken, stripeEmail) {
    return ApiHelper.postAuthenticated("/v2/upgrade-stellar?package=" + packages + "&stripeToken" + stripeToken + "&stripeEmail" + stripeEmail, {});
  }

  static async SpeedRound(likeId) {
    return ApiHelper.getAuthenticated("v2/speed-round/:" + likeId);
  }

  static async SpeedRoundSave(likeId, answers) {
    return ApiHelper.postAuthenticated(`v2/speed-round-save/` + likeId + `?answers[${answers.answer1.id}]=${answers.answer1.answer}&answers[${answers.answer2.id}]=${answers.answer2.answer}&answers[${answers.answer3.id}]=${answers.answer3.answer}`, {});
  }

  static async SwipeAction(id, action) {
    return ApiHelper.postAuthenticated(`v2/profile-react/${id}/${action}`, {});
  }

  static async AddMessage(sender_id, receiver_id, message_body, file) {
    if (file) {
      return ApiHelper.postFileAuthenticated("v2/add-message?sender_id=" + sender_id + "&receiver_id=" + receiver_id + "&message_body=" + message_body, { file });
    }
    else return ApiHelper.postAuthenticated("v2/add-message?sender_id=" + sender_id + "&receiver_id=" + receiver_id + "&message_body=" + message_body, {});
  }

  static async GetChat(receiver_id, sender_id) {
    return ApiHelper.getAuthenticated(`v2/get-chats?receiver_id=${receiver_id}&sender_id=${sender_id}&page=0&limit=100`)
  }

  static async GetPollChat(receiver_id, sender_id, lastMsgId) {
    return ApiHelper.getAuthenticated(`v2/get-new-chats?sender_id=${sender_id}&receiver_id=${receiver_id}&lastMessageId=${lastMsgId}`)
  }

  static async GetMatches() {
    return ApiHelper.getAuthenticated("v2/get-matches");
  }

  static async GetCelebrityProfile() {
    return ApiHelper.getAuthenticated("v2/show-celeb-profiles");
  }

  static async GetProfile() {
    return ApiHelper.getAuthenticated("v2/profile");
  }

  static async Notifiaction() {
    return ApiHelper.getAuthenticated("v2/notifications");
  }

  static async NotifiactionSeenUnseen(id) {
    return ApiHelper.postAuthenticated("v2/update-seen/" + id + "?seen=", {});
  }

  static async DeleteAccountPermanently() {
    return ApiHelper.deleteAuthenticated("v2/delete-profile");
  }

  static async UpdateProfile(school_name, about_me, job_title, company, instagram_profile_url) {
    return ApiHelper.postAuthenticated("v2/update-profile?school_name=" + school_name + "&about_me=" + about_me + "&job_title=" + job_title + "&company=" + company + "&instagram_profile_url=" + instagram_profile_url, {});
  }

  static async ConnectInstagram(instagram_id) {
    return ApiHelper.postAuthenticated(`v2/update-instagram?instagram_id=${instagram_id}`, {});
  }

  static async RequestUpgrade(instagram_id) {
    return ApiHelper.postAuthenticated(`v2/celeb-request?insta_user_id=${instagram_id}`, {});
  }

  static async GetProfileById(id) {
    return ApiHelper.getAuthenticated(`v2/profile/${id}`);
  }

  static async gameWin() {
    return ApiHelper.postAuthenticated(`v2/win-game`);
  }

  static async handleGoogleLogin(data) {
    return ApiHelper.handleGoogleLogin(`auth/google-login?first_name=${data.first_name}&email=${data.email}&google_id=${data.google_id}`, {})
  }

  static async handleAppleLogin(data) {
    return ApiHelper.handleAppleLogin(`auth/apple-login?first_name=${data.first_name}&email=${data.email}&apple_id=${data.apple_id}`, {})
  }

}

export default AuthService;
