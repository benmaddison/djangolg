/**
 * Created by Ben Maddison on 8/7/2016.
 */

$(document).ready(function () {
    $("#accept-terms-form").submit(function (event) {
        event.preventDefault();
        var query = $(this).serialize();
        $.getJSON("/enter/?", query, function (json) {
            $("[name$='auth_key']").val(json.key);
            $("#accept-terms-modal").modal('hide');
        }).fail(function () {
            $("#accept-terms-checkbox").popover('show');
        })
    })
    $("#accept-terms-modal").modal({
        backdrop: 'static',
        keyboard: false,
    });
    $("#router-select").change(function () {
        var router = $(this).val();
        $("[name='router']").val(router);
    });
    $("form.lg-control").each(function () {
        $(this).submit(function (event) {
            event.preventDefault();
            $("#raw-output-tab-link").tab('show');
            $("#progress").show("fast");
            $("#progress-bar").attr("style", "width:10%");
            $("#error-alert").hide("fast");
            $("#raw-output").text("Please wait...");
            $("#formatted-output").text("Please wait...");
            $("#progress-bar").attr("style", "width:20%");
            var query = $(this).serialize();
            $("#progress-bar").attr("style", "width:40%");
            $.getJSON("/lg/?", query, function (json) {
                $("#progress-bar").attr("style", "width:60%");
                if (json.err == null) {
                    $("#progress-bar").attr("style", "width:80%");
                    $("#raw-output").text(json.raw);
                    $("#formatted-output").text("Formatted output not supported for this query");
                    $("#progress-bar").attr("style", "width:100%");
                    $("#progress").hide("slow");
                    $("#progress-bar").attr("style", "width:0%");
                } else {
                    $("#progress-bar").attr("style", "width:80%");
                    $("#raw-output").text("An error occurred");
                    $("#formatted-output").text("An error occurred");
                    $("#error-alert").text(json.err).show("slow");
                    $("#progress-bar").attr("style", "width:100%");
                    $("#progress").hide("slow");
                    $("#progress-bar").attr("style", "width:0%");
                }
            }).fail(function () {
                $("#progress-bar").attr("style", "width:80%");
                $("#raw-output").text("An error occurred");
                $("#formatted-output").text("An error occurred");
                $("#error-alert").show(slow);
                $("#progress-bar").attr("style", "width:100%");
                $("#progress").hide("slow");
                $("#progress-bar").attr("style", "width:0%");
            })
        })
    })
});
