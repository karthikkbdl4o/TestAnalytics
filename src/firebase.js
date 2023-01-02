// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

const firebaseConfig = {
  type: 'service_account',
  project_id: 'test-firebase-kbd',
  private_key_id: 'f0f7f66fb8309d9a59c42819485d75fb002cd0e2',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDR/m8EFMLudzkQ\n3egfH4WzUUjvr/UvU3Gfi4S5Yfvnf0Al1R5Z41Or/USzrE8b45MxhjddzLlyx4fe\nGxvv1ZRmqZgK/+o7wYKC1FY3GgIHq9jZe8e33YhhIWyOHHku2trWjh1xPtRn3/vH\nbipFmTU4p/71HPu/yR/LTCBM+Sf23hpJ67yzGs+NiO/hjZQ6A1/YiXF78XIG1WNF\n/HXktdgKpa4TfMaiOL148VWTPn9XNaJVGSDYK2D+OMGYDsdoczHKEl2jIkf3+kLk\nrh/oYJ9r2AW7q/TUphQCLgucwgin2O2zcrXOmVYu8VJV0rWK982BLZfE/jvnwQQ2\n5U6oLO2fAgMBAAECggEASkF880X+KkIJcV/u0XadmiuvrWYcvtf0cVTuIXm3EITM\nY7Rpb6K1tzcvgJN5Q+Tk61nJIUef+ij5b/5JEjWFrQnihF07cFb8thOsyv5M4naP\nj1Q4atmQ/LvLfbMu3PUx9jW5zo5HoNWw3DQmCYdkLP0m6HkPwqE1t3dbYqymR6Jc\nrNu4WB9Afl63kciHBPowJRk8h08004stmQEhonK+Y6/bm6F2gLlFUS8tB2+GEVSv\n3TEpMjJ+9eGtVQ7GDT+afhZqIDFX+FcoGSCsXdOv00jU+tpHgcKntxckpYOVKPf2\nNiPkfRtNjMuyc7kq93btPq6vB1Ya5lFTLfucb5q/bQKBgQD9X8OlYeWfRZxA6Gi+\ng1zOGy5dG0W7w/Hlbih+bmZSnWZUe/0TD8rBNlEc36ycYiaDlR6uybfJ+ZkxB49v\nFOUWcvC3xpIcQwAiarwXwSxWdP6x66At86AbY6olG+ZrHhDSzsgnS/o+03WCcQy9\nqk0Kg3apo2Lxz1ApssmhFw2rWwKBgQDUK5NsYiygTa1xNidALN6NX4KvlQpKqhYO\nUeKYq5FYJFIINiCpDEsAEmQPKM009qcJYxetF1eJB2OS2qFSv2KQWYCAvmUqF5Ps\nllOlOZ+3n8cXjow2RdEDkE4pVtbpwmTulvDn2vgZAfstSzJALowC1uAcFFljYGP6\nkH5i0UjODQKBgQCDiX7BUfRqXjIDRGR0WzAH0/aa4XivRMdEy458LIY0Z4BjZcb5\naV5iNfegHMK4oP/LmdPG+/PNCCYuXPVqvpc7s0oirhTWVTYxp+WkE2YYMD61UVTj\n5jF9Zp1DDJvvijlDp5QjSn9MtGyx3ky1/j5msd8drDPGw1CjhSzF03kGNwKBgQCi\nuakf/0vqxqi3o6kG92LZWt+Ieu6hxUGVSghYv32B9JlV4u25ucvsCi7j0Y9Rh7sk\n3/NQtg5U8m3UPApuxIp726lLFLvSRLMXSVRt7HwrAUhZMOMo3PMpoIvR+OBr+MQg\nmXO6355Yz8QtQPcRcqG/q73Gy3SjW1JS4m+MqqcEIQKBgB8L9SRTlfMB26iwR3Rh\nGtWXumaknWmxi4UqUVz2R9EaTgIfnKFaZe2+m1mrm3WQwOo33hIr0ut+L5lYrIGb\nwh3umwCvMwYClVWAfzy9Scq2Hr92McVbkZC6Sjczc+4S8DbmE1N3/IxHdo1mEAjv\n2NO1RG4sjNq1xqg2hbN6YOUP\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-erzda@test-firebase-kbd.iam.gserviceaccount.com',
  client_id: '106706145351110739153',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-erzda%40test-firebase-kbd.iam.gserviceaccount.com',
};
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export {firebaseConfig};
