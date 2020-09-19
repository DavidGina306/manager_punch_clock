/* global PrimeFaces, PF, PDFObject */
$("#form-login").ready(function () {
    $("[id='form-login:matricula']").focus();

    $(this).keypress(function (event) {
        if (event.which === 13) {
            $(this).find('.btn-login').click();
        }
    });
});

$(document).ready(function () {

    PrimeFaces.locales['pt'] = {closeText: 'Fechar', prevText: 'Anterior', nextText: 'Próximo', currentText: 'Começo', monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'], weekHeader: 'Semana', firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: '', timeOnlyTitle: 'Só Horas', timeText: 'Tempo', hourText: 'Hora', minuteText: 'Minuto', secondText: 'Segundo', ampm: false, month: 'Mês', week: 'Semana', day: 'Dia', allDayText: 'Todo o dia'};

    $(document).delegate(".dropdown-filter", "click", function (e) {
        e.stopPropagation();
    });
    $(document).delegate(".ui-autocomplete-item", "click", function (e) {
        e.stopPropagation();
    });
});

function borderedTableGerencial() {
    $('.table-gerencial tr.ui-widget-header').each(function (key) {
        var tr = $('[id*="form-report:table-report:' + key + ':"]');
        $(tr).last().addClass('border');
    });
}

function slideToggle(_this) {
    var body = $(_this).parent().find('.card-body');
    body.slideToggle();
}

function reportPage() {
    //window.open("data:text/html;charset=utf8,<html><head><link rel='icon' type='image/x-icon' href='../resources/img/favicon.png' /><title>Ocorrência</title></head><body></body></html>");

    $(this).target = "_blank";
    window.location = $(this).find("a").attr("href");
    console.log(window.location);
//    var win = window.open("/Ocorrencia/public/reports/pdf/test", '_blank');
//    if (win) {
//        //Browser has allowed it to be opened
//        win.focus();
//    } else {
//        //Browser has blocked it
//        alert('Please allow popups for this website');
//    }
}
function showLoadingIndex() {
    $('body').append('<div id="loadAjax" style="text-align: center; position: fixed;z-index: 9999;top: -100px;left: 0;bottom: 0;right: 0;height: 125%;width: 100%;background: rgba(0, 0, 0, 0.6);display: block;"><div style="text-align: center; width: 100%; top: 35%;position: fixed;color: white"><img src="resources/img/loading.svg" width="90px"/><br/>Aguarde...</div></div>');
}

function showLoading() {
    $('body').append('<div id="loadAjax" style="text-align: center; position: fixed;z-index: 9999;top: -100px;left: 0;bottom: 0;right: 0;height: 125%;width: 100%;background: rgba(0, 0, 0, 0.6);display: block;"><div style="text-align: center; width: 100%; top: 35%;position: fixed;color: white"><img src="../resources/img/loading.svg" width="90px"/><br/>Aguarde...</div></div>');
}

function hideLoading() {
    setTimeout(function () {
        $('#loadAjax').remove();
    }, 200);
}

function filterTablePortaria(event, datTabWidget) {
    if (event.keyCode === 13) {
        PF(datTabWidget).filter();

//        $(event.currentTarget).val('');
    }
}

function filterDataTable(event, datTabWidget) {
    if (event.keyCode === 13) {
        PF(datTabWidget).filter();
    }
}

function filterTable() {
    $('.table-filter .dropdown-toggle i').addClass('pulse-color');
}

function filterClean(widget) {
    $('.table-filter .dropdown-toggle i').removeClass('pulse-color');
    PF(widget).jq.focus();
}

function openDialog(args, dialogWidget) {
    var dialog = PF(dialogWidget);
    if (args.OPEN_DIALOG) {
        dialog.show();
    }
}

function closeDialog(args, dialogWidget) {
    var dialog = PF(dialogWidget);
    if (args.validationFailed || args.KEEP_DIALOG_OPENED) {
        $('[id*=\'' + dialog.id + '\']').effect('bounce', {times: 4, distance: 20}, 100);
    } else {
        dialog.hide();
    }
}

function openDialogWithFocus(args, dialogWidget) {
    $('.filter').removeClass('canFocus');
    PF(dialogWidget).show();
}

function closeDialogWithFocus(args, dialogWidget) {
    var dialog = PF(dialogWidget);
    if (args.validationFailed || args.KEEP_DIALOG_OPENED) {
    } else {
        dialog.hide();
        inputPortaria();
    }
}

function inputPortaria() {
    $('.filter').addClass('canFocus');
    $('.filter').focus();
}


function toggleBadgeFile(motivo) {
    if (motivo == '3') {
        $('.comprovante').removeClass('d-none');
        $('[id*=":bt-comprovante"]').removeClass('d-none');
    } else {
        $('.badge-comprovante').addClass('d-none');
        $('[id*=":bt-comprovante"]').addClass('d-inline-block');
    }
}

function checkDecisaoOcor(csDecOcor) {

    if (csDecOcor == '0' || csDecOcor == '1' || csDecOcor == '3') {

        $('[id="fmDec:hrDescontar"]').attr('disabled', 'true');
        $('[id="fmDec:hrDescontar"]').addClass('ui-state-disabled');
        $('label[for="fmDec:hrDescontar"]').addClass('ui-state-disabled');
    } else {

        $('[id="fmDec:hrDescontar"]').removeAttr('disabled');
        $('[id="fmDec:hrDescontar"]').removeClass('ui-state-disabled');
        $('label[for="fmDec:hrDescontar"]').removeClass('ui-state-disabled');
    }

    if (csDecOcor == '0') {
        $('#justrfi').hide();
    } else {
        $('#justrfi').show();
    }
}

function showReport(args, path) {
    if (args.validationFailed) {
    } else {
        window.open(path, '_blank');
    }
}