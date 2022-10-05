<template>
  <div class="cmpt-home-col-side-total" id="cmptHomeColSideTotal">
    <h2>
      <span class="current">科办发文统计</span>
      <span>州市发文统计</span>
    </h2>
    <div class="table-container">
      <table>
        <tr class="title">
          <td>统计单位</td>
          <td>排名</td>
          <td>报送</td>
          <td>采用</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>1</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>文山州</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>保山市</td>
          <td>3</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>昭通市</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>临沧市</td>
          <td>5</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>玉溪市</td>
          <td>6</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>昆明市</td>
          <td>7</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>怒江州</td>
          <td>8</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>红河州</td>
          <td>9</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>10</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>11</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>12</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>13</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>14</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>15</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>大理州</td>
          <td>16</td>
          <td>4</td>
          <td>2</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColSideTotal'
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-side-total {
  width: 240px;
  height: 100%;
  h2 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: #DB0A0B;
    span {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: rgba(#fff, .7);
      cursor: pointer;
    }
    span.current {
      font-size: 18px;
      color: #fff;
    }
  }
  .table-container {
    position: absolute;
    top: 42px;
    left: 0;
    right: 0;
    bottom: 40px;
    // background: #ccc;
    overflow-y: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #DB0A0B;
    margin: 0;
    padding: 0;
    .title td {
      border-bottom: 1px solid #DB0A0B;
      background: #FFF2F2;
      color: #DB0A0B;
      font-weight: bold;
    }
    tr td {
      border-right: 1px solid #DB0A0B;
      padding: 8.9px 0;
      text-align: center;
    }
  }
}
</style>
