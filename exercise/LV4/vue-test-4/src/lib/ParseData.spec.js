import { ColorArrPush, ParseData } from '@/lib/ParseData.js';

const searchData = {
  地震: [
    {
      title: '地震 - 中央氣象局',
      link: 'https://www.cwb.gov.tw/V7/earthquake/',
      text: '資料來源：美國地質調查所主動發布之全球地震自動定位資訊，透過EMAIL方式通報.本網頁僅展示地震規模大於6之全球地震初步訊息，欲查詢詳細地震資訊請 ...',
    },
  ],
};

const colorArr = ['blue', 'white', 'black', 'yellow'];

describe('ParseData.js', () => {
  it('should be new color', () => {
    const newColor = 'red';
    expect(ColorArrPush(colorArr, newColor)).toContain(newColor);
  });

  it('test push data', () => {
    const obj = {
      title: '123',
      link: '456',
      text: 'test demo',
    };

    // console.log(ParseData('地震', searchData, obj)['地震']);
    expect(ParseData('地震', searchData, obj)['地震']).toContainEqual(obj);
  });
});
