const SHEET_ID = "19pne92uaPAK2YH6N0IXfty7sChZOe7Q0vhXhIKug53k";


// Mở trang web

function doGet(e) {

  // Nếu gọi API
  if (e && e.parameter.action) {

    let data;

    switch (e.parameter.action) {

      case "TrangChu":
        data = getTrangChu();
        break;

      case "DanhSachGiai":
        data = getDanhSachGiai();
        break;

      case "NgoaiHangAnh":
        data = getNgoaiHangAnh();
        break;

      case "Top3Sao":
        data = getTop3Sao();
        break;

      case "TopThu1Sao":
        data = getTopThu1Sao();
        break;

      case "ChuoiThang":
        data = getChuoiThang();
        break;

      case "ThanhVien":
        data = getDanhSachThanhVien();
        break;
case "LichNgoaiHangAnh":
  data = getLichNgoaiHangAnh();
  break;

case "HuyenThoai1":
  data = getHuyenThoai1();
  break;

case "BayCupHuyenThoai2":
  data = getBayCupHuyenThoai2();
  break;

case "HuyenThoai1Top3Sao":
  data = getHuyenThoai1Top3Sao();
  break;

case "HuyenThoai1TopThu1Sao":
  data = getHuyenThoai1TopThu1Sao();
  break;

case "HuyenThoai1ChuoiThang":
  data = getHuyenThoai1ChuoiThang();
  break;

case "LichHuyenThoai1":
  data = getLichHuyenThoai1();
  break;
case "MediaCenter":
  data = getMediaCenter();
  break;
case "3vs3LichThiDau":
  data = get3vs3LichThiDau();
  break;

case "3vs3BangA":
  data = get3vs3BangA();
  break;

case "3vs3BangB":
  data = get3vs3BangB();
  break;

case "3vs3BangC":
  data = get3vs3BangC();
  break;

case "3vs3BangD":
  data = get3vs3BangD();
  break;

case "3vs3TopTeam3Sao":
  data = get3vs3TopTeam3Sao();
  break;

case "3vs3TopTranDau":
  data = get3vs3TopTranDau();
  break;

case "3vs3TopCaNhan":
  data = get3vs3TopCaNhan();
  break;

case "3vs3TopThu1Sao":
  data = get3vs3TopThu1Sao();
  break;

case "3vs3Top8":
  data = get3vs3Top8();
  break;
  case "BocTham3vs3":
  data = bocTham3vs3();
  break;
  case "DangKy3vs3":
  data = dangKy3vs3(e);
  break;
  case "DemTeam3vs3":
  data = demTeam3vs3();
  break;
  case "DanhSachTeam3vs3":
  data = getDanhSachTeam3vs3();
  break;
  case "DangKyBayCupHuyenThoai1":
  data = DangKyBayCupHuyenThoai1(e);
  break;
  case "DangKyBayCupHuyenThoai2":
  data = xuLyDangKyBayCupHuyenThoai2(e);
  break;
      default:
        data = {
          status: "error",
          message: "API không tồn tại"
        };
    }

    // ================================
// TRẢ API - HỖ TRỢ JSONP + JSON
// ================================

if (e.parameter.callback) {

  const callback = e.parameter.callback;

  return ContentService
    .createTextOutput(
      callback + "(" + JSON.stringify(data) + ")"
    )
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

// Gọi API bình thường
return ContentService
  .createTextOutput(JSON.stringify(data))
  .setMimeType(ContentService.MimeType.JSON);
  }

  // Truy cập website bình thường
  return HtmlService
    .createTemplateFromFile("index")
    .evaluate()
    .setTitle("CLAN ĐẠI VIỆT");

}


// Lấy tiêu đề và danh sách giải

function getTrangChu() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("TrangChu");

  return sheet.getRange("A1:B7").getValues();

}


// Lấy 6 giải đấu

function getDanhSachGiai() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("TrangChu");

  return sheet.getRange("B2:B8").getValues();

}



// ============================
// NGOẠI HẠNG ANH
// ============================


// Bảng xếp hạng

function getNgoaiHangAnh() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("NgoaiHangAnh");

  return sheet.getDataRange().getValues();

}


// Top lia 3 sao

function getTop3Sao() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("Top3Sao");

  return sheet.getDataRange().getValues();

}


// Top thủ 1 sao

function getTopThu1Sao() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("TopThu1Sao");

  return sheet.getDataRange().getValues();

}


// Chuỗi thắng liên tiếp

function getChuoiThang() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("ChuoiThang");

  return sheet.getDataRange().getValues();

}
// ============================
// HUYỀN THOẠI 1
// ============================


// Bảng xếp hạng Huyền Thoại 1

function getHuyenThoai1() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("HuyenThoai1");

  return sheet.getDataRange().getValues();

}


// Top lia 3 sao

function getHuyenThoai1Top3Sao() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("HuyenThoai1_Top3Sao");

  return sheet.getDataRange().getValues();

}


// Top thủ 1 sao

function getHuyenThoai1TopThu1Sao() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("HuyenThoai1_TopThu1Sao");

  return sheet.getDataRange().getValues();

}


// Chuỗi thắng

function getHuyenThoai1ChuoiThang() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("HuyenThoai1_ChuoiThang");

  return sheet.getDataRange().getValues();

}

// ============================
// LỊCH THI ĐẤU NGOẠI HẠNG ANH
// ============================

function getLichNgoaiHangAnh() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName("NgoaiHangAnh_LichThiDau");

  const data = sheet.getDataRange().getDisplayValues();

  Logger.log(JSON.stringify(data));

  return data;
}




// ============================
// LỊCH THI ĐẤU HUYỀN THOẠI 1
// ============================

function getLichHuyenThoai1(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("HuyenThoai1_LichThiDau");

  Logger.log("Tên sheet: " + sheet.getName());
  Logger.log("Số dòng: " + sheet.getLastRow());

  return sheet.getDataRange().getDisplayValues();

}


// Gọi file HTML phụ

function include(filename) {

  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();

}
// ============================
// DANH SÁCH THÀNH VIÊN
// ============================

function getDanhSachThanhVien(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("DanhSachThanhVien");

  return sheet.getDataRange().getDisplayValues();

}
function get3vs3() {
  return HtmlService.createHtmlOutputFromFile("3vs3").getContent();
}

function getReward() {
  return HtmlService.createHtmlOutputFromFile("Reward").getContent();
}
// =======================
// 3VS3
// =======================

function get3vs3LichThiDau(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  return ss.getSheetByName("3vs3_LichThiDau")
           .getDataRange()
           .getDisplayValues();

}

function get3vs3BangDiem(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  return ss.getSheetByName("3vs3_BangDiem")
           .getDataRange()
           .getDisplayValues();

}

function get3vs3TopTeam3Sao(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  return ss.getSheetByName("3vs3_TopTeam3Sao")
           .getDataRange()
           .getDisplayValues();

}

function get3vs3TopTranDau(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  return ss.getSheetByName("3vs3_TopTranDau")
           .getDataRange()
           .getDisplayValues();

}

function get3vs3TopCaNhan(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  return ss.getSheetByName("3vs3_TopCaNhan")
           .getDataRange()
           .getDisplayValues();

}

function get3vs3TopThu1Sao(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  return ss.getSheetByName("3vs3_TopThu1Sao")
           .getDataRange()
           .getDisplayValues();

}
function get3vs3BangA(){
  const ss = SpreadsheetApp.openById(SHEET_ID);
  return ss.getSheetByName("3vs3_BangA").getDataRange().getDisplayValues();
}

function get3vs3BangB(){
  const ss = SpreadsheetApp.openById(SHEET_ID);
  return ss.getSheetByName("3vs3_BangB").getDataRange().getDisplayValues();
}

function get3vs3BangC(){
  const ss = SpreadsheetApp.openById(SHEET_ID);
  return ss.getSheetByName("3vs3_BangC").getDataRange().getDisplayValues();
}

function get3vs3BangD(){
  const ss = SpreadsheetApp.openById(SHEET_ID);
  return ss.getSheetByName("3vs3_BangD").getDataRange().getDisplayValues();
}
function get3vs3Top8(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  let ketqua = [];

  ["3vs3_BangA","3vs3_BangB","3vs3_BangC","3vs3_BangD"].forEach(function(name){

    let sheet = ss.getSheetByName(name);

    let data = sheet.getDataRange().getDisplayValues();

    if(data.length >= 3){

      ketqua.push(data[1]); // Top 1
      ketqua.push(data[2]); // Top 2

    }

  });

  return ketqua;

}
function bocTham3vs3(){

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const ds = ss.getSheetByName("3vs3Team")
               .getRange(2,2,16,1)
               .getValues()
               .flat();

  // Trộn ngẫu nhiên
  for(let i=ds.length-1;i>0;i--){

    let j=Math.floor(Math.random()*(i+1));

    [ds[i],ds[j]]=[ds[j],ds[i]];

  }

  const out=[];

  let bang=["A","B","C","D"];

  for(let b=0;b<4;b++){

    for(let i=0;i<4;i++){

      out.push([bang[b],ds[b*4+i]]);

    }

  }

  const sh=ss.getSheetByName("3vs3_ChiaBang");

  sh.clear();

  sh.getRange(1,1,1,2).setValues([["Bảng","Team"]]);

  sh.getRange(2,1,out.length,2).setValues(out);

  return out;

}
function dangKy3vs3(e){

  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName("3vs3Team");

  const team = e.parameter.team.trim();
  const captain = e.parameter.captain.trim();
  const tv2 = e.parameter.tv2.trim();
  const tv3 = e.parameter.tv3.trim();

  const data = sheet.getRange(2,2,Math.max(sheet.getLastRow()-1,0),4).getValues();

  for(let i=0;i<data.length;i++){

    if(data[i][0].toLowerCase()==team.toLowerCase()){
      return {
        status:"error",
        message:"Tên đội đã tồn tại!"
      };
    }

    if(data[i][1].toLowerCase()==captain.toLowerCase()){
      return {
        status:"error",
        message:"Đội trưởng đã đăng ký!"
      };
    }

  }

  sheet.appendRow([
    sheet.getLastRow(),
    team,
    captain,
    tv2,
    tv3
  ]);

  return {
    status:"success"
  };

}
function demTeam3vs3() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName("3vs3Team");

  const team = Math.max(sheet.getLastRow() - 1, 0);

  return {
    team: team
  };
}
function getDanhSachTeam3vs3() {

  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName("3vs3Team");

  const data = sheet.getRange(
    2,
    2,
    Math.max(sheet.getLastRow() - 1, 0),
    1
  ).getDisplayValues();

  return data;

}
function getMediaCenter() {
  const sh = SpreadsheetApp.openById(SHEET_ID)
      .getSheetByName("MEDIA_CENTER");

  const values = sh.getDataRange().getDisplayValues();

  if (values.length <= 1) return [];

  const header = values.shift();

  return values.map(r => ({
    ID: r[0],
    TieuDe: r[1],
    Loai: r[2],
    LinkYouTube: r[3],
    Thumbnail: r[4],
    NgayDang: r[5],
    MoTa: r[6]
  }));
}
// ==========================================
// BAY CÚP HUYỀN THOẠI 2
// ==========================================

function dangKyBayCupHuyenThoai2(zalo, danhSachAcc) {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const tenSheet = "BayCupHuyenThoai2";

  let sheet = ss.getSheetByName(tenSheet);

  // Nếu chưa có sheet thì tự tạo
  if (!sheet) {

    sheet = ss.insertSheet(tenSheet);

    sheet.appendRow([
      "STT",
      "Zalo",
      "Nick game",
      "Mã code",
      "Đã đóng tiền",
      "Lên hạng"
    ]);

  }

  // Kiểm tra dữ liệu
  if (!zalo || !danhSachAcc || danhSachAcc.length === 0) {

    return {
      status: "error",
      message: "Thiếu thông tin đăng ký!"
    };

  }

  // Thêm từng acc thành một dòng
  danhSachAcc.forEach(function(acc) {

    sheet.appendRow([

      sheet.getLastRow() - 1,
      zalo,
      acc.nick,
      acc.code,
      "❌ Chưa",
      "❌ Chưa"

    ]);

  });
  }
// ==========================================
// XỬ LÝ ĐĂNG KÝ BAY CÚP HUYỀN THOẠI 2 TỪ WEBSITE
// ==========================================

function xuLyDangKyBayCupHuyenThoai2(e) {

  const zalo = e.parameter.zalo;
  const soAcc = Number(e.parameter.soAcc);

  const danhSachAcc = [];

  for (let i = 1; i <= soAcc; i++) {

    danhSachAcc.push({
      nick: e.parameter["nick" + i],
      code: e.parameter["code" + i]
    });

  }

  return dangKyBayCupHuyenThoai2(zalo, danhSachAcc);
}
  


// ==========================================
// LẤY DANH SÁCH BAY CÚP HUYỀN THOẠI 2
// ==========================================

function getBayCupHuyenThoai2() {


  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet = ss.getSheetByName("BayCupHuyenThoai2");

  return sheet.getDataRange().getDisplayValues();

}

// ==========================================
// LẤY DANH SÁCH BAY CÚP HUYỀN THOẠI 1
// ==========================================

function getBayCupHuyenThoai1() {

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet =
    ss.getSheetByName("BayCupHuyenThoai1");

  // Nếu chưa có sheet
  if (!sheet) {
    return [];
  }

  const lastRow = sheet.getLastRow();

  // Chỉ có hàng tiêu đề
  if (lastRow <= 1) {
    return [];
  }

  return sheet
    .getRange(2, 1, lastRow - 1, 7)
    .getDisplayValues();

}

// ==========================================
// ĐĂNG KÝ BAY CÚP HUYỀN THOẠI 1
// ==========================================

function DangKyBayCupHuyenThoai1(e) {

  const zalo = e.parameter.zalo;
  const soAcc = Number(e.parameter.soAcc);

  if (!zalo || !soAcc) {
    return {
      status: "error",
      message: "Thiếu thông tin đăng ký!"
    };
  }

  const ss = SpreadsheetApp.openById(SHEET_ID);

  const sheet =
    ss.getSheetByName("BayCupHuyenThoai1");

  if (!sheet) {
    return {
      status: "error",
      message: "Không tìm thấy sheet BayCupHuyenThoai1!"
    };
  }

  for (let i = 1; i <= soAcc; i++) {

    const nick = e.parameter["nick" + i];
    const code = e.parameter["code" + i];

    if (!nick || !code) {
      return {
        status: "error",
        message: "Thiếu Nick hoặc Mã code acc " + i
      };
    }

    sheet.appendRow([
      sheet.getLastRow(),
      zalo,
      nick,
      code,
      "",
      "❌ Chưa",
      "❌ Chưa"
    ]);

  }

  return {
    status: "success",
    message: "Đăng ký thành công!"
  };

}