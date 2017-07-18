/**
 * Created by Amila on 7/18/2017.
 */
export default class MockService {

  /*
   * login to system
   */
  loginToSystem(logininstance) {
    return new Promise((resolve, reject) => {
      if (logininstance.username == 'user' && logininstance.password == 'user') {
        return resolve({
          'data': {
            'sessionId': 'sessionkeyuser',
            'state': 200,
            'role': 'pensioner',
            'username': 'user',
          }
        });
      } else {
        return reject({
          'data': {
            'state': 401
          }
        });
      }
    });
  }
}
