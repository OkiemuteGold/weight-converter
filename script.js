$(document).ready(function () {
    let inputField = document.getElementById('input-field');
    inputField.addEventListener('input', (e) => {
        let inputValue = (e.target.value);
        let gramOutput = document.getElementById('gram-output');
        let kgOutput = document.getElementById('kg-output');
        let ounceOutput = document.getElementById('ounce-output');
        gramOutput.innerHTML = inputValue / 0.0022046;
        kgOutput.innerHTML = inputValue / 2.2046;
        ounceOutput.innerHTML = inputValue * 16;
        if (inputField.value === '') {
            $('.display').hide('slow');
        }
        else {
            $('.display').show('slow');
        
            $('#gram-output-btn').on('click', () => {
                $('.gram-output-display').show('slow');
                $('.kg-output-display').hide('slow');
                $('.ounce-output-display').hide('slow');
            });
    
            $('#kg-output-btn').on('click', () => {
                $('.kg-output-display').show('slow');
                $('.gram-output-display').hide('slow');
                $('.ounce-output-display').hide('slow');
            });
    
            $('#ounce-output-btn').on('click', () => {
                $('.ounce-output-display').show('slow');
                $('.gram-output-display').hide('slow');
                $('.kg-output-display').hide('slow');
            });
        }
    });
});