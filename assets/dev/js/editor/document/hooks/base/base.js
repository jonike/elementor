export default class Base {
	/**
	 * Hold all hooks that were created within this class.
	 *
	 * @type {object[]}
	 */
	static hooks = [];

	/**
	 * Function getAll().
	 *
	 * Returns all hooks that were created within this class.
	 *
	 * @returns {object[]}
	 */
	static getAll() {
		return constructor.hooks;
	}

	/**
	 * Function constructor().
	 *
	 * Create hook base.
	 */
	constructor() {
		this.action = '';
		this.command = '';

		this.load();
	}

	/**
	 * Function load().
	 *
	 * Load the hook.
	 */
	load() {
		this.initialize();

		this.command = this.hook();
		this.id = this.id();

		const params = [ this.command, this.id, ( ... args ) => {
			if ( this.conditions( args[ 0 ] ) ) {
				if ( $e.devTools ) {
					$e.devTools.log.hookActive( this.command, this.id );
				}

				return this.apply( ... args );
			}

			return true;
		} ];

		// Save all hooks.
		this.constructor.hooks.push( {
			id: this.id,
			action: this.action,
			command: this.command,
			instance: this,
			params,
		} );

		this.method().apply( $e.hooks, params );
	}

	/**
	 * Function initialize().
	 *
	 * Called after creation of the base, used for initialize extras.
	 * Without expending constructor.
	 */
	initialize() {}

	/**
	 * Function method().
	 *
	 * Function should return `$e.hooks` register method.
	 *
	 * Example: 'return $e.hooks.registerDependency';
	 *
	 * @returns {function()}
	 *
	 * @throws {Errror}
	 */
	method() {
		elementorModules.ForceMethodImplementation();
	}

	/**
	 * Function hook().
	 *
	 * Returns the full command path to hook.
	 *
	 * @returns {string}
	 *
	 * @throws {Error}
	 */
	hook() {
		elementorModules.ForceMethodImplementation();
	}

	/**
	 * Function id().
	 *
	 * Returns command id for the hook (should be unique).
	 *
	 * @returns {string}
	 *
	 * @throws {Error}
	 */
	id() {
		elementorModules.ForceMethodImplementation();
	}

	/**
	 * Function conditions().
	 *
	 * Condition for apply.
	 *
	 * @param {{}} args
	 *
	 * @returns {boolean}
	 *
	 * @throws {Error}
	 */
	conditions( args ) { // eslint-disable-line no-unused-vars
		elementorModules.ForceMethodImplementation();
	}

	/**
	 * Function apply().
	 *
	 * Apply the hook.
	 *
	 * @param {{}} args
	 *
	 * @returns {boolean}
	 */
	apply( args ) { // eslint-disable-line no-unused-vars
		elementorModules.ForceMethodImplementation();
	}
}