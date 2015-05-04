/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 4/4/14
 * Time: 3:50 PM
 * To change this template use File | Settings | File Templates.
 */


function update(){


    $('span').css('background','lightgrey');
    $('div').each(function(i){

        var $input=$(this).children('input:first');
        var $value=$input.val();
        var filter="span:lt("+$value+")";
        $input.siblings(filter).css('background','blue');

    })

}