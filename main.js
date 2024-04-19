function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        //auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);
        // remove toast by click
        toast.onclick = function(e){
            console.log(e.target);
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        const icons = {
            success : 'fas fa-circle-check',
            info : 'fas fa-circle-info',
            warning : 'fas fa-triangle-exclamation',
            error : 'fas fa-circle-exclamation',
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s, forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <h3 class="toast__title">
            ${title}
        </h3>
        <p class="toast__msg">
            ${message}
        </p>
    </div>
    <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
    </div>
`;
        main.appendChild(toast);

    }
}
// toast({
//   title: "Success",
//   message: "Thành công 123",
//   type: "warning",
//   duration: 3000,
// });

function showSuccessToast(){
    toast({
        title: "Success",
        message: "Thành công",
        type: "success",
        duration: 3000,
      });
}
function showErrorToast(){
    toast({
        title: "Error",
        message: "Có lỗi",
        type: "error",
        duration: 1000,
      });
}
function showInfoToast(){
    toast({
        title: "Info",
        message: "Thông tin",
        type: "info",
        duration: 5000,
      });
}
function showWarningToast(){
    toast({
        title: "Warning",
        message: "Thông báo",
        type: "warning",
        duration: 3000,
      });
}
