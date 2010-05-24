
/**
 * Version 1.0
 **/

/**
* Plugin que limita a digita��o de caracteres em um campo textarea.
* O plugin detecta os eventos keyup (quando uma tecla � solta) e 
* change (o conte�do � modificado).
* 
* Melhoria a ser implementada: criar (ou utilizar) um campo externo e jogar 
* l� dentro a quantidade de caracteres que o usu�rio ainda pode digitar no campo.
* 
* @name     maxlength
* @param    tamanho      n�mero de caracteres que podem ser digitados no campo (default: 50)
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
	        }).keyup(function() // precisa ser melhorado para evitar repeti��o de c�digo
	        { 
                if ($(this).val().length > settings.tamanho)
                {
                	$(this).val($(this).val().substring(0, settings.tamanho));
                }
	        });
	    });
	};
})(jQuery);

