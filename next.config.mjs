/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // GitHub Pages用の設定
  basePath: process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}` : '',
  
  // 画像最適化の設定
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },

  // 静的エクスポートの設定
  output: 'export',
};

export default nextConfig;