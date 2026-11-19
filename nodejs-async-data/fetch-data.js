// 外部データを取得する関数
async function fetchData() {
  console.log('ユーザーデータの取得を開始します。');

  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('データ取得が完了しました。取得件数：', data.length);
    console.log('ユーザー一覧：');

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }

    console.log('ユーザーデータの取得が終了しました。');
  } catch (error) {
    console.error('エラー発生：', error);
  }
}

// 外部データを取得
console.log('fetchData()関数を実行します。');
fetchData();
console.log('fetchData()関数を実行しました。');

// 100ミリ秒ごとにメッセージを表示
let count = 1;
const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count}`);
  count++;

  if (count > 3) {
    clearInterval(interval);
  }
}, 100);