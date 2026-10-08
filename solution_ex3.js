// Minh họa cơ chế Hoisting của Function Declaration
// Hàm được đưa lên đầu phạm vi nên gọi trước khi định nghĩa vẫn chạy bình thường
turnOnLightDeclaration();

function turnOnLightDeclaration() {
  console.log("Function Declaration: Đèn đã bật (Chạy thành công nhờ Hoisting)");
}

// Minh họa cơ chế Hoisting của Function Expression
// Khai báo bằng const nên dính Temporal Dead Zone (TDZ), gọi trước sẽ báo lỗi ReferenceError
// turnOnLightExpression(); // Gây lỗi: Cannot access 'turnOnLightExpression' before initialization

const turnOnLightExpression = function () {
  console.log("Function Expression: Đèn đã bật");
};

turnOnLightExpression();

// Minh họa cơ chế Hoisting của Arrow Function
// Khai báo bằng const nên cũng dính TDZ, bắt buộc phải định nghĩa trước khi gọi
// turnOnLightArrow(); // Gây lỗi: Cannot access 'turnOnLightArrow' before initialization

const turnOnLightArrow = () => {
  console.log("Arrow Function: Đèn đã bật");
};

turnOnLightArrow();

// Minh họa sự khác biệt của Lexical this
const smartHub = {
  hubName: "Trung tâm điều khiển Smart Home",
  devices: ["Đèn", "Quạt"],

  // Dùng hàm truyền thống: this trỏ tới đối tượng smartHub
  showDevicesRegular: function () {
    console.log("Tên trạm:", this.hubName);
  },

  // Arrow function trong callback giữ nguyên this của ngữ cảnh bao ngoài
  listDevicesArrow: function () {
    this.devices.forEach((device) => {
      console.log(this.hubName + " đang quản lý: " + device);
    });
  }
};

console.log("Kiểm thử Lexical this:");
smartHub.showDevicesRegular();
smartHub.listDevicesArrow();