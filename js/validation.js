function validateForm() {
            let isValid = true;

            // Reset error messages
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');

            // Validation functions
            function checkRequired(inputId, errorId) {
                const input = document.getElementById(inputId);
                if (!input.value.trim()) {
                    document.getElementById(errorId).textContent = `${inputId.replace(/([A-Z])/g, ' $1').trim()} is required.`;
                    isValid = false;
                }
            }

            function validateMobileNumber() {
                const mobileInput = document.getElementById('mobileNumber');
                const mobileValue = mobileInput.value.trim();
                if (!/^(08)\d{8}$/.test(mobileValue)) {
                    document.getElementById('mobileNumberError').textContent = 'Mobile number must be 10 digits and start with 08.';
                    isValid = false;
                }
            }

            function validateEmail(inputId, errorId) {
                const emailInput = document.getElementById(inputId);
                const emailValue = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailValue)) {
                    document.getElementById(errorId).textContent = 'Invalid email address.';
                    isValid = false;
                }
            }

            function validateConfirmEmail() {
                const emailInput = document.getElementById('emailAddress');
                const confirmEmailInput = document.getElementById('confirmEmail');
                if (confirmEmailInput.value.trim() !== emailInput.value.trim()) {
                    document.getElementById('confirmEmailError').textContent = 'Email addresses must match.';
                    isValid = false;
                }
            }

            function validatePasswordMatch() {
                const passwordInput = document.getElementById('password');
                const confirmPasswordInput = document.getElementById('confirmPassword');
                if (confirmPasswordInput.value !== passwordInput.value) {
                    document.getElementById('confirmPasswordError').textContent = 'Passwords must match.';
                    isValid = false;
                }
            }

            // Perform validations
            checkRequired('fullName', 'fullNameError');
            checkRequired('mobileNumber', 'mobileNumberError');
            checkRequired('emailAddress', 'emailAddressError');
            checkRequired('confirmEmail', 'confirmEmailError');
            checkRequired('password', 'passwordError');
            checkRequired('confirmPassword', 'confirmPasswordError');
            checkRequired('comment', 'commentError');

            validateMobileNumber();
            validateEmail('emailAddress', 'emailAddressError');
            validateEmail('confirmEmail', 'confirmEmailError'); // Also validate the confirm email format
            validateConfirmEmail();
            validatePasswordMatch();

            return isValid;
        }