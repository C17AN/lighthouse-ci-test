// README: https://fe-developers.kakaoent.com/2022/220602-lighthouse-with-github-actions/

module.exports = {
  ci: {
    assert: {
      assetions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
        "categories:pwa": ["warn", { minScore: 0.9 }],
      },
    },
    collect: {
      staticDistDir: "./.next/server/pages",
      // startServerCommand: "npm run start", // 서버를 키는 명령어를 통해서도 실행 가능

      // 둘 이상의 URL을 배열로 받아 모든 URL을 테스트해볼 수 있다.
      url: ["http://localhost:3000"],

      // 실행 횟수
      numberOfRuns: 5,
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
