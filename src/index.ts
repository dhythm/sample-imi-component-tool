import enrichment from 'imi-enrichment-address';

const hello = () => {
  enrichment('東京都千代田区霞が関1-3-1').then((data) => {
    console.log(JSON.stringify(data));
  });
};

hello();
