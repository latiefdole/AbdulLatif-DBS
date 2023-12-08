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
          ACCESS_TOKEN_KEY: "${{ secrets.ACCESS_TOKEN_KEY }}",
          REFRESH_TOKEN_KEY: "${{ secrets.REFRESH_TOKEN_KEY }}",
          ACCESS_TOKEN_AGE: 3000,
        },
      },
    ],
  };