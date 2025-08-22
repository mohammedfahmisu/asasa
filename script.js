document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'home.html';
    } else {
        alert('خطأ في اسم المستخدم أو كلمة المرور');
    }
});

// وظائف إضافية لإدارة العملاء والموردين والمخازن والفواتير
function addCustomer() {
    // منطق إضافة عميل
}

function addSupplier() {
    // منطق إضافة مورد
}

function addProduct() {
    // منطق إضافة صنف
}

function generateReport() {
    // منطق توليد التقرير
}