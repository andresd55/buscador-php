$(function () {
    $('#mostrarTodos').on('click', function () {
        $.ajax(
            {
                url: './data.php',
                type: 'GET',
                dataType: "json"
            }
        ).done(function (data) {
            var html =""
            $.each( data, function( key, element ) {

                html += '<div class="tituloContenido card" style=" background-color: white; ">'+
                '<div style="width: 50%; " >'+
                    '<img src="img/home.jpg" width="100%" height="100%"  alt="">'+
                    '</div>'+
                    '<div style="width: 50%; padding: 1.5vh; padding-bottom: 0px; padding-top: 6vh;" >'+
                    '<div><strong>Dirección:</strong> '+ element.Direccion +'</div>'+
                '<div><strong>Ciudad:</strong> '+ element.Ciudad +'</div>'+
                '<div><strong>Telefono:</strong> '+ element.Telefono +'</div>'+
                '<div><strong>Codigo Postal:</strong> '+ element.Codigo_Postal +'</div>'+
                '<div><strong>Tipo:</strong> '+ element.Tipo +'</div>'+
                '<div><strong>Precio: <span style="color: rgb(235,152,61);">'+ element.Precio +'</span></strong></div>'+
                '<br>'+
                '<hr>'+
                '<div style="text-align: right">'+
                    '<a href="#" >VER MAS</a>'+
                '</div>'+
                '</div>'+
                '</div>';
            });
            $('#result').html(html);
        });
    });

    $.ajax(
        {
            url: './cities.php',
            type: 'GET',
            dataType: "json",
        }
    ).done(function (data) {
        var html = "";
        $.each( data, function( key, city ) {
            html += '<option value="'+city+'">'+city+'</option>';
        });
        $('#selectCiudad').html( $('#selectCiudad').html() + html);
        $('#selectCiudad').material_select();
    });
    $.ajax(
        {
            url: './types.php',
            type: 'GET',
            dataType: "json",
        }
    ).done(function (data) {
        var html = "";
        $.each( data, function( key, typo ) {
            html += '<option value="'+typo+'">'+typo+'</option>';
        });
        $('#selectTipo').html( $('#selectTipo').html() + html);
        $('#selectTipo').material_select();
    });

    $('#submitButton').on('click', function (e) {
        e.preventDefault();
        var filters = {
            prizemin: $('.irs-from').html() + "",
            prizemax: $('.irs-to').html() + "",
            Ciudad: $('#selectCiudad').val() + "",
            Tipo: $('#selectTipo').val()
        };
        $.ajax(
            {
                url: './data.php',
                type: 'GET',
                dataType: "json",
                data: filters,
            }
        ).done(function (data) {
            var html =""
            $.each( data, function( key, element ) {

                html += '<div class="tituloContenido card" style=" background-color: white; ">'+
                    '<div style="width: 50%; " >'+
                    '<img src="img/home.jpg" width="100%" height="100%"  alt="">'+
                    '</div>'+
                    '<div style="width: 50%; padding: 1.5vh; padding-bottom: 0px; padding-top: 6vh;" >'+
                    '<div><strong>Dirección:</strong> '+ element.Direccion +'</div>'+
                    '<div><strong>Ciudad:</strong> '+ element.Ciudad +'</div>'+
                    '<div><strong>Telefono:</strong> '+ element.Telefono +'</div>'+
                    '<div><strong>Codigo Postal:</strong> '+ element.Codigo_Postal +'</div>'+
                    '<div><strong>Tipo:</strong> '+ element.Tipo +'</div>'+
                    '<div><strong>Precio: <span style="color: rgb(235,152,61);">'+ element.Precio +'</span></strong></div>'+
                    '<br>'+
                    '<hr>'+
                    '<div style="text-align: right">'+
                    '<a href="#" >VER MAS</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
            });
            $('#result').html(html);
        });
    });
});
