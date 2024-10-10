/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath を設定（リポジトリ名がプロジェクト名と同じ場合）
  basePath: '/mocho271828.github.io',
};

export default nextConfig;
