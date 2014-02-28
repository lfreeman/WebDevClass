(function () {
    var productsListDiv = document.getElementById('products_list_div');
    var searchDiv = document.getElementById('search_div');
    var searchForm = document.getElementById('search_form');
    var searchButton = document.getElementById('searchBtn');

    function getQueryParams(qs) {
        qs = qs.split("+").join(" ");
        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])]
                = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    function showSearchForm() {
        console.log('showSearchForm');
        productsListDiv.style.display = "none";
        searchForm.style.display = "none";
        searchDiv.style.display = "block";
    }

    var $_GET = getQueryParams(document.location.search);
    console.log($_GET);
    if (!jQuery.isEmptyObject($_GET)) {
        showSearchForm();
        $('#minPriceId').val(1000)
        $('#maxPriceId').val(1500)



        $('#dp3').datepicker("setDate", new Date());
        $("#dp3").datepicker('update');

//        $('.datepicker').datepicker({
//            startDate: '-3d'
//        })
    }

    $('#ex2').slider().on('slide', function (ev) {
        $('#minPriceId').val(ev.value[0])
        $('#maxPriceId').val(ev.value[1])
    });
})();
