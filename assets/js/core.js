function CallAjax(URL, Data, Type, CallBack, isFormData) {
    var obj = {
        url: URL,
        data: Data,
        type: Type,
        error: function () {
            if (CallBack) {
                CallBack("Error! Please Try Again");
            }
        },
        success: function (d) {
            if (CallBack) {
                CallBack(d || 'No - record Found');
            }
        }
    };
    if (isFormData) {
        obj['contentType'] = false;
        obj['processData'] = false;
    }
    $.ajax(obj);
}

function showmodal(id) {
    var modal = UIkit.modal("#" + id);
    modal.show();
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    } else {
        return (false);
    }
}


function validatePhoneNo(phoneNoDiv) {
    $('#' + phoneNoDiv).keydown(function (event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9
            || event.keyCode == 27 || event.keyCode == 13
            || (event.keyCode == 65 && event.ctrlKey === true)
            || (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}

function returnMsg(divTextId, TextMsg, divTextclass, divId) {
    altair_helpers.content_preloader_hide();
    $('#' + divTextId).html('').html(TextMsg);
    $('#' + divId).addClass(divTextclass).css('display', 'block');
    setTimeout(function () {
        $('#' + divTextId).html('');
        $('#' + divId).css('display', 'none');
    }, 4000);
}