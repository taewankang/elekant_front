export const MENU_HEIGHT = 600;   //앱 모양으로 변하는 너비
export const MY_PAGE_APP_WIDTH = 640;
export const URL = 'https://localhost:3000';
export const now = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const min = today.getMinutes();
  return `${year}/${month}/${date} ${hours}:${min}`;
}