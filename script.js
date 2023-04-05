
        $(document).ready(function() {
                $.ajax({
                    type: 'GET',
                    url: './archivos.xml',
                     contentType: "application/xml; charset=utf-8",
                    dataType: 'xml',
                    success: function (data) {
                            $(data).find('persona').each(function() {
                                var fila = $('<tr>')
                                fila.append($(`<td>${$(this).find('nombre').text()}</td>`));
                                fila.append($(`<td>${$(this).find('apellidos').text()}</td>`));
                                fila.append($(`<td>${$(this).find('fechaNacimiento').text()}</td>`));

                                $('#personas tbody').append(fila);
                            });
                    }
                })
        });
