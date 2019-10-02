$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        $("#button").on('click', function(){
            let input = $('input[name=ListItem]').val();

         $("ol").append('<li id="'+ generateUUID() +'" class="notChecked"> ' +
              '<input name="done-todo" type="checkbox" class="done-todo"><span contenteditable = true>' + input +'</span></li>');

            input = $('input[name=ListItem]').val("");
        });

        $('ol').on('change','input[type=checkbox]', function() {
            let item = $(this).closest('li');

            $(item).toggleClass('checked notChecked')
        });

        $('#filters').on('click', "li a", function(){
            $('ul').find('a').removeClass('selected');
            $(this).addClass('selected');

            let filter = $(this).data('filter');
            let task = $('ol li');

            $(task).show();
            if(filter == 'active'){
                $(task).not('.notChecked').hide();
            } else if(filter == 'complete'){
                $(task).not('.checked').hide();
            }
        });
        
        // code to be implemented
    });