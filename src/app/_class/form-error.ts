export class FormError {
    private errors: any;
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param field champ si il y a erreur
     */
    has(field) {

        return this.errors.hasOwnProperty(field);

    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param field champ pour obtenir le 1er message d'erreur
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     * Retourne le tout
     */
    getAll() {
        return this.errors;
    }

    /**
     * Record the new errors.
     *
     * @param errors record à envoyer à la classe
     */
    record(errors) {
        this.errors = errors;
    }


    /**
     * Clear one or all error fields.
     *
     * @param field champ ou si null le tout
     */
    clear(field) {
        if (field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
}

