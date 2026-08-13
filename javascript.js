async function api(action, params = {}) {

    const query = new URLSearchParams({
        action: action,
        ...params
    });

    const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzlhETATxd9MHSD1Ce3e_uIqtD-sTSAAOnu6W1Iia6dXjYi6Ecv35jTYujelPkoJRIAaA/exec?" +
    query.toString()
);

    if (!response.ok) {
        throw new Error("API lỗi: " + response.status);
    }

    return await response.json();
}
function showPage(page) {

let content = document.getElementById("content");


switch(page) {
case "member":

content.innerHTML = `
<h1>👥 DANH SÁCH THÀNH VIÊN</h1>

<p>CLAN ĐẠI VIỆT - QUẢN LÝ THÀNH VIÊN</p>

<hr>

<div id="memberTable">
⏳ Đang tải...
</div>
`;

api("ThanhVien").then(function(data) {

    document.getElementById("memberTable").innerHTML =
        taoBangThanhVien(data);

}).catch(function(err) {

    document.getElementById("memberTable").innerHTML =
        "❌ Lỗi tải danh sách thành viên: " + err.message;

});

break;
case "bayht2":

content.innerHTML = `

<h1>🏆 BAY CÚP HUYỀN THOẠI 2</h1>

<p>CLAN ĐẠI VIỆT - BAY CÚP HUYỀN THOẠI 2</p>

<hr>

<div style="text-align:center;margin:25px 0;">

<button
onclick="moFormBayHT2()"
style="
background:#16a34a;
color:white;
padding:12px 30px;
font-size:18px;
font-weight:bold;
border:none;
border-radius:10px;
cursor:pointer;
">

📝 ĐĂNG KÝ

</button>

</div>

<div id="formBayHT2"></div>

<hr>

<h2>📋 DANH SÁCH ĐĂNG KÝ</h2>

<div id="dsBayHT2">
⏳ Đang tải danh sách...
</div>

`;


break;
case "epl":

content.innerHTML = `
<h1>🏆 NGOẠI HẠNG ANH</h1>
<p>CLAN ĐẠI VIỆT - RANK ESPORT</p>

<hr>

<h2>📊 BẢNG XẾP HẠNG</h2>

<div id="bxh">
⏳ Đang tải bảng xếp hạng...
</div>


<hr>

<h2>⭐ TOP LIA 3 SAO</h2>

<div id="top3sao">
⏳ Đang tải...
</div>


<hr>

<h2>🛡️ TOP THỦ 1 SAO</h2>

<div id="topthu">
⏳ Đang tải...
</div>


<hr>

<h2>🔥 CHUỖI THẮNG LIÊN TIẾP</h2>

<div id="chuoithang">
⏳ Đang tải...
</div>

<hr>

<h2>📅 LỊCH THI ĐẤU & KẾT QUẢ</h2>

<div id="lichEPL">
⏳ Đang tải...
</div>

`;


// Bảng xếp hạng

api("Top3Sao")
  .then(function(data) {
    const box = document.getElementById("top3sao");

    if (!box) {
      console.error("Không tìm thấy #top3sao");
      return;
    }

    box.innerHTML = taoBang(data);
  })
  .catch(function(err) {
    console.error("Lỗi Top3Sao:", err);

    const box = document.getElementById("top3sao");

    if (box) {
      box.innerHTML =
        "❌ Lỗi tải Top 3 sao: " + err.message;
    }
  });


// Top 3 sao

api("Top3Sao").then(function(data){
    document.getElementById("top3sao").innerHTML = taoBang(data);
}).catch(function(err){
    document.getElementById("top3sao").innerHTML =
        "❌ Lỗi tải Top 3 sao: " + err.message;
});


// Top thủ

api("TopThu1Sao").then(function(data){
    document.getElementById("topthu").innerHTML = taoBang(data);
}).catch(function(err){
    document.getElementById("topthu").innerHTML =
        "❌ Lỗi tải Top thủ: " + err.message;
});


// Chuỗi thắng

api("ChuoiThang").then(function(data){
    document.getElementById("chuoiThang").innerHTML = taoBang(data);
}).catch(function(err){
    document.getElementById("chuoiThang").innerHTML =
        "❌ Lỗi tải chuỗi thắng: " + err.message;
});


// Lịch thi đấu

api("LichNgoaiHangAnh").then(function(data){
    document.getElementById("lichEPL").innerHTML = taoBang(data);
}).catch(function(err){
    document.getElementById("lichEPL").innerHTML =
        "❌ Lỗi tải lịch thi đấu: " + err.message;
});

break;

case "bayht2":

content.innerHTML = `

<h1>🏆 BAY CÚP HUYỀN THOẠI 2</h1>

<p>CLAN ĐẠI VIỆT - BAY CÚP HUYỀN THOẠI 2</p>

<hr>

<div style="text-align:center;margin:25px 0;">

<button
onclick="moFormBayHT2()"
style="
background:#16a34a;
color:white;
padding:12px 30px;
font-size:18px;
font-weight:bold;
border:none;
border-radius:10px;
cursor:pointer;
">
📝 ĐĂNG KÝ
</button>

</div>

<div id="formBayHT2"></div>

<hr>

<h2>📋 DANH SÁCH ĐĂNG KÝ</h2>

<div id="dsBayHT2">
⏳ Đang tải danh sách...
</div>

`;

api("BayCupHuyenThoai2")
.then(function(data) {

    document.getElementById("dsBayHT2").innerHTML =
        taoBang(data);

})
.catch(function(err) {

    document.getElementById("dsBayHT2").innerHTML =
        "❌ Lỗi tải danh sách: " + err.message;

});

break;

case "c1":

content.innerHTML = `
<h1>🏅 CHAMPIONS LEAGUE</h1>
<p>Giải C1 Clan Đại Việt</p>
`;

break;



case "5vs5":

content.innerHTML = `
<h1>⚔️ GIẢI 5 VS 5</h1>
<p>Thi đấu đồng đội</p>
`;

break;

case "3vs3":

content.innerHTML = `
<h1>🏆 GIẢI ĐẤU 3 VS 3</h1>

<p>CLAN ĐẠI VIỆT - RANK ESPORT</p>
<div style="text-align:center;margin:25px 0;">
<button
onclick="alert('Chức năng đăng ký sẽ mở trong thời gian tới')"
style="
background:#16a34a;
color:white;
padding:12px 28px;
font-size:18px;
font-weight:bold;
border:none;
border-radius:10px;
cursor:pointer;
margin-right:15px;
">

🟢 ĐĂNG KÝ GIẢI

</button>

<button
onclick="hienLuat3vs3()"
style="
background:#b8860b;
color:white;
padding:12px 28px;
font-size:18px;
font-weight:bold;
border:none;
border-radius:10px;
cursor:pointer;
margin-right:20px;
">

📜 ĐIỀU LỆ

</button>
<button onclick="bocTham3vs3()"
style="
padding:15px 40px;
font-size:20px;
font-weight:bold;
background:linear-gradient(#FFD700,#FF9900);
border:none;
border-radius:12px;
cursor:pointer;
box-shadow:0 0 15px gold;
">

🎲 BỐC THĂM CHIA BẢNG

</button>

</div>

<div id="ketquaBocTham"></div>

<hr>

<h2>📅 BẢNG THI ĐẤU</h2>
<div id="lich3vs3">⏳ Đang tải...</div>

<hr>

<h2>🏆 BẢNG A</h2>
<div id="bangA">⏳ Đang tải...</div>

<hr>

<h2>🏆 BẢNG B</h2>
<div id="bangB">⏳ Đang tải...</div>

<hr>

<h2>🏆 BẢNG C</h2>
<div id="bangC">⏳ Đang tải...</div>

<hr>

<h2>🏆 BẢNG D</h2>
<div id="bangD">⏳ Đang tải...</div>

<h2>⭐ ĐỘI CÓ NHIỀU LƯỢT 3 SAO NHẤT</h2>
<div id="topteam3">⏳ Đang tải...</div>

<hr>

<h2>💥 ĐỘI CÓ TỔNG SAO VÀ % PHÁ HỦY CAO NHẤT</h2>
<div id="toptrandau">⏳ Đang tải...</div>

<hr>

<h2>🔥 CÁ NHÂN CÓ NHIỀU LƯỢT 3 SAO NHẤT</h2>
<div id="topcanhan">⏳ Đang tải...</div>

<hr>

<h2>🛡 CÁ NHÂN PHÒNG THỦ 1 SAO NHIỀU NHẤT</h2>
<div id="topthu1sao">⏳ Đang tải...</div>
<hr>

<h2>🏆 ĐỘI GIÀNH QUYỀN VÀO TỨ KẾT</h2>

<div id="top8">
⏳ Đang tải...
</div>
`;

google.script.run.withSuccessHandler(function(data){
    document.getElementById("lich3vs3").innerHTML = taoBang(data);
}).get3vs3LichThiDau();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("bangA").innerHTML = taoBang(data);
}).get3vs3BangA();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("bangB").innerHTML = taoBang(data);
}).get3vs3BangB();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("bangC").innerHTML = taoBang(data);
}).get3vs3BangC();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("bangD").innerHTML = taoBang(data);
}).get3vs3BangD();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("topteam3").innerHTML = taoBang(data);
}).get3vs3TopTeam3Sao();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("toptrandau").innerHTML = taoBang(data);
}).get3vs3TopTranDau();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("topcanhan").innerHTML = taoBang(data);
}).get3vs3TopCaNhan();

google.script.run.withSuccessHandler(function(data){
    document.getElementById("topthu1sao").innerHTML = taoBang(data);
}).get3vs3TopThu1Sao();
google.script.run.withSuccessHandler(function(data){
    document.getElementById("top8").innerHTML = taoBang(data);
}).get3vs3Top8();
break;


case "reward":

google.script.run
.withSuccessHandler(function(html){

content.innerHTML = html;

})
.getReward();

break;


case "legend":

content.innerHTML = `

<h1>🥇 HUYỀN THOẠI 1</h1>

<p>
CLAN ĐẠI VIỆT - GIẢI ĐẤU HÀNG THÁNG
</p>


<hr>


<h2>📊 BẢNG XẾP HẠNG</h2>

<div id="ht1bxh">
⏳ Đang tải...
</div>


<hr>


<h2>⭐ TOP LIA 3 SAO</h2>

<div id="ht1top3">
⏳ Đang tải...
</div>


<hr>


<h2>🛡️ TOP THỦ 1 SAO</h2>

<div id="ht1topthu">
⏳ Đang tải...
</div>


<hr>


<h2>🔥 CHUỖI THẮNG LIÊN TIẾP</h2>

<div id="ht1chuoi">
⏳ Đang tải...
</div>

<hr>

<h2>📅 LỊCH THI ĐẤU & KẾT QUẢ</h2>

<div id="lichHT1">
⏳ Đang tải...
</div>


`;



// bảng xếp hạng

google.script.run
.withSuccessHandler(function(data){

document.getElementById("ht1bxh").innerHTML =
taoBang(data);

})
.getHuyenThoai1();



// top lia 3 sao

google.script.run
.withSuccessHandler(function(data){

document.getElementById("ht1top3").innerHTML =
taoBang(data);

})
.getHuyenThoai1Top3Sao();



// top thủ 1 sao

google.script.run
.withSuccessHandler(function(data){

document.getElementById("ht1topthu").innerHTML =
taoBang(data);

})
.getHuyenThoai1TopThu1Sao();



// chuỗi thắng

google.script.run
.withSuccessHandler(function(data){

document.getElementById("ht1chuoi").innerHTML =
taoBang(data);

})
.getHuyenThoai1ChuoiThang();


// Lịch thi đấu Huyền Thoại 1

google.script.run
.withSuccessHandler(function(data){


document.getElementById("lichHT1").innerHTML =
taoBang(data);

})
.withFailureHandler(function(err){

alert("Lỗi HT1: " + err.message);

})
.getLichHuyenThoai1();

break;

// ================================
// BAY CÚP HUYỀN THOẠI 2
// ================================
case "baycup2":

content.innerHTML = `

<h1>🏆 BAY CÚP HUYỀN THOẠI 2</h1>

<p>CLAN ĐẠI VIỆT - ĐĂNG KÝ BAY CÚP</p>

<div style="text-align:center;margin:25px 0;">

<button onclick="moFormBayCup2()"
style="
padding:15px 35px;
font-size:18px;
font-weight:bold;
background:linear-gradient(#FFD700,#FF9900);
color:#111;
border:none;
border-radius:12px;
cursor:pointer;
box-shadow:0 0 15px gold;
">
📝 ĐĂNG KÝ
</button>

</div>

<div id="formBayCup2"></div>

<hr>

<h2>📋 DANH SÁCH ĐĂNG KÝ</h2>

<div id="dsBayCup2">
⏳ Đang tải...
</div>

`;

taiDanhSachBayCup2();

break;


// ================================
// BAY CÚP HUYỀN THOẠI 1
// ================================
case "baycup1":

content.innerHTML = `

<h1>🏆 BAY CÚP HUYỀN THOẠI 1</h1>

<p>CLAN ĐẠI VIỆT - ĐĂNG KÝ BAY CÚP</p>

<div style="text-align:center;margin:25px 0;">

<button onclick="moFormBayCup1()"
style="
padding:15px 35px;
font-size:18px;
font-weight:bold;
background:linear-gradient(#FFD700,#FF9900);
color:#111;
border:none;
border-radius:12px;
cursor:pointer;
box-shadow:0 0 15px gold;
">
📝 ĐĂNG KÝ
</button>

</div>

<div id="formBayCup1"></div>

<hr>

<h2>📋 DANH SÁCH ĐĂNG KÝ</h2>

<div id="dsBayCup1">
⏳ Đang tải...
</div>

`;

taiDanhSachBayCup1();

break;

case "esport":

content.innerHTML = `
<h1>🎮 ESPORT</h1>
<p>Giải đấu cấp cao Clan Đại Việt</p>
`;

break;



case "hall":

content.innerHTML = `
<h1>👑 HALL OF FAME</h1>
<p>Vinh danh huyền thoại</p>
`;

break;


}
}
function taoBang(data){

  if (!data || data.length == 0){
    return `
      <div style="
      text-align:center;
      padding:30px;
      color:#ffcc00;
      font-size:22px;">
      Không có dữ liệu
      </div>`;
  }

  let html = `
  <div style="overflow-x:auto">

  <table style="
  width:max-content;
  border-collapse:collapse;
  font-size:16px;
  text-align:center;
  background:#111;
  color:white;
  min-width:1200px;
">

  <thead>

  <tr style="
  background:linear-gradient(90deg,#b30000,#ff0000);
  color:#fff;
  position:sticky;
  top:0;
  z-index:10;
  ">`;

  // Tiêu đề
  data[0].forEach(function(cell){

    html += `
    <th style="
    border:1px solid #555;
    padding:12px;
    white-space:nowrap;
    ">
    ${cell}
    </th>`;

  });

  html += "</tr></thead><tbody>";

  // Dữ liệu
  for(let r=1;r<data.length;r++){

    let mau = (r%2==0) ? "#1b1b1b" : "#111";

    // Tô màu Top 1 và Top 2
    if(data[r][0]=="1" || data[r][0]=="🥇"){
        mau="#006400";      // Xanh lá
    }

    else if(data[r][0]=="2" || data[r][0]=="🥈"){
        mau="#8B8000";      // Vàng
    }

    html += `<tr style="background:${mau};">`;

    data[r].forEach(function(cell){

      html += `
      <td style="
      border:1px solid #444;
      padding:10px;
      white-space:nowrap;
      ">
      ${cell==null?"":cell}
      </td>`;

    });

    html += "</tr>";
  }

  html += `
  </tbody>
  </table>
  </div>`;

  return html;

}
function taoBangThanhVien(data){

  if (!data || data.length == 0){
    return `
    <div style="
    text-align:center;
    padding:30px;
    color:#ffcc00;
    font-size:22px;">
    Không có dữ liệu
    </div>`;
  }

  let html=`
  <div style="overflow-x:auto">

  <table style="
  width:100%;
  border-collapse:collapse;
  background:#111;
  color:white;
  font-size:15px;
  min-width:1800px;
  ">

  <thead>

  <tr style="
  background:linear-gradient(90deg,#b30000,#ff0000);
  color:white;
  position:sticky;
  top:0;
  z-index:10;
  ">`;

  data[0].forEach(function(cell){

    html+=`
    <th style="
    padding:12px;
    border:1px solid #555;
    white-space:nowrap;
    ">
    ${cell}
    </th>`;

  });

  html+="</tr></thead><tbody>";



  for(let r=1;r<data.length;r++){

    let mau=(r%2==0)?"#1a1a1a":"#111";

    html+=`<tr style="background:${mau};">`;



    data[r].forEach(function(cell,c){

      let value=cell==null?"":cell;

      // Rank hiện tại
if(c==6){

  if(value=="Esport")
    value='<span style="background:linear-gradient(90deg,#8b0000,#ff0000);color:white;padding:6px 14px;border-radius:25px;font-weight:bold;box-shadow:0 0 12px red;">🎮 ESPORT</span>';

  else if(value=="Huyền Thoại 1")
    value='<span style="background:linear-gradient(90deg,#8b0000,#ff0000);color:#fff;padding:6px 14px;border-radius:25px;font-weight:bold;box-shadow:0 0 15px red;border:2px solid gold;">🔥 HUYỀN THOẠI 1</span>';

  else if(value=="Huyền Thoại 2")
    value='<span style="background:linear-gradient(90deg,#ff6600,#ff9900);color:white;padding:6px 14px;border-radius:25px;font-weight:bold;box-shadow:0 0 15px orange;border:2px solid gold;">🟠 HUYỀN THOẠI 2</span>';

  else if(value=="Huyền Thoại 3")
    value='<span style="background:linear-gradient(90deg,#ffd700,#fff176);color:black;padding:6px 14px;border-radius:25px;font-weight:bold;box-shadow:0 0 15px gold;border:2px solid #ff9900;">🟡 HUYỀN THOẠI 3</span>';

  else if(value=="Titan")
    value='<span style="background:linear-gradient(90deg,#5a00b5,#9b59ff);color:white;padding:6px 14px;border-radius:25px;font-weight:bold;box-shadow:0 0 15px #9b59ff;">🟪 TITAN</span>';

  else if(value=="Champion")
    value='<span style="background:linear-gradient(90deg,#008c3a,#00cc66);color:white;padding:6px 14px;border-radius:25px;font-weight:bold;box-shadow:0 0 15px #00ff66;">🟩 CHAMPION</span>';

}

      // War7D
      if(c==10){

  if(value=="✅")
    value='<span style="background:#0b8f2f;color:white;padding:5px 10px;border-radius:20px;">🟢 ĐĂNG KÝ</span>';

  else if(value=="⏳")
    value='<span style="background:#ff9900;color:black;padding:5px 10px;border-radius:20px;">⏳ CHỜ CẬP NHẬT</span>';

  else
    value='<span style="background:#b30000;color:white;padding:5px 10px;border-radius:20px;">🔴 KHÔNG</span>';

}

      // War thường
      if(c==11){

  if(value=="✅")
    value='<span style="background:#0b8f2f;color:white;padding:5px 10px;border-radius:20px;">🟢 THAM GIA</span>';

  else if(value=="⏳")
    value='<span style="background:#ff9900;color:black;padding:5px 10px;border-radius:20px;">⏳ CHỜ CẬP NHẬT</span>';

  else
    value='<span style="background:#b30000;color:white;padding:5px 10px;border-radius:20px;">🔴 VẮNG</span>';

}

      // Kết quả
if(c==14){

  if(value=="ĐẠT")
    value='<span style="background:#009933;color:white;padding:5px 10px;border-radius:20px;">🟢 ĐẠT</span>';

  else if(value=="THEO DÕI")
    value='<span style="background:#ffcc00;color:black;padding:5px 10px;border-radius:20px;">🟡 THEO DÕI</span>';

  else if(value=="⏳")
    value='<span style="background:#ff9900;color:black;padding:5px 10px;border-radius:20px;">⏳ CHỜ CẬP NHẬT</span>';

  else if(value=="LOẠI")
    value='<span style="background:#b30000;color:white;padding:5px 10px;border-radius:20px;">🔴 LOẠI</span>';

}

      // Chức vụ
      if(c==15){

        if(value=="Leader")
        value='<span style="background:#b30000;color:gold;padding:5px 12px;border-radius:20px;font-weight:bold;">👑 LEADER</span>';

        else if(value=="Co-Leader")
        value='<span style="background:#6a0dad;color:white;padding:5px 12px;border-radius:20px;font-weight:bold;">⭐ CO-LEADER</span>';
else if(value=="Huynh Trưởng")
  value='<span style="background:linear-gradient(90deg,#ff6a00,#ffd700);color:#000;padding:5px 12px;border-radius:20px;font-weight:bold;box-shadow:0 0 8px gold;">⚜️ HUYNH TRƯỞNG</span>';
        else if(value=="Elder")
        value='<span style="background:#0066cc;color:white;padding:5px 12px;border-radius:20px;font-weight:bold;">🛡 ELDER</span>';

        else
        value='<span style="background:#666;color:white;padding:5px 12px;border-radius:20px;font-weight:bold;">⚔ MEMBER</span>';

      }

      html+=`
      <td style="
      padding:10px;
      border:1px solid #444;
      white-space:nowrap;
      ">
      ${value}
      </td>`;

    });

    html+="</tr>";

  }

  html+=`
  </tbody>
  </table>
  </div>`;

  return html;

}
function bocTham3vs3(){

  google.script.run
    .withSuccessHandler(function(data){

      document.getElementById("ketquaBocTham").innerHTML = taoBang(data);

    })
    .withFailureHandler(function(err){
      alert("Lỗi: " + err.message);
    })
    .bocTham3vs3();

}
function hienLuat3vs3(){

document.getElementById("luat3vs3").innerHTML = `

<div style="
background:#111;
color:white;
padding:20px;
border-radius:15px;
margin-top:15px;
line-height:1.7;
">

<h2 style="
color:gold;
text-align:center;
">
🏆 LUẬT THI ĐẤU 3VS3 ESPORT
</h2>

<hr>

<h3>1️⃣ VÒNG BẢNG</h3>

<p>
🎮 Đánh theo thời gian, chuẩn bị 5 phút thi đấu 15 phút
<br>
(1 trận 3vs3 chế độ thể thao điện tử)

<br><br>

⏱ Time A: 10 - 5 - 1
<br>
⏱ Time B: 10 - 5 - 1

<br><br>

👉 Sai lệch thời gian: +/− 30s

<br><br>

💚 Tính điểm:

<br>
⭐ Tính Sao
<br>
💥 Tính % Phá Huỷ
<br>
⏱ Tính Thời Gian

<br><br>

➡️ ĐIỂM hơn % = WIN

</p>


<hr>


<h3>🔊 VÒNG BẢNG TÍNH ĐIỂM</h3>

<p>

🏆 Thắng: 3Đ
<br>
( Tính ⭐ + % Phá Huỷ )

<br><br>

🤝 Hoà: 1Đ
<br>
( Hoà ⭐ + Hoà % Phá Huỷ )

<br><br>

❌ Thua: 0Đ

</p>


<hr>


<h3>2️⃣ VÒNG CHIA NHÁNH TRÊN - NHÁNH DƯỚI</h3>


<h4>🔥 BO2: Lượt đi & Lượt về</h4>

<p>

🎮 Thi đấu 2 trận

<br><br>

🔹 Lượt 1:

<br>
⏱ Time A: 25 - 15 - 5

<br>
⏱ Time B: 20 - 10 - 1


<br><br>

🔹 Lượt 2:

<br>
⏱ Time B: 25 - 15 - 5

<br>
⏱ Time A: 20 - 10 - 1


<br><br>

❤️ Kết quả 2 BO cộng lại

<br><br>

✔️ Hơn ⭐ = WIN

<br>

✅ Bằng ⭐ → hơn % Phá Huỷ = WIN

</p>


<hr>


<h3>3️⃣ BÁN KẾT + CHUNG KẾT</h3>


<h4>🔥 BO3: Thi đấu 3 trận</h4>

<p>

🔹 Lượt 1:

<br>
⏱ Time A: 25 - 15 - 5

<br>
⏱ Time B: 20 - 10 - 1


<br><br>

🔹 Lượt 2:

<br>
⏱ Time B: 25 - 15 - 5

<br>
⏱ Time A: 20 - 10 - 1


<br><br>

❤️ Tính WIN từng trận

<br>
( Chạm 2 = WIN )


<br><br>

✔️ Hơn ⭐ = WIN

<br>

✅ Bằng ⭐ → hơn % Phá Huỷ = WIN

</p>


<hr>


<h3>⚠️ LƯU Ý</h3>

<p>

❌ Sai thời gian: -1 ⭐

<br><br>

❌ Không công nhận kết quả ngoài hệ thống.

<br><br>

✅ Lấy kết quả cuối cùng từ hệ thống Clash of Clans

<br><br>

✅ Team A luôn là Team thách đấu

<br>

(Trừ khi 2 đội có sự thoả thuận với nhau)

</p>


</div>

`;
}
// ===============================
// FORM ĐĂNG KÝ BAY CÚP HUYỀN THOẠI 2
// ===============================
function moFormBayHT2() {

    const form = document.getElementById("formBayHT2");

    form.innerHTML = `
        <div style="
            background:#222;
            padding:20px;
            border-radius:12px;
            margin:20px auto;
            max-width:700px;
            border:1px solid #8b0000;
        ">

            <h2 style="color:#ffd700;text-align:center;">
                📝 ĐĂNG KÝ BAY CÚP HUYỀN THOẠI 2
            </h2>

            <label>Zalo:</label>
            <input id="bayht2_zalo"
                type="text"
                placeholder="Nhập tên Zalo"
                style="width:100%;padding:10px;margin:8px 0;">

            <label>Số lượng acc:</label>
            <input id="bayht2_soAcc"
                type="number"
                min="1"
                max="10"
                value="1"
                style="width:100%;padding:10px;margin:8px 0;"
                onchange="taoAccBayHT2()">

            <div id="accBayHT2"></div>

            <button onclick="guiDangKyBayHT2()"
                style="
                    background:#ffd000;
                    color:#000;
                    padding:12px 30px;
                    border:0;
                    border-radius:8px;
                    font-weight:bold;
                    cursor:pointer;
                    margin-top:15px;
                ">
                ✅ XÁC NHẬN ĐĂNG KÝ
            </button>

        </div>
    `;

    taoAccBayHT2();
}
function taoAccBayHT2() {

  const soAcc = Number(
    document.getElementById("bayht2_soAcc").value
  );

  let html = "";

  for (let i = 1; i <= soAcc; i++) {

    html += `
      <div style="
        margin-top:15px;
        padding:15px;
        background:#151515;
        border-radius:8px;
      ">

        <b style="color:#ffd700;">
          ACC ${i}
        </b>

        <input
          id="bayht2_nick${i}"
          type="text"
          placeholder="Nick game ${i}"
          style="width:100%;padding:10px;margin-top:8px;"
        >

        <input
          id="bayht2_code${i}"
          type="text"
          placeholder="Mã code ${i}"
          style="width:100%;padding:10px;margin-top:8px;"
        >

      </div>
    `;
  }

  document.getElementById("accBayHT2").innerHTML = html;
}

function guiDangKyBayHT2() {

  const zalo = document.getElementById("bayht2_zalo").value.trim();

  const soAcc = Number(
    document.getElementById("bayht2_soAcc").value
  );

  if (!zalo) {
    alert("❌ Vui lòng nhập Zalo!");
    return;
  }

  const data = {
    action: "DangKyBayCupHuyenThoai2",
    zalo: zalo,
    soAcc: soAcc
  };

  for (let i = 1; i <= soAcc; i++) {

    data["nick" + i] =
      document.getElementById("bayht2_nick" + i).value.trim();

    data["code" + i] =
      document.getElementById("bayht2_code" + i).value.trim();

    if (!data["nick" + i] || !data["code" + i]) {
      alert("❌ Vui lòng nhập đủ Nick và Mã code của ACC " + i);
      return;
    }
  }

  api("DangKyBayCupHuyenThoai2", data)
.then(function(res) {

    if (res.status === "success") {

        alert("✅ Đăng ký thành công!");

        showPage("bayht2");

    } else {

        alert("❌ " + (res.message || "Đăng ký thất bại!"));

    }

})
.catch(function(err) {

    alert("❌ Lỗi: " + err.message);

});
}
async function taiDanhSachBayCup2() {
  const box = document.getElementById("dsBayCup2");

  if (!box) return;

  box.innerHTML = "⏳ Đang tải danh sách...";

  try {
    const data = await api("getDanhSachBayCup2");

    if (!data || data.length === 0) {
      box.innerHTML = "📭 Chưa có ai đăng ký.";
      return;
    }

    let html = `
      <table style="
        width:100%;
        border-collapse:collapse;
        margin-top:10px;
        color:white;
        text-align:center;
      ">
        <thead>
          <tr style="background:#b30000;color:#fff;">
            <th style="padding:10px;border:1px solid #555;">STT</th>
            <th style="padding:10px;border:1px solid #555;">Zalo</th>
            <th style="padding:10px;border:1px solid #555;">Nick game</th>
            <th style="padding:10px;border:1px solid #555;">Mã code</th>
            <th style="padding:10px;border:1px solid #555;">Đã đóng tiền</th>
            <th style="padding:10px;border:1px solid #555;">Lên hạng</th>
          </tr>
        </thead>
        <tbody>
    `;

    data.forEach(function(row, index) {
      html += `
        <tr style="background:${index % 2 === 0 ? '#111' : '#222'};">
          <td style="padding:10px;border:1px solid #444;">${index + 1}</td>
          <td style="padding:10px;border:1px solid #444;">${row[1] || ""}</td>
          <td style="padding:10px;border:1px solid #444;">${row[2] || ""}</td>
          <td style="padding:10px;border:1px solid #444;">${row[3] || ""}</td>
          <td style="padding:10px;border:1px solid #444;">${row[4] || ""}</td>
          <td style="padding:10px;border:1px solid #444;">${row[5] || ""}</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    box.innerHTML = html;

  } catch (err) {
    console.error(err);
    box.innerHTML = "❌ Lỗi tải danh sách: " + err.message;
  }
}