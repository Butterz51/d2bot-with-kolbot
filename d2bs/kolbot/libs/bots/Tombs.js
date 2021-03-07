/**
*	@filename	Tombs.js
*	@author		kolton
*	@desc		clear Tal Rasha's Tombs
*				This edit allows public or private runs that allows you to select target types (normal, all, bosses)
*				It also gives you the option of walking or teleporting towards or at targets selected
*				When set to public runs it will clear all Tombs, in addition BO occurs at the start of each Tomb
*				When set to private BO only occurs when needed
*	@edited		JBH
*/

function Tombs() {
	var i;

	Town.doChores();
	Pather.useWaypoint(46);
	Precast.doPrecast(true);

	for (i = 66; i <= 72; i += 1) {
		if (!Pather.moveToExit(i, true)) {
			throw new Error("Failed to move to tomb");
		}
		if (Config.Tombs.WalkClear){
			Pather.teleport = !Config.Tombs.WalkClear && Pather._teleport;
		}
		if (Config.Tombs.PortalLeech) {{
			Pather.makePortal();
			say(Config.Tombs.TPMessage);
			delay(10000);
			Precast.doPrecast(true);
			delay(100);	
		}
		if (Config.Tombs.PortalLeech) {
			Attack.clearLevel(0);
			Pickit.pickItems();
		}	
		}else{	
			Attack.clearLevel(Config.ClearType2);
			Pickit.pickItems	
		}
		if (i === 69) {
			Precast.doPrecast(true);
		}
		if (!Pather.moveToExit(46, true)) {
			throw new Error("Failed to move to Canyon");
		}
	}
	return true;
}
