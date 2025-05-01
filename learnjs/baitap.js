// Bài tập 1: Kiểm tra thông tin người dùng
// Mô tả: Viết hàm nhận vào một chuỗi tên người dùng và kiểm tra xem tên người dùng có phải là "admin" hay không.
// Nếu có, trả về "Welcome admin", nếu không trả về "Welcome [tên người dùng]".
// Kiến thức sử dụng: toLowerCase()
function userName(name) {
    if (name.toLowerCase() === "admin") {
      return "Welcome admin";
    } else {
      return ("Welcome " + name).toLowerCase();
    }
  }
  console.log(userName("Admin"));
  console.log(userName("ADMIN"));
  console.log(userName("adMin"));
  console.log(userName("Ngocha"));
  console.log(userName("123A@"));
  
  // Bài tập 2: Chuyển đổi mã sản phẩm
  // Mô tả: Viết một hàm nhận vào mã sản phẩm (chuỗi) và trả về mã sản phẩm đó với tất cả các ký tự chữ hoa, giúp chuẩn hóa mã sản phẩm.
  // Kiến thức sử dụng: toUpperCase()
  function idProduct(id){
      return id.toUpperCase();
     }
     console.log("Mã sản phẩm là", idProduct("abcde"));
     console.log("Mã sản phẩm là", idProduct("Abc123"));
     console.log("Mã sản phẩm là", idProduct("@abc123"));
  
  // Bài tập 3: Xử lý chuỗi tìm kiếm
  // Mô tả: Viết một hàm sanitizeSearchString(str) nhận vào một chuỗi tìm kiếm và trả về chuỗi đã loại bỏ khoảng trắng ở đầu và cuối, giúp chuẩn bị cho việc tìm kiếm.
  // Kiến thức sử dụng: trim()
  function sanitizeSearchString(str){
      return str.trim();
    }
    console.log(sanitizeSearchString("     Ngocha    "));
    console.log(sanitizeSearchString("     123456    "));
    console.log(sanitizeSearchString("     ABC@@@    "));
  
  // Bài tập 4: Lọc danh sách học viên
  // Mô tả: Viết một hàm nhận vào một danh sách các học viên (mảng các chuỗi) và trả về một danh sách mới chỉ chứa các học viên có tên bắt đầu bằng chữ cái "A".
  // Kiến thức sử dụng: filter()
  function listStudents(students){
      return students.filter(function(name){
        return name[0].normalize() === "A"
      })
    }
    let Students = ["Hà","Ánh","Anh","Linh", "An","Minh"];
    console.log(listStudents(Students));
  //Làm cách nào để hiển thị cả tên Ánh????
  
  // Bài tập 5: Phân tích dữ liệu đơn giản
  // Mô tả: Viết hàm nhận vào một chuỗi số và phân tách chúng thành một mảng các số riêng biệt. Sau đó tính tổng của tất cả các số trong mảng.
  // Kiến thức sử dụng: split(), reduce()
  // -> chưa làm được
  
  // Bài tập 6: Tìm sản phẩm đắt nhất
  // Mô tả: Viết một hàm nhận vào một mảng các đối tượng sản phẩm, mỗi đối tượng chứa tên và giá. Hàm sẽ tìm sản phẩm có giá trị cao nhất và trả về tên của sản phẩm đó.
  // Kiến thức sử dụng: reduce()
  // -> chưa làm được
  
  // Bài tập 7: Duyệt qua danh sách tên
  // Mô tả: Viết một hàm nhận vào một mảng các tên và in ra từng tên theo định dạng "Hello, [tên]!".
  // Kiến thức sử dụng: forEach()
  function listName(names){
      names.forEach(function(name){
        console.log("Hello, " + [name]+"!") 
      })
    }
    let listPeople = ["Hà","Ánh","Anh","Linh", "An","Minh"];
    console.log(listName(listPeople));
  
  // Bài tập 8: Tính tổng điểm học sinh
  // Mô tả: Viết một hàm nhận vào một mảng các điểm thi của học sinh và trả về tổng điểm của tất cả học sinh.
  // Kiến thức sử dụng: reduce()
  function totalScores(scores){
      return scores.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
      }, 0);
    }
    let listScores = [8.5, 10, 7, 8, 6.25];
    console.log("Tổng điểm là:", totalScores(listScores));
  
  // Bài tập 9: Kiểm tra sự tồn tại của từ khóa
  // Mô tả: Viết hàm isKeywordPresent(text, keyword) nhận vào một đoạn văn bản và một từ khóa, kiểm tra xem từ khóa có tồn tại trong đoạn văn bản không.
  // Kiến thức sử dụng: includes()
  function isKeywordPresent(text, keyword){
      return text.includes(keyword);
    }
    console.log(isKeywordPresent("Tôi tên là Ngọc Hà", "Ngọc Hà"));
    console.log(isKeywordPresent("Tôi tên là Ngọc Hà", "ABC"));
  
  //   Bài tập 10: Tạo mảng số nguyên
  //   Mô tả: Viết một hàm nhận vào một mảng số thực và trả về một mảng mới chỉ chứa các số nguyên từ mảng ban đầu.
  //   Kiến thức sử dụng: filter()
  
  
  // Bài tập 11: Tách số điện thoại
  // Mô tả: Viết một hàm nhận vào một chuỗi số điện thoại và tách nó thành các phần: mã quốc gia, mã vùng và số điện thoại.
  // Kiến thức sử dụng: split()
  
  
  // Bài tập 12: Tạo chuỗi mật khẩu
  // Mô tả: Viết một hàm tạo mật khẩu ngẫu nhiên dài 8 ký tự bao gồm chữ hoa, chữ thường và số. Hàm trả về mật khẩu tạo ra.
  // Kiến thức sử dụng: Math.random(), toUpperCase(), toLowerCase()
  
  
  // Bài tập 14: Tính tuổi từ ngày sinh
  // Mô tả: Viết hàm nhận vào ngày sinh của người dùng dưới dạng chuỗi và trả về tuổi của họ.
  // Kiến thức sử dụng: Date(), getFullYear()
  
  
  // Bài tập 16: Xử lý thông tin người dùng
  // Mô tả: Viết một hàm nhận vào thông tin người dùng gồm tên và email, chuẩn hóa tất cả các chữ cái trong tên thành chữ hoa và kiểm tra xem email có hợp lệ không.
  // Kiến thức sử dụng: toUpperCase(), includes()
  
  
  // Bài tập 17: Xử lý thông báo
  // Mô tả: Viết một hàm nhận vào thông báo lỗi và kiểm tra nếu thông báo chứa từ khóa "Error". Nếu có, trả về "Critical Error"; nếu không trả về thông báo gốc.
  // Kiến thức sử dụng: includes()
  
  
  // Bài tập 18: Tính điểm trung bình
  // Mô tả: Viết một hàm nhận vào mảng các điểm thi của học sinh và tính điểm trung bình. Nếu điểm trung bình trên 8, in ra "Pass", nếu dưới 5, in ra "Fail", còn lại in "Review".
  // Kiến thức sử dụng: reduce()