
/**
 * Version 1.0
 **/

/**
* Plugin que limita a digitação de caracteres em um campo textarea.
* O plugin detecta os eventos keyup (quando uma tecla é solta) e 
* change (o conteúdo é modificado).
* 
* Melhoria a ser implementada: criar (ou utilizar) um campo externo e jogar 
* lá dentro a quantidade de caracteres que o usuário ainda pode digitar no campo.
* 
* @name     maxlength
* @param    tamanho      número de caracteres que podem ser digitados no campo (default: 50)
* @author   Rodrigo Araujo (raraujo@brivia.com.br)
* @example  $("#txtNoticia").maxlength();
* @example  $(".txtNome").maxlength();
* @example  $("#txtResenha").maxlength({tamanho:500});
**/
(function()
{
	jQuery.fn.maxlength = function(settings)
	{
	    var campo = this;// o objeto jquery atual.

	    settings = jQuery.extend({
	                    tamanho: 50
	    }, settings);
	    
	    //Loop through the jquery objects (these are the elements that contain our items to collapse).
	    return campo.each(function()
	    {
	        $(this).change(function()
	        {
	            if ($(this).val().length > settings.tamanho)
	            {
                	$(this).val($(this).val().substring(0, settings.tamanho));
	            }
	        }).keyup(function() // precisa ser melhorado para evitar repetição de código
	        { 
                if ($(this).val().length > settings.tamanho)
                {
                	$(this).val($(this).val().substring(0, settings.tamanho));
                }
	        });
	    });
	};
})(jQuery);

