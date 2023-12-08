module.exports = {
    apps: [
      {
        name: 'abdullatif-forumapi',
        script: 'src/app.js',
        instances: 1,
        exec_mode: 'fork',
        env: {
          HOST: "localhost",
    PORT: 5000,
    PGHOST: "localhost",
    PGUSER: "dicoding",
    PGDATABASE: "forumapi",
    PGPASSWORD: "JanganMenyerah!",
    PGPORT: 5432,
    PGHOST_TEST: "localhost",
    PGUSER_TEST: "dicoding",
    PGDATABASE_TEST: "forumapi_test",
    PGPASSWORD_TEST: "JanganMenyerah!",
    PGPORT_TEST: 5432,
    ACCESS_TOKEN_KEY: "8b7b4ef375716ab08b2a3951b29d52fc00b1c855f9d1a847229b8c5935bef56d9d271e76a9cf08e614300395c3b90ebe559cf968a0741b18c9505549394b$    REFRESH_TOKEN_KEY: "5078605e074a462b1460608fcbe0d0963c644402e04ad334455ff5a856cb43fd99825861dde02957d5e3184c90c532ca7d0249df20fe93d535632f3d11b$    ACCESS_TOKEN_AGE: 3000
        },
      },
    ],
  };