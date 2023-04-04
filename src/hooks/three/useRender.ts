import React, { useMemo, useEffect, useState } from "react";
import * as THREE from "three";

export default () => {
	return useMemo(() => 
	 	new THREE.WebGLRenderer({
			antialias: true,
		}),
	[]);
}



