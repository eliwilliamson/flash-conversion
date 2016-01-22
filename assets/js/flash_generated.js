(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 605,
	height: 605,
	fps: 30,
	color: "#7D97B1",
	manifest: [
		{src:"/img/drop.png", id:"drop"},
		{src:"/sounds/saucerSound.mp3", id:"saucerSound"},
		{src:"/sounds/shootSound.mp3", id:"shootSound"},
		{src:"/sounds/thrustSound.mp3", id:"thrustSound"}
	]
};



// symbols:



(lib.drop = function() {
	this.initialize(img.drop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,324);


(lib.startpulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// color
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(153,204,255,0.8)","rgba(153,204,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgHgbQgDgLAAgQQAAgMACgMIALgMQAYgaAigDIAACnQgXgIgQgSg");
	this.shape.setTransform(-35.4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(153,204,255,0.8)","rgba(153,204,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BWIAAiqIBgAAIINAAIAACpIAAAAIgdABg");
	this.shape_1.setTransform(-0.5,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(153,204,255,0.8)","rgba(153,204,255,0)"],[0.294,1],-4,1.3,0,-4,1.3,10).s().p("AgmhUIAEAAQAjACAcAbIAEAFIACACQAEAOAAAQQAAAdgPAZQgHALgKAKQgTAVgaAHg");
	this.shape_2.setTransform(34.6,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(156,205,255,0.8)","rgba(156,205,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_3.setTransform(-35.3,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(156,205,255,0.8)","rgba(156,205,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_4.setTransform(-0.5,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(156,205,255,0.8)","rgba(156,205,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_5.setTransform(34.6,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(158,207,255,0.8)","rgba(158,207,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_6.setTransform(-35.3,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(158,207,255,0.8)","rgba(158,207,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_7.setTransform(-0.5,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(158,207,255,0.8)","rgba(158,207,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_8.setTransform(34.6,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(161,208,255,0.8)","rgba(161,208,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_9.setTransform(-35.3,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(161,208,255,0.8)","rgba(161,208,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_10.setTransform(-0.5,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(161,208,255,0.8)","rgba(161,208,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_11.setTransform(34.6,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(164,209,255,0.8)","rgba(164,209,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_12.setTransform(-35.3,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(164,209,255,0.8)","rgba(164,209,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_13.setTransform(-0.5,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(164,209,255,0.8)","rgba(164,209,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_14.setTransform(34.6,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(166,211,255,0.8)","rgba(166,211,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_15.setTransform(-35.3,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(166,211,255,0.8)","rgba(166,211,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_16.setTransform(-0.5,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(166,211,255,0.8)","rgba(166,211,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_17.setTransform(34.6,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(169,212,255,0.8)","rgba(169,212,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_18.setTransform(-35.3,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(169,212,255,0.8)","rgba(169,212,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_19.setTransform(-0.5,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(169,212,255,0.8)","rgba(169,212,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_20.setTransform(34.6,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(172,213,255,0.8)","rgba(172,213,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_21.setTransform(-35.3,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(172,213,255,0.8)","rgba(172,213,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_22.setTransform(-0.5,2.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(172,213,255,0.8)","rgba(172,213,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_23.setTransform(34.6,2.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(174,215,255,0.8)","rgba(174,215,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_24.setTransform(-35.3,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(174,215,255,0.8)","rgba(174,215,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_25.setTransform(-0.5,2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(174,215,255,0.8)","rgba(174,215,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_26.setTransform(34.6,2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(177,216,255,0.8)","rgba(177,216,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_27.setTransform(-35.3,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(177,216,255,0.8)","rgba(177,216,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_28.setTransform(-0.5,2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(177,216,255,0.8)","rgba(177,216,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_29.setTransform(34.6,2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(180,217,255,0.8)","rgba(180,217,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_30.setTransform(-35.3,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(180,217,255,0.8)","rgba(180,217,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_31.setTransform(-0.5,2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(180,217,255,0.8)","rgba(180,217,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_32.setTransform(34.6,2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(183,218,255,0.8)","rgba(183,218,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_33.setTransform(-35.3,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(183,218,255,0.8)","rgba(183,218,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_34.setTransform(-0.5,2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(183,218,255,0.8)","rgba(183,218,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_35.setTransform(34.6,2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(185,220,255,0.8)","rgba(185,220,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_36.setTransform(-35.3,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(185,220,255,0.8)","rgba(185,220,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_37.setTransform(-0.5,2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(185,220,255,0.8)","rgba(185,220,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_38.setTransform(34.6,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(188,221,255,0.8)","rgba(188,221,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_39.setTransform(-35.3,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(188,221,255,0.8)","rgba(188,221,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_40.setTransform(-0.5,2.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(188,221,255,0.8)","rgba(188,221,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_41.setTransform(34.6,2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(191,222,255,0.8)","rgba(191,222,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_42.setTransform(-35.3,2.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(191,222,255,0.8)","rgba(191,222,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_43.setTransform(-0.5,2.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(191,222,255,0.8)","rgba(191,222,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_44.setTransform(34.6,2.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(193,224,255,0.8)","rgba(193,224,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_45.setTransform(-35.3,2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(193,224,255,0.8)","rgba(193,224,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_46.setTransform(-0.5,2.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(193,224,255,0.8)","rgba(193,224,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_47.setTransform(34.6,2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(196,225,255,0.8)","rgba(196,225,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_48.setTransform(-35.3,2.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["rgba(196,225,255,0.8)","rgba(196,225,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_49.setTransform(-0.5,2.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["rgba(196,225,255,0.8)","rgba(196,225,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_50.setTransform(34.6,2.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(199,226,255,0.8)","rgba(199,226,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_51.setTransform(-35.3,2.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(199,226,255,0.8)","rgba(199,226,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_52.setTransform(-0.5,2.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(199,226,255,0.8)","rgba(199,226,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_53.setTransform(34.6,2.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(201,228,255,0.8)","rgba(201,228,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_54.setTransform(-35.3,2.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["rgba(201,228,255,0.8)","rgba(201,228,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_55.setTransform(-0.5,2.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(201,228,255,0.8)","rgba(201,228,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_56.setTransform(34.6,2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["rgba(204,229,255,0.8)","rgba(204,229,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgHgbQgDgLAAgQQAAgMACgMIALgMQAYgaAigDIAACnQgXgIgQgSg");
	this.shape_57.setTransform(-35.4,2.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["rgba(204,229,255,0.8)","rgba(204,229,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BWIAAiqIBgAAIINAAIAACpIAAAAIgdABg");
	this.shape_58.setTransform(-0.5,2.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["rgba(204,229,255,0.8)","rgba(204,229,255,0)"],[0.294,1],-4,1.3,0,-4,1.3,10).s().p("AgmhUIAEAAQAjACAcAbIAEAFIACACQAEAOAAAQQAAAdgPAZQgHALgKAKQgTAVgaAHg");
	this.shape_59.setTransform(34.6,2.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["rgba(194,224,255,0.8)","rgba(194,224,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_60.setTransform(-35.3,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["rgba(194,224,255,0.8)","rgba(194,224,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_61.setTransform(-0.5,2.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["rgba(194,224,255,0.8)","rgba(194,224,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_62.setTransform(34.6,2.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["rgba(191,223,255,0.8)","rgba(191,223,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_63.setTransform(-35.3,2.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["rgba(191,223,255,0.8)","rgba(191,223,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_64.setTransform(-0.5,2.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["rgba(191,223,255,0.8)","rgba(191,223,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_65.setTransform(34.6,2.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["rgba(189,221,255,0.8)","rgba(189,221,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_66.setTransform(-35.3,2.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["rgba(189,221,255,0.8)","rgba(189,221,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_67.setTransform(-0.5,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["rgba(189,221,255,0.8)","rgba(189,221,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_68.setTransform(34.6,2.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["rgba(186,220,255,0.8)","rgba(186,220,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_69.setTransform(-35.3,2.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["rgba(186,220,255,0.8)","rgba(186,220,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_70.setTransform(-0.5,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["rgba(186,220,255,0.8)","rgba(186,220,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_71.setTransform(34.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["rgba(184,219,255,0.8)","rgba(184,219,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_72.setTransform(-35.3,2.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["rgba(184,219,255,0.8)","rgba(184,219,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_73.setTransform(-0.5,2.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["rgba(184,219,255,0.8)","rgba(184,219,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_74.setTransform(34.6,2.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["rgba(181,218,255,0.8)","rgba(181,218,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_75.setTransform(-35.3,2.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["rgba(181,218,255,0.8)","rgba(181,218,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_76.setTransform(-0.5,2.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["rgba(181,218,255,0.8)","rgba(181,218,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_77.setTransform(34.6,2.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["rgba(179,217,255,0.8)","rgba(179,217,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_78.setTransform(-35.3,2.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["rgba(179,217,255,0.8)","rgba(179,217,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_79.setTransform(-0.5,2.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["rgba(179,217,255,0.8)","rgba(179,217,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_80.setTransform(34.6,2.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["rgba(176,215,255,0.8)","rgba(176,215,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_81.setTransform(-35.3,2.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["rgba(176,215,255,0.8)","rgba(176,215,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_82.setTransform(-0.5,2.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["rgba(176,215,255,0.8)","rgba(176,215,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_83.setTransform(34.6,2.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["rgba(173,214,255,0.8)","rgba(173,214,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_84.setTransform(-35.3,2.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["rgba(173,214,255,0.8)","rgba(173,214,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_85.setTransform(-0.5,2.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["rgba(173,214,255,0.8)","rgba(173,214,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_86.setTransform(34.6,2.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["rgba(171,213,255,0.8)","rgba(171,213,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_87.setTransform(-35.3,2.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["rgba(171,213,255,0.8)","rgba(171,213,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_88.setTransform(-0.5,2.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["rgba(171,213,255,0.8)","rgba(171,213,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_89.setTransform(34.6,2.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["rgba(168,212,255,0.8)","rgba(168,212,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_90.setTransform(-35.3,2.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["rgba(168,212,255,0.8)","rgba(168,212,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_91.setTransform(-0.5,2.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["rgba(168,212,255,0.8)","rgba(168,212,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_92.setTransform(34.6,2.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["rgba(166,210,255,0.8)","rgba(166,210,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_93.setTransform(-35.3,2.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["rgba(166,210,255,0.8)","rgba(166,210,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_94.setTransform(-0.5,2.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["rgba(166,210,255,0.8)","rgba(166,210,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_95.setTransform(34.6,2.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["rgba(163,209,255,0.8)","rgba(163,209,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgGgbQgFgMAAgPQABgMACgMQAjgmAigDIAACnQgXgIgQgSg");
	this.shape_96.setTransform(-35.3,2.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["rgba(163,209,255,0.8)","rgba(163,209,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BUIAAioIAAAAIBgAAIINAAIAACpIptABg");
	this.shape_97.setTransform(-0.5,2.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["rgba(163,209,255,0.8)","rgba(163,209,255,0)"],[0.294,1],-4.1,1.3,0,-4.1,1.3,10).s().p("AgmhUIAEAAQAjACAcAbQAKAVAAAQQgBAdgPAZQgGALgLAKQgSAVgaAHg");
	this.shape_98.setTransform(34.6,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// shadow
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#003366").s().p("AkxBsQgJgDgJgEQgRgIgOgOQgVgVgHgcQgEgNAAgQQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAHARIAFAKQAFARAAARQAAAuggAgQgVAVgcAIg");

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#033669").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#07396D").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0A3C70").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0E4073").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#114377").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#15467A").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#18497E").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1C4C81").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1F4F84").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#235388").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#26568B").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2A598E").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2D5C92").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#315F95").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#346299").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#38669C").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3B699F").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3F6CA3").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#426FA6").s().p("AkxBsQgJgDgJgEQgRgIgOgOQgVgVgHgcQgEgNAAgQQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAHARIAFAKQAFARAAARQAAAuggAgQgVAVgcAIg");

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3B69A0").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#356399").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#326096").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2E5D93").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2B5A90").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#28578C").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#245489").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#215186").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1E4E83").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1A4B80").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#17487C").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#144579").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#114276").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0D3F73").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#07396C").s().p("AkxBsQgjgPgOgOQgVgVgHgcQgEgOAAgPQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAIARQAJAbAAARQAAAuggAgQgVAVgcAIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99}]}).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-10.8,77.8,21.6);


(lib.maskedarea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CCFF").ss(1,1,1).p("EgvLAvMMAAAheXMBeXAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003366").ss(1,1,1).p("EAvMgvLMAAABeXMheXAAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#003366"],[0,1],-801.8,-557.7,872.8,621.8).s().p("EgvLAvMMAAAheXMBeXAAAMAAABeXgA/Z/TQgrArgoAsQjiDzieEPQjlGJhWHEIgOBRQgmDsAAD7QAADkAfDXQAJBAAMBAQALA3AMA3QA8D9BpDqQAjBNAoBLQCFD8C+DkQBbBuBpBpQNDNDSbAAQScAANCtDQNDtCAAydQAAyatDtEQtCtCycAAQybAAtDNCg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303,-303,606,606);


(lib.dropshadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("EgIwAjKQyFkOsApiQLdImO/AAQSaAANDtDQNDtCAAybQAAsXl2p9QHeLzDsSDQFVZ+uuKpQp8HMtRAAQmZAAnMhrg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-248.6,-235.7,497.3,471.6);


(lib.drop_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.drop();
	this.instance.setTransform(-162,-162);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162,-162,324,324);


(lib.circleperimeter = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AT8z8QIRIRAALrQAALsoRIQQoQIRrsAAQrrAAoRoRQoQoQAArsQAArrIQoRQIRoQLrAAQLsAAIQIQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-181.5,-181.5,363.1,363.1);


(lib.background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CCFF").ss(1,1,1).p("EgvLAvMMAAAheXMBeXAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003366").ss(1,1,1).p("EAvMgvLMAAABeXMheXAAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#003366"],[0,1],-801.8,-557.7,872.8,621.8).s().p("EgvLAvMMAAAheXMBeXAAAMAAABeXg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303,-303,606,606);


(lib.shipbodyblackwhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABIB7Ig0jZQAJAOAIAPQAwBXgNBlIgpgfIg8AAIgpAfQgBgCAAgBIAAgCQgOh0BEhjQAAAAABAAQAAgBABgBQAIgLAHgMIAAAAQABACACACQAIALAHAKAAAhWQAMAAAMAbIAAAxQgYASgXgSIAAgxQAJgTAIgGQAEgCACAAgAhGB7IA2jc");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABIB7Ig0jZQAJAOAIAPQAwBXgNBlgAAfBbIg8AAIgpAgIA2jcIABgCIAPgXIAAAAIADAFIAPAUIACADIA0DZgAgXgKQAXASAYgSQgYASgXgSIAAgxQAJgTAIgGQAEgCACAAIAAAAIAAAAQAMAAAMAbIAAAxIABAAIAAgxQgNgcgMABIAAAAIAAAAQgCAAgEACQgIAGgJATIAAAxgAhGB7gAhHB3IAAgCQgOhzBEhjIABAAIg2DcIgBgEgAAUheIAAAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-13.3,17,26.7);


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AAfBcIg8AAIgpAfIgBgDIAAgCQgOh1BGhkIAPgXIAAABIADADIARAYQAJAOAIAPQAwBXgNBlgAAYgKIABAAIAAgBIgBABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-12.3,15,24.7);


(lib.Flames = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","rgba(255,0,0,0)"],[0,1],0.1,-8.1,0.1,5.3).s().p("AgXhCIAvAAIgYCFg");
	this.shape.setTransform(0,0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-6.6,4.9,13.5);


(lib.codeamoebaclassesShot = function() {
	this.initialize();

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAOQgEAAgFgEQgEgFAAgFQAAgEAEgFQAFgEAEAAQAFAAAFAEQAEAFAAAEQAAAFgEAFQgEAEgGAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,2.9);


(lib.explosionshape = function() {
	this.initialize();

	// dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8EnIAAgEIADgEIAGgCIABAAIAFACIADADIAAAIIgCAEIgGADQgKgCAAgIgADVD0IAAgDIADgEIAGgCIABgBIAFADIADAEIAAAHIgCAEIgGACQgKgBAAgJgAA1DwIAAgEIADgEIAGgCIABAAIAFADIADACIAAAIIgCAEIgGADQgKgCAAgIgAgtB9IAAgEIADgEIAGgCIABAAIAFACIADADIAAAIIgCAEIgGADQgKgCAAgIgABTB3IAAgDIADgEIAGgCIABgBIAFAEIADADIAAAHIgCAEIgGACQgKgBAAgJgAigBzIAAgEIADgEIAGgCIABAAIAFADIADACIAAAIIgCAEIgGADQgKgCAAgIgADGBUIAAgDIADgEIAGgCIABgBIAFAEIADACIAAAIIgCAEIgGADQgKgCAAgJgAB7AjIAAgEIADgEIAGgCIABAAIAFACIADADIAAAIIgCAEIgGADQgKgCAAgIgAhfATIAAgDIADgEIAGgCIABgBIAFADIADAEIAAAHIgCAEIgGACQgKgBAAgJgAksgIIAAgEIADgEIAGgCIABAAIAFACIADADIAAAIIgCAEIgGABQgKAAAAgIgABJhFIAAgDIADgEIAGgCIABgBIAFADIADAEIAAAHIgCAEIgGACQgKgBAAgJgAgZhPIAAgDIADgEIAGgCIABgBIAFADIADAEIAAAHIgCAEIgGACQgKgBAAgJgAEbheIAAgDIADgEIAGgCIABgBIAFAEIADACIAAAIIgCAEIgGADQgKgCAAgJgAiHhiIAAgEIADgEIAGgCIABAAIAFACIADADIAAAIIgCAEIgGACQgKgBAAgIgACAh2IAAgEIADgEIAGgCIABAAQAFABAFACIADACIAAAIIgCAEIgGADIgDAAQgLAAgBgKgAADi8IAAgEIADgEIAGgCIABAAIAFACIADADIAAAIIgCAEIgGACQgKgBAAgIgACAjvIAAgDIADgEIAGgCIABgBIAFAEIADADIAAAHIgCAEIgGACQgKgBAAgJgAibkmIAAgDIADgEIAGgCIABgBIAFADIADAEIAAAHIgCAEIgGACQgKgBAAgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-30.5,60.4,61);


(lib.codeamoebaclassesParamecium = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAthyQgQgkgagMQgXgMgSAiQgSAjgEAtQgEAtAFAuQAGAwAIAvQAJAvAxgIQASgDALgPQAMgsAFgtQAFgtgCgrQgCgwgPgkg");
	this.shape.setTransform(-0.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjiuQgJgMgKgIQgGgEgGgCQgMgHgLAEQgMAEgKAOQgDAFgEAHQgBACgBADQAAAAAAABQgKAUgGAXQgGAXgCAaQgBADAAACQgCAYAAAZQABAVACAUQAAAJABAJQABAIABAIQABAHABAGQABAGABAGQAAAEABAFQAAADABAEQABAKACAKQADASADASQAAACABADQAAABAAAAQADANAFAJQAFAKAIAHQAJAGALACQAOADAQgDIAAAAQAMgCAKgHQAIgFAGgJQACgGABgFQAFgSAEgRQACgOACgNQADgRACgRQAAgBAAgCQACgPABgQQABgWABgTQAAgSgBgSQAAgHAAgGQgDgdgGgZQgFgUgIgRQgBgDgCgDQgHgQgKgLg");
	this.shape_1.setTransform(-0.5,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAAAKQgEAAgEgDQgDgEAAgDQAAgGADgDQAIABACAIQAKgEAAAEQAAADgEAEQgDADgFAAIAAAAg");
	this.shape_2.setTransform(-2,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AABAKQgCAAgEgDQgDgDAAgEQAAgDADgDQAEgDACAAQALANgEADQgDADgEAAIAAAAg");
	this.shape_3.setTransform(-3,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBTQgLAAACgQQADgQABgYQABgYgDgOQgEgQALAAQAJAAAHAQQAIAOAAAYQAAAYgIAQQgHAQgJAAIAAAAgAAFhFQgDAAgCgCQAAgCAAgDQAAgDAAgBQACgCADAAQADAAACACQACABAAADQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_4.setTransform(1.9,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AgODMQgLgCgJgGQgIgHgFgKQgFgJgDgNIAAgBIgBgFIgGgkIgDgUIgBgHIgBgJIgCgMIgCgNIgCgQIgBgSQgCgUgBgVQAAgZACgYIABgFQACgaAGgXQAGgXAKgUIAAgBIACgFIAHgMQAKgOAMgEQALgEAMAHIAMAGQAKAIAJAMQAKALAHAQIADAGQAIARAFAUQAGAZADAdIAAANIABAkIgCApIgDAfIAAADIgFAiIgEAbIgJAjIgDALQgGAJgIAFQgKAHgMACIAAAAIgQABQgHAAgHgBgAAACmIAMgBQASgDAMgPQAMgsAFgtQADgiAAggIAAgWQgCgwgQgkQAQAkACAwIAAAWQAAAggDAiQgFAtgMAsQgMAPgSADIgMABIAAAAIAAAAQgkAAgIglIgBAAIAAgDQgJgvgFgwQgDgaAAgYQAAgVACgUQAEgtASgjIAAgBIABgBQAMgXARAAIAAAAIAAAAQAGAAAFADQAZAMAQAkQgQgkgZgMQgFgDgGAAIAAAAIAAAAQgRAAgMAXIgBABIAAABQgSAjgEAtQgCAUAAAVQAAAYADAaQAFAwAJAvIAAADIABAAQAIAlAkAAIAAAAIAAAAgAgECOQADgEAAgGQAAgDgJADQgFgHgHgCQgEAEAAAFQAAAGAEAEQADADAGAAQAFAAAEgDgAAiA9QAHgQABgYQgBgWgHgQQgIgQgKAAQgLAAADAQQAEAQgBAWQgCAYgCAQQgCAQALAAQAKAAAIgQgAAjhNQACgCAAgDQAAgDgCgBQgCgCgDAAQgDAAgCACQgCABAAADQAAADACACQACACADAAQADAAACgCgAgPhOQAEgEgLgPQgEAAgEAEQgDADAAAEQAAAEADAEQAEADAEAAQAEAAADgDg");
	this.shape_5.setTransform(-0.5,0.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-21.4,17.7,43.2);


(lib.GuidedCell = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyg+QACgDABgDQAAgDABgCQABgCACgBQAEgFAGAAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgDADgFABQgDABgDACQgCABgCABQAAAAgBABQgOAJABAQQABADABADQALAMARgDIAAAAQADgBACgBAgHhPIAAgBQgBgDgCgDQgCgDAAgFQAAgGAEgEQAEgEAEAAQAGAAAEAEQAEAEAAAGQAAACAAACQgBACgCADQgBADgBADQACAAADABIAAAAQAUADAQANQgBABgBACQAAABgBAAQgJAPgQgBQgDgCgDgBQgNgLAFgSQAAgBABgBQAAgBAAAAAA/gxQAAAAABABQAAAAABABQANARACAWIAAAAQADgBADgBQADgCACgBQACAAACAAQAGAAAEAEQAEAEAAAFQAAAFgEAEQgEAEgGAAQgFAAgDgCQgDgCgEgBQgCAWgMARQgBAAAAABQgBABgBABQADACADABQADAAACACQACAAABACQAFAEAAAGQAAAGgFAEQgEAEgGAAQgFAAgFgEQgDgDgBgFQgBgDgCgDQAAgBgBgBQAAgBgBAAQgJgQgSABQgCABgDABQgOANAHAUQAAAAAAABABQAIQgCgBgDAAQgRgDgLAMQgBADgBADQgBARAPAJQABAAAAABQACAAABABAAyA/QgPANgUAEQAAAAgBAAQgCAAgDABQAAAAAAABQABACABADQACACABADQAAABAAACQAAAGgEAEQgEAEgGAAQgEAAgEgEQgEgEAAgGQAAgFACgDQABgCABgCQAAgBABgBIAAAAQAGgVgOgMQgDgCgDgBQgTgBgKAUQAAABgBACQAAAAgBABQAAABAAAAQgBAFgDADQgEAEgGAAQgGAAgFgEQgEgEAAgGQAAgGAEgEQACgCABAAQADgCADAAQAAAAABgBQACgBACAAQAUgKgBgTQgCgDgBgEQgNgNgUAGQgCABgDABIAAAAIgBABQgDACgFAAQgGAAgEgEQgEgEAAgFQAAgFAEgEQAEgEAGAAQACAAACAAQACABACACQABAAAAAAIAAAAQADABACABQAAgBAAgBQABgBAAgBQADgVANgRQgBAAgBgBQgBAAgBAAQAAgBgBAAQgFgBgDgDQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAEAFQACABABACQABACAAADQABABAAABQABABAAABQAAABABAAQACgBACgCQAAAAAAAAQARgMAVgBAgxg/QAJAUASgBQAEgCAEgBQAMgMgFgTQAAgBAAAAAhQgIQAUAHANgOQABgEACgDQAAgSgTgKAg/AzQgOgSgDgXQAAgBAAgBAgHBRQgWgCgRgMQAAgBAAAAQgCgBgCgB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgtBCIgBAAIgDgDQAJgTATABIAGACQAOANgGAVQgVgCgRgNgAAJBQQgHgUAOgNIAGgCQARgBAKAQIAAABIACACQgQANgUAEIgBAAIgFAAIAAAAgAhPAKIgBgCQAVgGAMANIADAGQABAUgUAJQgOgRgCgXgAA9AwIgBAAQgQgKABgRIACgFQALgMARADIAGABQgDAVgMARIgBACIgCACIgCgCgAAvgQIgCgFQgBgQAOgKIABAAIAEgDIABABIABACQANARACAVIAAABIgFABIAAAAIgHABQgMAAgJgKgAhQgIIABgCIAAgDQADgUAOgRQASAKAAASIgDAHQgIAJgMAAQgGAAgHgCgAAWgsIgGgDQgNgMAFgSIABgCIAAgBIAFABIAAAAQAUAEAQANIgCADIAAABQgJAOgPAAIgCAAgAgxg/IAEgDIABgBQAQgLAVgCIAAACQAFASgMAMIgHAEIgCAAQgRAAgJgTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("AAABtQgEAAgEgEQgEgEAAgGQAAgFADgDIABgEIABgCIAAAAQAGgVgOgMIgGgDQgTgBgKAUIgBADIgBABIAAABQgBAFgDADQgEAEgGAAQgGAAgFgEQgEgEAAgGQAAgGAEgEIADgDIAGgBIABgBIAEgBQAUgKgBgTIgDgHQgNgNgUAGIgFACIAAAAIgBAAQgDADgFAAQgGAAgEgEQgEgEAAgFQAAgFAEgEQAEgEAGAAIAEAAIAEADIABAAIAAAAIAFACQAUAHANgOIADgHQAAgSgSgKIgDgBIgCgBIgBAAQgFgBgDgDQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAEAFIADADIABAFIABACIABACIABABQAJAUASgBIAIgDQAMgMgFgTIAAgCIAAAAIgCgGQgDgDAAgFQAAgGAEgEQAEgEAEAAQAGAAAEAEQAEAEAAAGIAAAEIgDAFIgCAGIAAAAIgBADQgFASANALIAGADQAQABAJgPIABgBIACgDIADgGIACgFIACgDQAEgFAGAAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgDADgFABIgGADIgEACIgBABQgOAJABAQIACAGQALAMARgEIAAAAIAFgBIAGgCIAFgDIAEAAQAGAAAEAEQAEAEAAAFQAAAFgEAEQgEAEgGAAQgFAAgDgDIgGgCIgGgBQgRgDgLAMIgCAGQgBARAPAJIACABIACABIAHADIAEABIADADQAFAEAAAGQAAAGgFAEQgEAEgGAAQgFAAgFgEQgDgDgBgFIgDgGIgBgCIgBgBQgJgQgSABIgFACQgOANAHAUIAAABIABABIABAFIADAEIAAAEQAAAGgEAEQgEAEgGAAIAAAAg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-12,24,24);


(lib.Glob = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.8)"],[0.447,1],-0.8,0.7,0,-0.8,0.7,31.2).s().p("AjiDhQhahaADiQQADiRBVhWQBVhVCCAMQCBANBjBnQBkBngEB5QgEB6hgBTQhgBUh+AAQh/AAhbhbg");
	this.shape.setTransform(1.6,-3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.8,-34.6,62.9,63.2);


(lib.StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.label_txt = new cjs.Text("START", "bold 12px 'Arial'");
	this.label_txt.name = "label_txt";
	this.label_txt.textAlign = "center";
	this.label_txt.lineHeight = 14;
	this.label_txt.lineWidth = 100;
	this.label_txt.setTransform(-2,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.label_txt).wait(2).to({y:-6.5},0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.294,1],2.9,0,0,2.9,0,5.1).s().p("AgGAkQgPgQAAgUQAAgTAPgQQALgNARgBIAABjQgRgBgLgNg");
	this.shape.setTransform(-33.8,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.294,1],30.6,0,0,30.6,0,2004.3).s().p("AheAzIjSAAIAAgBIAAhjIAAgBIDSAAIGPAAIAABlImPAAg");
	this.shape_1.setTransform(-0.9,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.294,1],-2.5,0,0,-2.5,0,5.1).s().p("AgYAzIAAhlQAVAAANAPQAPAQAAATQAAAUgPAQQgNAPgVAAIAAAAg");
	this.shape_2.setTransform(32.3,-5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.294,1],2.9,0,0,2.9,0,5.1).s().p("AgGAkQgPgQAAgUQAAgTAPgPQALgOARgCIAABkQgRgBgLgNg");
	this.shape_3.setTransform(-33.8,-3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.294,1],30.6,0,0,30.6,0,2004.3).s().p("AheAzIjSAAIAAgBIAAhkIAAAAIDSAAIGPAAIAABlImPAAg");
	this.shape_4.setTransform(-0.9,-3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.294,1],-2.5,0,0,-2.5,0,5.1).s().p("AgYAzIAAhlQAVAAANAQQAPAPAAATQAAAUgPAQQgNAPgVAAIAAAAg");
	this.shape_5.setTransform(32.3,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0.294,1],4.6,1.4,0,4.6,1.4,10).s().p("AgDA6QgWgWgHgbQgDgLAAgQQAAgMACgMIALgMQAYgaAigDIAACnQgXgIgQgSg");
	this.shape_6.setTransform(-35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0.294,1],-21.9,1.3,0,-21.9,1.3,3925.1).s().p("Ak2BVIAAiqIBgAAIINAAIAACqIAAAAIgdAAg");
	this.shape_7.setTransform(-0.5,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0.294,1],-4,1.3,0,-4,1.3,10).s().p("AgmhUIAEAAQAjACAcAbIAEAFIACACQAEAOAAAQQAAAdgPAZQgHALgKAKQgTAVgaAHg");
	this.shape_8.setTransform(34.6,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).wait(1));

	// Layer 1
	this.instance = new lib.startpulse();
	this.instance.setTransform(-0.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AkxBrQgJgCgJgEQgRgIgOgOQgVgVgHgbQgEgOAAgQQAAgrAgggQAbgcAmgFIJEAAQAlAFAbAcQAPAOAHARIAFAKQAFARAAARQAAAuggAgQgVAVgcAHg");
	this.shape_9.setTransform(-0.3,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_9}]},2).wait(1));

	// Layer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.298)").s().p("AkxBxIgBgBQgKgCgJgEQgSgJgPgPQgWgWgHgcQgEgPAAgQQAAgtAhgiQAdgdAngEIJFAAQAnAEAdAdQAPAPAIASIAEAKQAGASAAASQAAAwghAhQgXAXgdAHIgBABg");
	this.shape_10.setTransform(-0.3,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.239)").s().p("AkzB1QgKgCgKgFQgSgIgQgQQgXgXgIgeQgEgPAAgRQAAgvAjgjQAegeApgFIABAAIJEAAIABAAQAoAFAeAeQAQAPAIATIAFALQAGASAAATQAAAygjAjQgXAYgfAHIgCABIpjAAIAAAAIgCgBgAlmhOQghAiAAAtQAAAQAEAPQAHAcAWAWQAPAPASAJQAJAEAKACIABABIJjAAIABgBQAdgHAXgXQAhghAAgwQAAgSgGgRIgEgLQgIgSgPgPQgdgdgngEIpFAAQgnAEgdAdg");
	this.shape_11.setTransform(-0.3,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.176)").s().p("AkxB7IgEgBQgKgDgKgEIAAAAQgTgJgRgQIAAgBQgYgYgIgfIAAABQgEgQAAgSQAAgyAkgkIAAAAQAggfAqgFIACAAIJEAAIABAAQArAFAfAfIAAAAQAQAQAJAUIAFALQAGATAAAUQAAA0gkAkQgZAZgfAIIgEABgAkjh0QgoAFgeAeQgjAjAAAvQAAARAEAPQAIAeAXAXQAQAQASAIQAKAFAKACIACABIJjAAIACgBQAfgHAXgYQAjgjAAgyQAAgTgGgSIgFgLQgIgTgQgPQgegegogFIgBAAIpEAAIgBgBIgBABg");
	this.shape_12.setTransform(-0.3,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.114)").s().p("AEyB/IpjAAIgFAAQgLgDgKgEIAAAAQgUgKgRgRIgBAAQgYgZgJghIAAABQgEgRAAgSQAAg0AlgmIABAAQAgggAsgFIADgBIJEAAIACABQAsAFAhAgIAAAAQAQARAKAUIAEANQAHATAAAVQAAA2glAmQgaAaghAIIgFABIAAgBgAltBZIAAAAQARARATAJIAAAAQAKAEAKADIAEAAIJjAAIAEAAQAfgIAZgZQAkgkAAg0QAAgUgGgTIgFgLQgJgUgQgQIAAAAQgfgfgrgFIgBAAIpEAAIgCAAQgqAFggAfIAAAAQgkAkAAAyQAAASAEAPIAAAAQAIAfAYAYg");
	this.shape_13.setTransform(-0.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.055)").s().p("AEyCEIpjAAIgGAAQgLgDgLgFIAAAAQgVgKgSgSQgagagJghIAAAAQgEgRAAgTQAAg2AngnQAigiAugFIADgBIJEAAIACABQAuAFAiAiQASARAJAVIAFANQAHAVAAAVQAAA4gnAnQgbAbgiAJIgGABIAAgBgAEyB/IAFAAQAhgIAagaQAlgmAAg2QAAgVgHgTIgEgNQgKgUgQgRIAAAAQghgggsgFIgCgBIpEAAIgDABQgsAFggAgIgBAAQglAmAAA0QAAASAEARIAAgBQAJAhAYAZIABAAQARARAUAKIAAAAQAKAEALADIAFAAg");
	this.shape_14.setTransform(-0.3,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-11.3,104,26.6);


(lib.circle = function() {
	this.initialize();

	// Layer 3
	this.drop = new lib.drop_1();
	this.drop.setTransform(-1,-0.5,1.765,1.765);

	// Layer 5
	this.ring = new lib.circleperimeter();
	this.ring.setTransform(0,0,1.574,1.574);

	this.circle = new lib.circleperimeter();
	this.circle.setTransform(0,0,1.662,1.662);

	this.addChild(this.circle,this.ring,this.drop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-301.6,-301.6,603.3,603.3);


(lib.shipbody = function() {
	this.initialize();

	// b and w ship
	this.body2 = new lib.shipbodyblackwhite();

	// color ship
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00CC99","#0099CC","#003366","#000000"],[0,0.216,0.659,1],-1,-5.4,0,-1,-5.4,15.5).s().p("AAfBPIg8AAIgqAfIA3jbIAiAAIABACIA0DZgAgGhgQgIAFgJATIAAAxQAXAUAYgUIABAAIAAgxQgNgbgMAAIAAAAQgCAAgEADg");
	this.shape.setTransform(0,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUheQAJAOAIAPQAwBXgNBlgAhHB3IAAgCQgOhzBEhjIACgCIAPgXIAAAAIADAFIAPAUIgiAAIg2DcIgBgEgAgXgKIAAgxQAJgTAIgGQAEgCACAAQAMAAAMAbIAAAxQgMAKgMAAQgLAAgMgKg");

	this.addChild(this.shape_1,this.shape,this.body2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-12.8,16,25.7);


(lib.Explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		/* stop();
		parent.removeChild(this);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.explosionshape();
	this.instance.setTransform(-0.3,0,0.337,0.337);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.3,20.4,20.6);


(lib.Amoeba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.seeker = new lib.GuidedCell();
	this.seeker.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.seeker).wait(60));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABbmTQg8gZgPBAQgOBAgdAGQggAGglABQhrgJhDBPQgpAwgCBIQAHBIhFBcQhFBfBqAcQBZAYAlBcQANAgAUAWQAmApBBAIQBTALAng8QANgTAIgcQAdhjBvAMQBSAKBSgHQBEhuhMhJQgugsg+gMQhqgZAUhuQAShfgRhFQgShGg9gYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.4)").s().p("AhMGZQhBgIgmgpQgUgWgNggQglhchZgYQhqgcBFhfQBFhcgHhIQAChIApgwQBDhPBrAJQAlgBAggGQAdgGAOhAQAPhAA8AZQA9AYASBGQARBFgSBfQgUBuBqAZQA+AMAuAsQBMBJhEBuQhSAHhSgKQhvgMgdBjQgIAcgNATQghAzhAAAQgMAAgNgCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al4A+QAvhGAMg6QAEgUgBgRQAGhGAqgwQAkglAhgSQAsgYA5ADQAjgCAfgFQAhgFAPg5QAQg5A4AaQA7AdAWBBQAMAjACAoQADAigFAqQgKBmBbAgQA9ASApAtQBCBLg2BlQgDAEgCAFQhNAMhQgEQgBAAgCAAQhqgEghBYQgBABAAABQgJAXgNARQglAwhFgHQgHgBgJgBQg/gLgngpQgPgQgMgVQgEgIgDgIQglhVhSgZQgFgBgFgCQgZgGgPgKQgxghAuhIg");
	this.shape_2.setTransform(-0.5,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.4)").s().p("Ag3GVIgQgCQg/gLgngpQgPgQgMgVQgEgIgDgIQglhVhSgZIgKgDQgZgGgPgKQgxghAuhIIADgCQAvhGAMg6QAEgUgBgRQAGhGAqgwQAkglAhgSQAsgYA5ADQAjgCAfgFQAhgFAPg5QAQg5A4AaQA7AdAWBBQAMAjACAoQADAigFAqQgKBmBbAgQA9ASApAtQBCBLg2BlIgFAJQhNAMhQgEIgDAAQhqgEghBYIgBACQgJAXgNARQghAqg4AAIgRgBg");
	this.shape_3.setTransform(-0.5,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al7A4QAshHAPg6QAEgTABgRQAIhFAsguQAmglAfgUQApgbA4ABQAigDAhgEQAhgEARgzQARgxA1AcQA4AhAaA8QANAgAHAkQAFAfgBAnQgBBgBSAnQA3AXAmAtQA7BNgyBkQgCAFgDAEQhHAThPABQgBAAgCAAQhnACgnBOQAAABAAABQgLAVgOAOQgmAqhCgKQgIgBgJgCQg9gNgngpQgQgQgMgVQgFgIgDgIQgohShSgYQgFgBgFgCQgZgGgPgLQgwghAqhHg");
	this.shape_4.setTransform(-1,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AgyGPIgRgDQg9gNgngpQgQgQgMgVIgIgQQgohShSgYIgKgDQgZgGgPgLQgwghAqhHIACgDQAshHAPg6QAEgTABgRQAIhFAsguQAmglAfgUQApgbA4ABIBDgHQAhgEARgzQARgxA1AcQA4AhAaA8QANAgAHAkQAFAfgBAnQgBBgBSAnQA3AXAmAtQA7BNgyBkIgFAJQhHAThPABIgDAAQhnACgnBOIAAACQgLAVgOAOQgfAigwAAQgMAAgNgCg");
	this.shape_5.setTransform(-1,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al9AyQAohHASg7QAFgSABgSQAMhCAuguQAmgkAdgVQAogfA2gBQAigEAhgDQAigDASgsQATgrAyAfQA1AlAeA3QAPAeAKAgQAJAaACAlQAIBaBJAtQAxAcAiAuQA1BOguBlQgCAFgDAEQhBAZhNAGQgCAAgBABQhlAHgsBFQAAAAgBABQgLASgPANQgoAkhAgNQgIgCgIgCQg8gQgngpQgRgQgMgVQgFgHgEgIQgqhQhTgXQgFgBgFgCQgZgGgPgLQgwgiAnhHg");
	this.shape_6.setTransform(-1.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.4)").s().p("AguGKIgQgEQg8gQgngpQgRgQgMgVIgJgPQgqhQhTgXIgKgDQgZgGgPgLQgwgiAnhHIACgDQAohHASg7QAFgSABgSQAMhCAuguQAmgkAdgVQAogfA2gBIBDgHQAigDASgsQATgrAyAfQA1AlAeA3QAPAeAKAgQAJAaACAlQAIBaBJAtQAxAcAiAuQA1BOguBlIgFAJQhBAZhNAGIgDABQhlAHgsBFIgBABQgLASgPANQgdAagqAAQgQAAgRgDg");
	this.shape_7.setTransform(-1.5,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al/AsQAkhIAVg7QAFgSADgRQAPhCAvgsQAngjAcgYQAlgiA1gCQAhgGAigCQAkgCATglQAUgkAuAiQAzAoAhAzQASAbAOAcQALAWAGAiQASBUA/A0QArAfAeAwQAvBRgqBkQgCAFgCAEQg8AfhMALQgBABgCAAQhiAOgxA7QAAAAgBABQgMAQgQAKQgpAeg/gRQgHgCgIgCQg7gTgogoQgQgRgOgUQgEgHgEgIQgthOhTgVQgGgCgFgBQgZgGgPgMQgvgiAjhIg");
	this.shape_8.setTransform(-2,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.4)").s().p("AgqGDIgPgEQg7gTgogoQgQgRgOgUIgIgPQgthOhTgVIgLgDQgZgGgPgMQgvgiAjhIIACgCQAkhIAVg7QAFgSADgRQAPhCAvgsIBDg7QAlgiA1gCQAhgGAigCQAkgCATglQAUgkAuAiQAzAoAhAzQASAbAOAcQALAWAGAiQASBUA/A0QArAfAeAwQAvBRgqBkIgEAJQg8AfhMALIgDABQhiAOgxA7IgBABQgMAQgQAKQgaATgkAAQgTAAgXgGg");
	this.shape_9.setTransform(-2,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmBAnQAhhKAXg6QAGgTAEgQQAThAAvgsQApgiAagZQAigmA0gEQAhgHAjgBQAkgBAVgeQAWgdArAkQAwAsAlAuQATAZASAXQAOATAKAfQAaBOA3A6QAlAkAaAxQApBTgnBkQgCAEgCAFQg2AlhKAQQgBABgCAAQhgAUg2AxQAAABAAAAQgOAOgQAHQgrAYg9gTQgHgDgIgDQg5gVgpgoQgQgRgOgUQgFgHgFgHQgvhMhUgUQgFgCgFgBQgZgGgQgMQgugiAfhJg");
	this.shape_10.setTransform(-2.6,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.4)").s().p("AglF+IgPgGQg5gVgpgoQgQgRgOgUIgKgOQgvhMhUgUIgKgDQgZgGgQgMQgugiAfhJIACgBQAhhKAXg6QAGgTAEgQQAThAAvgsQApgiAagZQAigmA0gEQAhgHAjgBQAkgBAVgeQAWgdArAkQAwAsAlAuIAlAwQAOATAKAfQAaBOA3A6QAlAkAaAxQApBTgnBkIgEAJQg2AlhKAQIgDABQhgAUg2AxIAAABQgOAOgQAHQgYANgeAAQgWAAgcgIg");
	this.shape_11.setTransform(-2.6,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmDAgQAdhKAag7QAHgRAFgRQAVg+AygrQAqghAXgcQAhgoAygHQAhgIAjAAQAmABAVgYQAYgWAoAnQAtAvAoAqQAWAWAVATQARAPAOAcQAjBIAuBBQAfAoAWAyQAjBVgjBkQgBAEgCAFQgxArhJAVQgBABgCABQhdAag7AnQAAABgBAAQgPALgRAFQgsASg7gXQgHgCgIgEQg3gXgpgpQgRgRgPgTQgFgHgEgHQgyhJhVgUQgFgBgFgBQgZgGgQgNQgugjAchIg");
	this.shape_12.setTransform(-3.1,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.4)").s().p("AghF3IgPgGQg3gXgpgpQgRgRgPgTIgJgOQgyhJhVgUIgKgCQgZgGgQgNQgugjAchIIACgCQAdhKAag7QAHgRAFgRQAVg+AygrQAqghAXgcQAhgoAygHQAhgIAjAAQAmABAVgYQAYgWAoAnIBVBZQAWAWAVATQARAPAOAcQAjBIAuBBQAfAoAWAyQAjBVgjBkIgDAJQgxArhJAVIgDACQhdAag7AnIgBABQgPALgRAFQgTAIgXAAQgcAAghgNg");
	this.shape_13.setTransform(-3.1,4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmFAaQAZhLAdg7QAIgRAFgQQAZg9AzgqQArggAWgeQAegsAxgIQAggJAkABQAnABAXgRQAZgPAlAqQAqAyAsAmQAYAUAZAOQAUALARAaQAsBCAlBHQAZAsASA0QAdBXgfBjQgBAFgCAEQgsAyhGAaQgCABgBABQhbAghAAdQAAABgBAAQgQAIgSADQguAMg5gaQgHgDgHgDQg2gagpgpQgRgRgQgTQgFgHgFgHQg0hHhWgSQgFgBgFgCQgZgFgQgNQgtgkAYhIg");
	this.shape_14.setTransform(-3.6,4.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.4)").s().p("AgdFxIgOgGQg2gagpgpQgRgRgQgTIgKgOQg0hHhWgSIgKgDQgZgFgQgNQgtgkAYhIIACgCQAZhLAdg7QAIgRAFgQQAZg9AzgqQArggAWgeQAegsAxgIQAggJAkABQAnABAXgRQAZgPAlAqQAqAyAsAmQAYAUAZAOQAUALARAaQAsBCAlBHQAZAsASA0QAdBXgfBjIgDAJQgsAyhGAaIgDACQhbAghAAdIgBABQgQAIgSADQgOAEgQAAQgiAAgngSg");
	this.shape_15.setTransform(-3.6,4.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmHAUQAWhMAfg7QAJgRAGgQQAdg7A0gpQAsggAUgfQAcgwAvgKQAggKAlACQAoACAYgKQAagIAiAsQAnA3AxAgQAZASAcAKQAYAGAVAYQA1A8AbBOQAUAwAOA1QAWBZgbBjQgBAFgBAEQgnA4hEAfQgCABgCABQhYAmhFAUQAAAAgBABQgRAFgSABQgwAGg3gdQgHgEgHgDQg0gdgqgpQgSgRgPgTQgGgGgFgHQg3hFhWgRQgFgBgGgBQgYgGgRgNQgtgkAWhJg");
	this.shape_16.setTransform(-4.1,5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.4)").s().p("AgYFrIgOgHQg0gdgqgpQgSgRgPgTIgLgNQg3hFhWgRIgLgCQgYgGgRgNQgtgkAWhJIABgBQAWhMAfg7IAPghQAdg7A0gpQAsggAUgfQAcgwAvgKQAggKAlACQAoACAYgKQAagIAiAsQAnA3AxAgQAZASAcAKQAYAGAVAYQA1A8AbBOQAUAwAOA1QAWBZgbBjIgCAJQgnA4hEAfIgEACQhYAmhFAUIgBABQgRAFgSABIgQABQgpAAgugYg");
	this.shape_17.setTransform(-4.1,5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmJAOQAShNAig7QAKgRAIgQQAfg5A2goQAtgfASghQAagzAugNQAfgKAmACQApAEAZgEQAbgBAgAvQAjA6A1AcQAbAPAgAGQAbACAZAWQA9A1ATBVQANA0ALA3QAQBagXBjQgBAFgBAEQghA+hEAkQgBABgCACQhVAshLAKQAAAAgBAAQgSADgTgBQgxAAg1ggQgHgEgHgEQgygfgrgpQgSgRgQgTQgGgHgFgGQg6hChXgRQgFAAgFgCQgZgFgQgOQgtgkAShJg");
	this.shape_18.setTransform(-4.7,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.4)").s().p("ABTGFQgxAAg1ggIgOgIQgygfgrgpQgSgRgQgTIgLgNQg6hChXgRIgKgCQgZgFgQgOQgtgkAShJIABgBQAShNAig7IASghQAfg5A2goQAtgfASghQAagzAugNQAfgKAmACQApAEAZgEQAbgBAgAvQAjA6A1AcQAbAPAgAGQAbACAZAWQA9A1ATBVQANA0ALA3QAQBagXBjIgCAJQghA+hEAkIgDADQhVAshLAKIgBAAQgOACgOAAIgJAAg");
	this.shape_19.setTransform(-4.7,6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmLAKQAOhNAlg8QAKgQAJgQQAjg4A3gmQAugfARgjQAXg2AtgPQAegLAnADQAqAFAaADQAdAGAdAxQAgA+A5AXQAdANAkACQAdgCAdATQBGAvAKBbQAHA4AHA5QAKBcgTBjQgBAEgBAFQgcBEhBApQgCABgCACQhSAyhQABQAAAAgBAAQgUAAgTgDQgzgHgzgjQgHgEgHgFQgwghgrgpQgSgRgRgTQgGgGgGgHQg8g/hYgQQgFAAgFgCQgZgFgQgOQgsglAOhJg");
	this.shape_20.setTransform(-5.2,6.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.4)").s().p("ABXGLQgzgHgzgjIgOgJQgwghgrgpQgSgRgRgTIgMgNQg8g/hYgQIgKgCQgZgFgQgOQgsglAOhJIABgBQAOhNAlg8IATggQAjg4A3gmQAugfARgjQAXg2AtgPQAegLAnADIBEAIQAdAGAdAxQAgA+A5AXQAdANAkACQAdgCAdATQBGAvAKBbIAOBxQAKBcgTBjIgCAJQgcBEhBApIgEADQhSAyhQABIgBAAIgFAAQgRAAgRgDg");
	this.shape_21.setTransform(-5.2,6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmOAFQALhOAog8QALgQAKgPQAmg3A4gmQAwgdAOglQAVg6AsgQQAegNAnAFQArAFAcAKQAeANAZA0QAeBBA8ATQAfAKAogCQAggGAhAQQBQAqAABhQABA8ADA6QAEBfgPBiQgBAEgBAFQgWBKhAAuQgBACgCABQhQA5hVgJIgBgBQgVgBgUgGQg0gNgygmQgGgFgHgFQgvgkgsgpQgSgRgSgSQgGgGgGgGQg/g+hXgOQgGgBgFgBQgZgFgQgPQgsglALhJg");
	this.shape_22.setTransform(-5.7,7.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.4)").s().p("ACFGXIgBgBQgVgBgUgGQg0gNgygmIgNgKQgvgkgsgpIgkgjIgMgMQg/g+hXgOIgLgCQgZgFgQgPQgsglALhJIAAgBQALhOAog8IAVgfQAmg3A4gmQAwgdAOglQAVg6AsgQQAegNAnAFQArAFAcAKQAeANAZA0QAeBBA8ATQAfAKAogCQAggGAhAQQBQAqAABhQABA8ADA6QAEBfgPBiIgCAJQgWBKhAAuIgDADQhFAxhJAAIgXgBg");
	this.shape_23.setTransform(-5.7,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAAQAIhQAqg8QALgQALgPQAqg1A5glQAxgdANgmQASg+ArgSQAdgOAoAGQAtAGAcARQAgAUAWA2QAbBFBAAPQAhAIAsgHQAjgKAkANQBZAkgJBoQgEBAgCA7QgCBhgLBiQgBAFAAAEQgRBQg+A0QgCABgCACQhOA+hZgSQgBgBAAAAQgWgEgVgIQg2gTgwgpQgGgGgGgFQgugmgsgpQgTgSgSgRQgGgGgGgGQhCg8hYgNQgGAAgFgBQgZgGgRgOQgqgmAHhJg");
	this.shape_24.setTransform(-5.8,7.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.4)").s().p("ACHGfIgBgBQgWgEgVgIQg2gTgwgpIgMgLQgugmgsgpIglgjIgMgMQhCg8hYgNIgLgBQgZgGgRgOQgqgmAHhJIAAAAQAIhQAqg8IAWgfQAqg1A5glQAxgdANgmQASg+ArgSQAdgOAoAGQAtAGAcARQAgAUAWA2QAbBFBAAPQAhAIAsgHQAjgKAkANQBZAkgJBoQgEBAgCA7QgCBhgLBiIgBAJQgRBQg+A0IgEADQg8AwhDAAQgUAAgUgEg");
	this.shape_25.setTransform(-5.8,7.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmdgGQAEhSAtg8QAMgPANgPQAsg0A7gjQAygcALgpQAQhBApgUQAdgPApAHQAvAHAcAYQAiAaATA6QAYBIBDAKQAjAFAwgLQAmgOAoALQBhAegRBuQgLBEgFA9QgIBjgIBiQAAAEgBAFQgLBWg9A4QgBACgCACQhLBFhfgdQAAAAgBgBQgXgGgWgLQg3gYgugtQgGgGgGgFQgsgpgtgpQgTgSgTgRQgGgGgHgGQhEg5hZgMQgFAAgFgBQgZgFgRgQQgqgmADhHg");
	this.shape_26.setTransform(-5.6,8.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.4)").s().p("ACGGmIgBgBQgXgGgWgLQg3gYgugtIgMgLIhZhSIgmgjIgNgMQhEg5hZgMIgKgBQgZgFgRgQQgqgmADhHIAAgBQAEhSAtg8IAZgeQAsg0A7gjQAygcALgpQAQhBApgUQAdgPApAHQAvAHAcAYQAiAaATA6QAYBIBDAKQAjAFAwgLQAmgOAoALQBhAegRBuQgLBEgFA9IgQDFIgBAJQgLBWg9A4IgDAEQg1Awg/AAQgbAAgbgIg");
	this.shape_27.setTransform(-5.6,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFVj2QgtgKgrASQiWAugfhzQgehyhigSQhkgRgYB0QgJAqgnAVQhVAug9BLQgwA8AABTQAABIAqAnQAUASAgAEQBjAMBLBBQBIA+BCBFQA/BDBVAhQBkAoBJhLQBChCADhlQAEhiANhfQAKhEARhIQAah1hngWg");
	this.shape_28.setTransform(-5.4,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.4)").s().p("ACEGsQhVghg/hDQhChFhIg+QhLhBhjgMQgggEgUgSQgqgnAAhIQAAhTAwg8QA9hLBVguQAngVAJgqQAYh0BkARQBiASAeByQAfBzCWguQArgSAtAKQBnAWgaB1QgRBIgKBEQgNBfgEBiQgDBlhCBCQgwAxg7AAQggAAgigOg");
	this.shape_29.setTransform(-5.4,9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmhgQQABhTAwg7QANgRAPgQQAtgwA4giQAzgeAKgqQAPhCApgVQAdgPApAHQAvAJAdAgQAiAiAQA7QAMAuAfAWQAsAgBZgbQAKgEALgDQAggIAiAIQAzAMAUAlQASAjgMA4QgLA1gKAzQgDASgDARQgNBOgJBNQgCAPgCAQQgFA2gWAtQgQAkgdAdQgjAmgpALQgqANgxgTQgegLgbgRQgygfgmgrQgbgegcgeQglgmgogkQgmghgtgUQgrgSgugHQgbgEgTgPQgtgsABhHg");
	this.shape_30.setTransform(-5,9.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.4)").s().p("AB6GwQgegLgbgRQgygfgmgrIg3g8QglgmgogkQgmghgtgUQgrgSgugHQgbgEgTgPQgtgsABhHQABhTAwg7QANgRAPgQQAtgwA4giQAzgeAKgqQAPhCApgVQAdgPApAHQAvAJAdAgQAiAiAQA7QAMAuAfAWQAsAgBZgbIAVgHQAggIAiAIQAzAMAUAlQASAjgMA4QgLA1gKAzIgGAjQgNBOgJBNIgEAfQgFA2gWAtQgQAkgdAdQgjAmgpALQgRAFgSAAQgbAAgdgLg");
	this.shape_31.setTransform(-5,9.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmdgUQADhRAvg8QAOgRAOgPQAugwA1gkQAwggALgoQARhAAqgVQAdgOAoAIQAuAJAdAgQAhAjAQA6QAMAuAdAXQAqAkBYgbQAKgEALgDQAggHAhAJQAzANAUAlQASAjgLA3QgKA1gKAzQgEARgDARQgPBOgOBIQgDAPgDAPQgIAzgWAtQgRAjgbAeQgjAlgnAOQgpAQgvgRQgdgKgcgTQgwgggkgsQgbgegageQgjgngngkQglgigugTQgqgSgugKQgagFgSgPQgsgtAChGg");
	this.shape_32.setTransform(-4.6,9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.4)").s().p("ABwG0QgdgKgcgTQgwgggkgsIg1g8QgjgngngkQglgigugTQgqgSgugKQgagFgSgPQgsgtAChGQADhRAvg8IAcggQAugwA1gkQAwggALgoQARhAAqgVQAdgOAoAIQAuAJAdAgQAhAjAQA6QAMAuAdAXQAqAkBYgbIAVgHQAggHAhAJQAzANAUAlQASAjgLA3IgUBoIgHAiIgdCWIgGAeQgIAzgWAtQgRAjgbAeQgjAlgnAOQgUAHgVAAQgXAAgYgIg");
	this.shape_33.setTransform(-4.6,9.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmYgYQAEhRAvg7QANgRAOgPQAugxAzglQAuggAMgoQASg+ArgUQAegOAnAIQAtAKAcAhQAgAkAQA6QAMAtAcAYQAnAnBXgaQALgEAKgDQAhgHAgAKQAxANAVAmQASAjgJA2QgKA1gLAzQgDARgEAQQgRBNgUBFQgDANgEAPQgLAxgXAsQgRAjgaAeQghAlgmAQQgnAUgugQQgdgJgbgUQgughgkgsQgZgfgZgfQghgogngkQgkgigtgTQgrgSgsgLQgagGgRgQQgrguAEhFg");
	this.shape_34.setTransform(-4.2,9.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.4)").s().p("ABmG3QgdgJgbgUQgughgkgsIgyg+QghgogngkQgkgigtgTQgrgSgsgLQgagGgRgQQgrguAEhFQAEhRAvg7IAbggQAugxAzglQAuggAMgoQASg+ArgUQAegOAnAIQAtAKAcAhQAgAkAQA6QAMAtAcAYQAnAnBXgaIAVgHQAhgHAgAKQAxANAVAmQASAjgJA2IgVBoIgHAhQgRBNgUBFIgHAcQgLAxgXAsQgRAjgaAeQghAlgmAQQgWALgYAAQgTAAgUgHg");
	this.shape_35.setTransform(-4.2,9.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUgdQAGhQAug7QANgRAOgPQAugwAwgnQAsgiANgmQAUg8ArgTQAfgOAmAJQAqAJAeAjQAfAlAQA4QAMAtAZAZQAlAqBXgZQAKgEALgDQAggGAhAKQAwAOAUAnQATAjgIA1QgJA0gMAzQgEARgEAQQgTBNgYBAQgFANgEANQgOAvgXAsQgSAigaAeQggAmgjASQgmAXgtgOQgcgIgbgWQgsgigjgsQgZgggXgfQgegpgmgkQgkgigugUQgrgSgqgMQgZgHgRgRQgpgvAFhEg");
	this.shape_36.setTransform(-3.8,9.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.4)").s().p("ABbG6QgcgIgbgWQgsgigjgsIgwg/QgegpgmgkQgkgigugUQgrgSgqgMQgZgHgRgRQgpgvAFhEIAAAAQAGhQAug7QANgRAOgPQAugwAwgnQAsgiANgmQAUg8ArgTQAfgOAmAJQAqAJAeAjQAfAlAQA4QAMAtAZAZQAlAqBXgZIAVgHQAggGAhAKQAwAOAUAnQATAjgIA1QgJA0gMAzIgIAhQgTBNgYBAIgJAaQgOAvgXAsQgSAigaAeQggAmgjASQgXAOgaAAQgQAAgSgFg");
	this.shape_37.setTransform(-3.8,9.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmPghQAHhPAug7QANgRAOgPQAtgxAugoQAqgjAOglQAVg6AtgSQAfgNAlAIQApALAdAjQAfAmAPA3QAMAsAYAbQAjAuBWgZQAKgEALgDQAggFAgAKQAvAPAUAnQAUAkgIA0QgHAzgNAzQgEARgEAQQgVBLgeA9QgGALgFANQgRAsgXAsQgSAigZAeQgfAmgiAUQgkAbgrgNQgcgHgbgXQgrgjgigtQgXgggVggQgdgqglgkQgjgigugUQgrgSgpgOQgYgIgQgRQgogwAGhDg");
	this.shape_38.setTransform(-3.4,9.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.4)").s().p("ABSG9QgcgHgbgXQgrgjgigtQgXgggVggQgdgqglgkQgjgigugUQgrgSgpgOQgYgIgQgRQgogwAGhDIAAAAQAHhPAug7QANgRAOgPQAtgxAugoQAqgjAOglQAVg6AtgSQAfgNAlAIQApALAdAjQAfAmAPA3QAMAsAYAbQAjAuBWgZIAVgHQAggFAgAKQAvAPAUAnQAUAkgIA0QgHAzgNAzIgIAhQgVBLgeA9QgGALgFANQgRAsgXAsQgSAigZAeQgfAmgiAUQgZASgcAAQgNAAgNgEg");
	this.shape_39.setTransform(-3.4,9.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmLgmQAJhOAtg7QANgQAOgPQAtgxArgqQAogkAPgkQAXg4AtgSQAfgNAlAJQAoALAdAlQAeAmAPA3QAMArAWAcQAgAxBWgYQAKgEAKgDQAhgFAfAMQAuAPAVAnQAUAlgHAzQgGAzgOAyQgEARgFAQQgXBLgiA4QgHALgGAMQgUApgYAsQgSAhgYAfQgeAmggAWQgjAegqgLQgbgGgbgZQgqgjggguQgWgggUghQgagsglgjQgigigugUQgrgSgogQQgXgJgQgSQgmgxAHhCg");
	this.shape_40.setTransform(-3,9.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.4)").s().p("ABIHAQgcgGgbgZQgpgjghguQgWgggUghQgagsgkgjQgjgigtgUIhUgiQgXgJgQgSQgmgxAHhCQAJhOAug7QAMgQAOgPQAtgxArgqQAogkAPgkQAXg4AtgSQAfgNAlAJQAoALAdAlQAeAmAQA3QALArAWAcQAgAxBWgYIAVgHQAggFAfAMQAuAPAVAnQAUAlgGAzQgHAzgOAyIgJAhQgXBLgiA4IgNAXQgUApgYAsQgSAhgYAfQgeAmggAWQgaAWgdAAQgKAAgLgDg");
	this.shape_41.setTransform(-3,9.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmGgrQAKhNAtg6QANgRAOgPQAtgxAogrQAmgmAQgiQAYg2AvgSQAfgMAkAKQAnALAcAlQAdAnAQA2QALArAVAdQAeA1BVgYQAKgEAKgDQAhgEAfAMQAsAQAVAoQAUAlgFAyQgFAygPAzQgEAQgFAQQgZBKgoA0QgIAKgHALQgXAngYArQgSAhgYAfQgcAmgfAZQghAigogKQgbgGgbgZQgpglgeguQgVghgTghQgYgtgkgkQghgigugUQgsgSgmgRQgXgKgPgSQglgzAJhAg");
	this.shape_42.setTransform(-2.6,9.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.4)").s().p("AA+HDQgbgGgbgZQgpglgeguQgVghgTghQgYgtgkgkQghgigugUQgsgSgmgRQgXgKgPgSQglgzAJhAIAAgBQAKhNAtg6QANgRAOgPIBVhcQAmgmAQgiQAYg2AvgSQAfgMAkAKQAnALAcAlQAdAnAQA2QALArAVAdQAeA1BVgYIAUgHQAhgEAfAMQAsAQAVAoQAUAlgFAyQgFAygPAzIgJAgQgZBKgoA0QgIAKgHALIgvBSQgSAhgYAfQgcAmgfAZQgaAagdAAQgJAAgJgCg");
	this.shape_43.setTransform(-2.6,9.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmCgvQAMhMAtg7QAMgQAOgQQAtgxAmgsQAjgnASgiQAZg0AvgQQAhgMAiAKQAnAMAbAmQAdAoAPA1QAMAqASAeQAcA5BUgYQAKgDAKgEQAhgDAfANQAqAQAWAoQAVAlgFAxQgEAzgPAyQgFARgGAPQgaBJgtAwQgJAJgHALQgbAkgZArQgSAhgXAfQgbAmgcAbQggAlgngIQgbgFgZgbQgpgmgdgvQgUghgRgiQgWgtgjgkQghgigugUQgrgTglgTQgWgLgPgSQgjg0AJg/g");
	this.shape_44.setTransform(-2.2,9.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.4)").s().p("AA0HGQgbgFgZgbQgpgmgdgvQgUghgRgiQgWgtgjgkQghgigugUQgrgTglgTQgWgLgPgSQgjg0AJg/IAAAAQAMhMAtg7IAaggQAtgxAmgsQAjgnASgiQAZg0AvgQQAhgMAiAKQAnAMAbAmQAdAoAPA1QAMAqASAeQAcA5BUgYIAUgHQAhgDAfANQAqAQAWAoQAVAlgFAxQgEAzgPAyIgLAgQgaBJgtAwIgQAUQgbAkgZArQgSAhgXAfQgbAmgcAbQgbAegfAAIgNgBg");
	this.shape_45.setTransform(-2.2,9.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al9g0QANhLAsg6QANgRANgPQAtgyAkgtQAhgoASghQAbgyAwgQQAhgLAhAKQAmAMAbAnQAcApAPA1QAMApAQAgQAaA7BTgXQAKgDALgEQAggCAfANQApARAWApQAVAlgDAwQgDAzgQAyQgGAQgGAPQgcBIgyAsQgKAIgIAKQgeAigZArQgTAggWAgQgaAlgaAeQgfAoglgHQgagDgZgdQgogngcgvQgTghgPgjQgUgugiglQgggigvgTQgrgTgkgVQgVgMgOgSQgig1ALg+g");
	this.shape_46.setTransform(-1.8,9.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.4)").s().p("AAqHIQgagDgZgdQgogngcgvQgTghgPgjQgUgugiglQgggigvgTQgrgTgkgVQgVgMgOgSQgig1ALg+IAAgBQANhLAsg6IAaggQAtgyAkgtQAhgoASghQAbgyAwgQQAhgLAhAKQAmAMAbAnQAcApAPA1QAMApAQAgQAaA7BTgXIAVgHQAggCAfANQApARAWApQAVAlgDAwQgDAzgQAyIgMAfQgcBIgyAsQgKAIgIAKQgeAigZArQgTAggWAgQgaAlgaAeQgaAigfAAIgLgBg");
	this.shape_47.setTransform(-1.8,9.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al5g5QAPhKAsg6QAMgQAOgQQAtgxAggvQAfgqAUgfQAcgwAxgQQAhgKAhAKQAlANAaAoQAbApAPA0QAMApAOAhQAYA/BTgXQAJgDALgEQAhgBAdAOQAoASAXAoQAVAmgCAvQgCAwgRA0QgFAQgHAPQgeBIg3AnQgLAIgJAJQghAfgaAqQgSAggVAgQgaAmgYAgQgdAsgkgGQgagCgZgeQgngogZgwQgTgigNgjQgSgwghgkQgggigugUQgsgTgigWQgVgNgNgTQghg2AMg9g");
	this.shape_48.setTransform(-1.4,9.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.4)").s().p("AAgHLQgagCgZgeQgngogZgwQgTgigNgjQgSgwghgkQgggigugUQgsgTgigWQgVgNgNgTQghg2AMg9IAAgBQAPhKAsg6IAaggQAtgxAggvQAfgqAUgfQAcgwAxgQQAhgKAhAKQAlANAaAoQAbApAPA0QAMApAOAhQAYA/BTgXIAUgHQAhgBAdAOQAoASAXAoQAVAmgCAvQgCAwgRA0IgMAfQgeBIg3AnIgUARQghAfgaAqQgSAggVAgQgaAmgYAgQgaAnggAAIgHgBg");
	this.shape_49.setTransform(-1.4,9.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al0g9QAQhKArg6QANgQANgPQAtgyAegwQAdgrAUgfQAeguAygOQAigKAfAKQAkAOAaAoQAaArAPAzQAMAoANAiQAVBDBSgXQAKgDAKgDQAhgBAdAOQAnATAXApQAVAmgBAuQAAAwgSA0QgGAQgHAOQggBHg8AjQgMAHgKAIQgkAdgaAqQgTAfgUAhQgYAlgXAiQgcAwgigEQgXgCgbgfQgmgpgYgwQgRgigMglQgQgwghgkQgegjgvgTQgsgTghgYQgTgOgNgUQgfg2ANg9g");
	this.shape_50.setTransform(-1,9.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.4)").s().p("AAWHOQgXgCgbgfQgmgpgYgwQgRgigMglQgQgwghgkQgegjgvgTQgsgTghgYQgTgOgNgUQgfg2ANg9IAAAAQAQhKArg6IAagfQAtgyAegwIAxhKQAeguAygOQAigKAfAKQAkAOAaAoQAaArAPAzQAMAoANAiQAVBDBSgXIAUgGQAhgBAdAOQAnATAXApQAVAmgBAuQAAAwgSA0QgGAQgHAOQggBHg8AjQgMAHgKAIQgkAdgaAqIgnBAIgvBHQgaAsggAAIgEAAg");
	this.shape_51.setTransform(-1,9.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlwhDQAShIArg6QAMgQANgPQAtgyAcgyQAagsAWgdQAfgsAzgOQAigKAfALQAjAOAZAqQAaArAOAyQAMAnALAkQASBGBSgWQAKgDAKgEQAhAAAdAPQAmATAXAqQAWAnAAAtQAAAvgTAzQgGAQgHAPQgjBGhAAfQgNAGgLAHQgnAbgaApQgUAfgTAhQgXAmgVAkQgaAzghgDQgXAAgbghQgkgqgXgxQgQgigKglQgOgygggkQgegigvgUQgsgTgfgaQgTgPgMgUQgeg2AOg9g");
	this.shape_52.setTransform(-0.6,9.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.4)").s().p("AAMHQQgXAAgbghQgkgqgXgxQgQgigKglQgOgygggkQgegigvgUQgsgTgfgaQgTgPgMgUQgeg2AOg9IAAgBQAShIArg6QAMgQANgPQAtgyAcgyQAagsAWgdQAfgsAzgOQAigKAfALQAjAOAZAqQAaArAOAyIAXBLQASBGBSgWIAUgHQAhAAAdAPQAmATAXAqQAWAnAAAtQAAAvgTAzQgGAQgHAPQgjBGhAAfQgNAGgLAHQgnAbgaApIgnBAIgsBKQgZAxgfAAIgDgBg");
	this.shape_53.setTransform(-0.6,9.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlshHQAUhIAqg5QAMgRANgPQAtgyAZgzQAYgtAXgdQAhgqAzgNQAjgJAeALQAiAOAYArQAZAsAPAyQALAmAKAlQAQBJBRgVQAKgDAKgEQAhABAdAQQAkATAXArQAWAmACAsQABAvgUA0QgGAQgIAOQgkBFhGAbQgOAFgMAHQgqAYgaApQgUAegTAhQgVAmgTAnQgZA2gggBQgWAAgbgiQgjgrgVgxQgPgjgJgmQgMgygfglQgdgigvgUQgsgTgegbQgSgQgMgUQgcg4APg7g");
	this.shape_54.setTransform(-0.2,9.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.4)").s().p("AABHTQgWAAgbgiQgjgrgVgxQgPgjgJgmQgMgygfglQgdgigvgUQgsgTgegbQgSgQgMgUQgcg4APg7IAAgBQAUhIAqg5QAMgRANgPQAtgyAZgzQAYgtAXgdQAhgqAzgNQAjgJAeALQAiAOAYArQAZAsAPAyQALAmAKAlQAQBJBRgVIAUgHQAhABAdAQQAkATAXArQAWAmACAsQABAvgUA0QgGAQgIAOQgkBFhGAbQgOAFgMAHQgqAYgaApQgUAegTAhQgVAmgTAnQgZA1geAAIgCAAg");
	this.shape_55.setTransform(-0.2,9.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlnhNQAVhGAqg6QAMgQANgPQAtgyAWg1QAWguAYgbQAigoA1gNQAjgJAdAMQAhAPAYArQAYAtAPAxQALAmAHAmQAOBNBRgVQAJgDALgEQAhABAcARQAjAUAYArQAWAnACArQADAugVA0QgGAPgIAOQgnBFhLAWQgOAFgNAGQgtAVgbApQgUAegSAhQgVAmgRApQgXA6gcAAQgYACgbgkQgigsgTgyQgPgjgHgmQgJg0gegkQgdgjgvgUQgsgTgdgdQgSgRgLgVQgbg4ARg7g");
	this.shape_56.setTransform(0.2,9.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.4)").s().p("Ag5GzQgigsgTgyQgPgjgHgmQgJg0gegkQgdgjgvgUQgsgTgdgdQgSgRgLgVQgbg4ARg7IAAgBQAVhGAqg6QAMgQANgPQAtgyAWg1QAWguAYgbQAigoA1gNQAjgJAdAMQAhAPAYArQAYAtAPAxQALAmAHAmQAOBNBRgVIAUgHQAhABAcARQAjAUAYArQAWAnACArQADAugVA0QgGAPgIAOQgnBFhLAWQgOAFgNAGQgtAVgbApQgUAegSAhQgVAmgRApQgXA6gcAAIgCABQgXAAgagjg");
	this.shape_57.setTransform(0.2,9.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABrjqQgOhagphRQgqhRhNASQhfAVgnBnQgUA1gtAzQg7BFgdBZQgUA9AbA3QAcA7BHAeQBiAqAOBmQANBdA5BNQA8BTAmhwQAdhRArg/QAkg0BFgQQBhgXAnhcQAohfgwhUQgthOhKgFQhiAlgNhag");
	this.shape_58.setTransform(0.6,9.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.4)").s().p("AhCG1Qg5hNgNhdQgOhmhigqQhHgegcg7Qgbg3AUg9QAdhZA7hFQAtgzAUg1QAnhnBfgVQBNgSAqBRQApBRAOBaQANBaBiglQBKAFAtBOQAwBUgoBfQgnBchhAXQhFAQgkA0QgrA/gdBRQgXBAgbAAQgWAAgagjg");
	this.shape_59.setTransform(0.6,9.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlihYQAchaBAg+QAwguAXg5QAohmBfgUQBPgQAnBSQAnBSARBYQARBZBYgeQBDAJAuBRQAyBVgsBdQgnBXhdAUQhHANgnAxQgqA7gdBOQgnBug/hOQg7hIgLhcQgNhlhagtQhCgkgfg7Qgfg4AUg/g");
	this.shape_60.setTransform(0.2,8.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.4)").s().p("AhJG0Qg7hIgLhcQgNhlhagtQhCgkgfg7Qgfg4AUg/QAchaBAg+QAwguAXg5QAohmBfgUQBPgQAnBSQAnBSARBYQARBZBYgeQBDAJAuBRQAyBVgsBdQgnBXhdAUQhHANgnAxQgqA7gdBOQgYBAgeAAQgWAAgaggg");
	this.shape_61.setTransform(0.2,8.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlihfQAchbBDg4QA1goAYg8QAphlBfgSQBQgQAlBTQAkBTAVBXQAVBYBPgXQA8AMAwBVQAzBYgwBYQgnBThaARQhHAJgsAvQgqA3gcBLQgoBshChJQg8hDgLhbQgLhlhTgwQg7gpgjg7Qgig5AUhCg");
	this.shape_62.setTransform(-0.2,7.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.4)").s().p("AhRGzQg8hDgLhbQgLhlhTgwQg7gpgjg7Qgig5AUhCQAchbBDg4QA1goAYg8QAphlBfgSQBQgQAlBTQAkBTAVBXQAVBYBPgXQA8AMAwBVQAzBYgwBYQgnBThaARQhHAJgsAvQgqA3gcBLQgZBBggAAQgWAAgbgeg");
	this.shape_63.setTransform(-0.2,7.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlihlQAbhcBIgxQA4gkAbg+QAphlBggRQBSgOAiBUQAiBUAYBWQAZBXBFgQQA1APAxBYQA1BbgzBUQgoBOhWAOQhJAGgvAsQgpAzgcBIQgqBqhEhDQg+g/gJhaQgKhkhLg0Qg2gugmg8Qgmg5AUhEg");
	this.shape_64.setTransform(-0.6,6.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.4)").s().p("AhYGzQg+g/gJhaQgKhkhLg0Qg2gugmg8Qgmg5AUhEQAbhcBIgxQA4gkAbg+QAphlBggRQBSgOAiBUQAiBUAYBWQAZBXBFgQQA1APAxBYQA1BbgzBUQgoBOhWAOQhJAGgvAsQgpAzgcBIQgZBBgkAAQgWAAgbgag");
	this.shape_65.setTransform(-0.6,6.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlihsQAbhdBLgqQA9geAdhCQAqhlBggPQBTgMAfBUQAgBVAcBVQAdBWA7gJQAuASAzBcQA1Beg1BQQgpBIhSAMQhKACgzAqQgpAvgbBEQgrBphHg/QhAg5gIhZQgJhkhDg3Qgwgzgpg8Qgpg6AThHg");
	this.shape_66.setTransform(-1,5.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.4)").s().p("AhfGxQhAg5gIhZQgJhkhDg3Qgwgzgpg8Qgpg6AThHQAbhdBLgqQA9geAdhCQAqhlBggPQBTgMAfBUQAgBVAcBVQAdBWA7gJQAuASAzBcQA1Beg1BQQgpBIhSAMQhKACgzAqQgpAvgbBEQgbBCgmAAQgXAAgagYg");
	this.shape_67.setTransform(-1,5.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlihzQAahdBPgkQBBgZAfhEQArhkBggOQBVgMAdBWQAdBWAfBTQAhBVAxgBQAnAVA1BfQA3Bhg5BMQgpBDhOAJQhMgBg3AnQgoArgbBBQgsBohKg6QhCg1gGhYQgHhjg8g7Qgqg3gtg9Qgtg7AUhKg");
	this.shape_68.setTransform(-1.3,4.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.4)").s().p("AhnGxQhCg1gGhYQgHhjg8g7IhXh0Qgtg7AUhKQAahdBPgkQBBgZAfhEQArhkBggOQBVgMAdBWQAdBWAfBTQAhBVAxgBQAnAVA1BfQA3Bhg5BMQgpBDhOAJQhMgBg3AnQgoArgbBBQgcBDgoAAQgXAAgbgVg");
	this.shape_69.setTransform(-1.3,4.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alih5QAahfBTgdQBFgUAhhHQAshkBggMQBWgKAaBWQAbBXAjBSQAlBUAnAGQAgAYA3BhQA4Bmg9BIQgpA+hLAGQhMgEg7AkQgoAngaA+QguBlhMg0QhEgxgFhWQgFhjg1g+Qgkg8gwg+Qgxg7AUhMg");
	this.shape_70.setTransform(-1.7,3.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.4)").s().p("AhuGwQhEgxgFhWQgFhjg1g+Qgkg8gwg+Qgxg7AUhMQAahfBTgdQBFgUAhhHQAshkBggMQBWgKAaBWQAbBXAjBSQAlBUAnAGQAgAYA3BhQA4Bmg9BIQgpA+hLAGQhMgEg7AkQgoAngaA+QgeBDgrAAQgXAAgagSg");
	this.shape_71.setTransform(-1.7,3.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1,1,1).p("AliiAQAZhfBXgXQBJgOAkhLQAshjBfgKQBZgJAYBXQAYBYAnBRQApBTAdAMQAZAcA4BkQA6BphABEQgpA5hIADQhOgIg/AiQgnAjgaA7QguBkhPgwQhGgrgDhWQgFhigthBQgehCg0g+Qgzg8AThPg");
	this.shape_72.setTransform(-2.1,2.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.4)").s().p("Ah1GvQhGgrgDhWQgFhigthBQgehCg0g+Qgzg8AThPQAZhfBXgXQBJgOAkhLQAshjBfgKQBZgJAYBXQAYBYAnBRQApBTAdAMQAZAcA4BkQA6BphABEQgpA5hIADQhOgIg/AiQgnAjgaA7QgfBDguAAQgXAAgZgPg");
	this.shape_73.setTransform(-2.1,2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1,1,1).p("AliiHQAZhgBbgQQBNgJAlhOQAthiBfgJQBbgIAVBYQAWBZArBQQAsBSATAUQATAeA5BoQA7BshDA/QgqA0hDABQhPgLhDAeQgnAggZA4QgwBihRgrQhIgngDhUQgChigmhEQgYhHg3g/Qg4g8AUhSg");
	this.shape_74.setTransform(-2.5,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.4)").s().p("Ah8GuQhIgngDhUQgChigmhEQgYhHg3g/Qg4g8AUhSQAZhgBbgQQBNgJAlhOQAthiBfgJQBbgIAVBYQAWBZArBQQAsBSATAUQATAeA5BoQA7BshDA/QgqA0hDABQhPgLhDAeQgnAggZA4QghBEgyAAQgWAAgYgNg");
	this.shape_75.setTransform(-2.5,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(1,1,1).p("AliiOQAYhgBfgKQBRgEAohRQAuhhBfgIQBcgHATBZQATBaAvBPQAwBRAJAbQAMAhA7BrQA8BwhHA7QgpAuhAgBQhRgPhHAcQgmAcgZA0QgxBhhTgmQhKgigBhUQgChhgehHQgShMg7g/Qg6g9AThVg");
	this.shape_76.setTransform(-2.9,0.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.4)").s().p("AiDGtQhKgigBhUQgChhgehHQgShMg7g/Qg6g9AThVQAYhgBfgKQBRgEAohRQAuhhBfgIQBcgHATBZQATBaAvBPQAwBRAJAbQAMAhA7BrQA8BwhHA7QgpAuhAgBQhRgPhHAcQgmAcgZA0QgiBGg2AAQgVAAgXgLg");
	this.shape_77.setTransform(-2.9,0.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhiUQAXhiBjgDQBVABAqhUQAuhhBggGQBegFAQBaQAQBaAzBOQA0BQgBAiQAFAlA9BuQA9BzhKA2QgqAqg9gEQhRgThLAaQglAYgXAxQg0BehWggQhMgdAAhTQAAhhgXhKQgMhRg+hAQg+g9AUhXg");
	this.shape_78.setTransform(-3.3,-0.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.4)").s().p("AiKGsQhMgdAAhTQAAhhgXhKQgMhRg+hAQg+g9AUhXQAXhiBjgDQBVABAqhUQAuhhBggGQBegFAQBaQAQBaAzBOQA0BQgBAiQAFAlA9BuQA9BzhKA2QgqAqg9gEQhRgThLAaQglAYgXAxQgnBGg6AAQgUAAgVgIg");
	this.shape_79.setTransform(-3.3,-0.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhibQAXhjBmAEQBaAGAshXQAvhgBggFQBfgEAOBbQAOBcA2BMQA3BPgKApQgCAoA+ByQA/B1hOAzQgqAkg5gGQhSgWhPAWQglAUgWAuQg2BdhYgbQhOgZABhRQAChggPhOQgHhWhBg+QhChBAUhZg");
	this.shape_80.setTransform(-3.7,-1.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.4)").s().p("AiRGrQhOgZABhRQAChggPhOQgHhWhBg+QhChBAUhZQAXhjBmAEQBaAGAshXQAvhgBggFQBfgEAOBbQAOBcA2BMQA3BPgKApQgCAoA+ByQA/B1hOAzQgqAkg5gGQhSgWhPAWQglAUgWAuQgqBIg+AAQgTAAgTgGg");
	this.shape_81.setTransform(-3.7,-1.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhiiQAWhkBqALQBeALAuhZQAwhgBggEQBhgDALBcQALBdA6BLQA8BOgUAwQgJArA/B2QBAB4hQAvQgrAfg1gKQhUgZhTAUQgkAQgWArQg3BbhbgWQhPgUAChQQADhggIhSQgBhahEg/QhFhBAUhcg");
	this.shape_82.setTransform(-4,-2.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.4)").s().p("AiZGqQhPgUAChQQADhggIhSQgBhahEg/QhFhBAUhcQAWhkBqALQBeALAuhZQAwhgBggEQBhgDALBcQALBdA6BLQA8BOgUAwQgJArA/B2QBAB4hQAvQgrAfg1gKQhUgZhTAUQgkAQgWArQgsBJhDAAQgRAAgSgEg");
	this.shape_83.setTransform(-4,-2.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhiqQAVhkBvARQBhARAxhdQAxhfBggCQBigCAJBdQAJBeA9BKQBABMgeA4QgQAsBBB7QBBB7hUArQgrAagxgMQhWgdhWARQgkAMgVAoQg4BahegSQhRgPAEhPQAEhfAAhVQAFhghIg/QhJhCAUhfg");
	this.shape_84.setTransform(-4.4,-3.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.4)").s().p("AigGoQhRgPAEhPQAEhfAAhVQAFhghIg/QhJhCAUhfQAVhkBvARQBhARAxhdQAxhfBggCQBigCAJBdQAJBeA9BKQBABMgeA4QgQAsBBB7QBBB7hUArQgrAagxgMQhWgdhWARQgkAMgVAoQgvBLhKAAQgOAAgPgDg");
	this.shape_85.setTransform(-4.4,-3.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhixQAVhlByAXQBmAWAyhfQAyhfBgAAQBkgBAGBeQAGBeBBBJQBEBMgoA+QgXAwBDB+QBDB/hYAmQgrAVgugPQhWghhbAPQgjAJgVAkQg5BYhhgMQhTgKAFhPQAGhfAHhYQALhlhLg/QhMhCAUhig");
	this.shape_86.setTransform(-4.8,-4.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.4)").s().p("AioGnQhTgKAFhPQAGhfAHhYQALhlhLg/QhMhCAUhiQAVhlByAXQBmAWAyhfQAyhfBgAAQBkgBAGBeQAGBeBBBJQBEBMgoA+QgXAwBDB+QBDB/hYAmQgrAVgugPQhWghhbAPQgjAJgVAkQgyBNhRAAIgXgBg");
	this.shape_87.setTransform(-4.8,-4.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEigOQgeAzBFCBQBECChbAiQgsAQgqgSQhYgkheAMQgjAFgUAhQg7BWhjgHQhVgFAHhOQAHheAPhbQAQhqhOhAQhQhDAUhkQAUhmB3AeQBpAbA1hjQAyheBhABQBlABAEBeQAEBgBEBIQBIBKgyBGg");
	this.shape_88.setTransform(-5.2,-5.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.4)").s().p("AivGlQhVgFAHhOQAHheAPhbQAQhqhOhAQhQhDAUhkQAUhmB3AeQBpAbA1hjQAyheBhABQBlABAEBeQAEBgBEBIQBIBKgxBGQgfAzBFCBQBECChbAiQgsAQgqgSQhYgkheAMQgjAFgUAhQg2BQhZAAIgPgBg");
	this.shape_89.setTransform(-5.2,-5.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlgipQAXhlBvAXQBKAMAwgvQARgSAOgYQAphJBFgNQASgEAVAAQARAAAPADQAuAIAQAiQAIAPABAWQADAcAKAbQAUA6AsAxQBEBLgvBGQgZA+BCB0QAsBPgPApQgKAagfANQgnASgpgNQgYgJgagEQg/gOhDAIQgRABgOAJQgPAIgKAQQgyBChGAOQgRADgSAAQhRgBABhJQAAgNAAgOQAChLAIhMQACgNAAgNQABhYhFg2QgGgFgGgGQhEg8AUhZg");
	this.shape_90.setTransform(-5.1,-5.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.4)").s().p("AjtFVIAAgbQAChLAIhMQACgNAAgNQABhYhFg2IgMgLQhEg8AUhZIABgEQAXhlBvAXQBKAMAwgvQARgSAOgYQAphJBFgNQASgEAVAAQARAAAPADQAuAIAQAiQAIAPABAWQADAcAKAbQAUA6AsAxQBEBLgvBGQgZA+BCB0QAsBPgPApQgKAagfANQgnASgpgNQgYgJgagEQg/gOhDAIQgRABgOAJQgPAIgKAQQgyBChGAOQgRADgSAAQhRgBABhJg");
	this.shape_91.setTransform(-5.1,-5.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlgiaQAbhkBmAQQBFAGAwgvQARgSAOgYQAqhGBGgMQASgDAUgBQASAAAOADQAuAHAQAbQAHAMADATQAEAZALAbQAXA2AqAzQBABLgsBHQgZBCBEBtQAuBKgKAqQgIAagcAOQgkATgmgJQgYgGgYgCQhAgNhDAHQgRACgOAHQgPAIgMAPQgyA9hDATQgQAEgRABQhOAEgEhDQgBgNgBgNQgFhGAFhMQABgNAAgNQgBhXhGg2QgGgFgHgEQhGg6AXhZg");
	this.shape_92.setTransform(-4.9,-4.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.4)").s().p("AjdFZIgCgaQgFhGAFhMIABgaQgBhXhGg2IgNgJQhGg6AXhZIABgEQAbhkBmAQQBFAGAwgvQARgSAOgYQAqhGBGgMQASgDAUgBQASAAAOADQAuAHAQAbQAHAMADATQAEAZALAbQAXA2AqAzQBABLgsBHQgZBCBEBtQAuBKgKAqQgIAagcAOQgkATgmgJQgYgGgYgCQhAgNhDAHQgRACgOAHQgPAIgMAPQgyA9hDATQgQAEgRABIgJAAQhGAAgDg/g");
	this.shape_93.setTransform(-4.9,-4.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlgiLQAehkBeAKQBAgBAvgwQARgRAPgXQArhEBGgLQATgDAUAAQARgBAPACQAsAHAQATQAHAJADARQAGAWANAaQAaA0AoA0QA9BKgrBJQgYBGBGBmQAwBGgGAqQgFAZgZAQQggAUglgFQgWgDgYAAQhAgLhDAFQgRACgOAHQgQAHgMAOQg0A5hAAXQgPAFgQACQhLAJgJg+QgCgMgCgMQgLhBAChMQAAgNgBgNQgDhXhGgzQgHgFgGgFQhJg2Abhag");
	this.shape_94.setTransform(-4.7,-4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.4)").s().p("AjOFbIgEgYQgLhBAChMQAAgNgBgNQgDhXhGgzIgNgKQhJg2AbhaIAAgDQAehkBeAKQBAgBAvgwQARgRAPgXQArhEBGgLQATgDAUAAQARgBAPACQAsAHAQATQAHAJADARQAGAWANAaQAaA0AoA0QA9BKgrBJQgYBGBGBmQAwBGgGAqQgFAZgZAQQggAUglgFQgWgDgYAAQhAgLhDAFQgRACgOAHQgQAHgMAOQg0A5hAAXQgPAFgQACIgRABQg7AAgIg2g");
	this.shape_95.setTransform(-4.7,-4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(1,1,1).p("Algh9QAhhjBVADQA7gGAvgwQARgSAPgWQAshCBHgJQATgDAUgBQARAAAOABQAsAGAQAMQAGAHAFAOQAGATAQAZQAcAyAnA1QA4BKgoBKQgYBJBJBgQAxBCgBAqQgDAZgWAQQgcAWgkgBQgUgBgYACQhAgKhCAFQgRABgPAGQgPAHgNANQg3A0g8AdQgOAGgQADQhHANgOg4QgDgLgDgLQgSg9gBhLQgBgNAAgNQgGhXhHgxQgHgFgGgFQhMgzAehbg");
	this.shape_96.setTransform(-4.5,-3.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.4)").s().p("Ai/FeIgGgWQgSg9gBhLIgBgaQgGhXhHgxIgNgKQhMgzAehbIABgDQAhhjBVADQA7gGAvgwQARgSAPgWQAshCBHgJQATgDAUgBQARAAAOABQAsAGAQAMQAGAHAFAOQAGATAQAZQAcAyAnA1QA4BKgoBKQgYBJBJBgQAxBCgBAqQgDAZgWAQQgcAWgkgBQgUgBgYACQhAgKhCAFQgRABgPAGQgPAHgNANQg3A0g8AdQgOAGgQADQgNACgMAAQgxAAgLgtg");
	this.shape_97.setTransform(-4.5,-3.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlghvQAkhjBNgDQA2gNAugwQARgSAPgVQAuhABIgIQASgDAUAAQARgBAPABQAqAFAQAFQAGAEAFAMQAIAPASAYQAfAwAkA2QA2BKgmBMQgYBMBLBaQAzA9ADAqQgBAZgTARQgYAXghAEQgUABgXAFQhAgJhCAEQgRABgPAFQgQAGgNAMQg5Awg5AiQgNAHgPAEQhEARgTgzQgEgJgEgLQgYg4gFhKQgBgNgBgNQgIhXhHgvQgHgFgHgEQhOgxAhhbg");
	this.shape_98.setTransform(-4.3,-2.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.4)").s().p("AiwFfIgIgUQgYg4gFhKIgCgaQgIhXhHgvIgOgJQhOgxAhhbIABgDQAkhjBNgDQA2gNAugwQARgSAPgVQAuhABIgIQASgDAUAAQARgBAPABQAqAFAQAFQAGAEAFAMQAIAPASAYIBDBmQA2BKgmBMQgYBMBLBaQAzA9ADAqQgBAZgTARQgYAXghAEQgUABgXAFQhAgJhCAEQgRABgPAFQgQAGgNAMQg5Awg5AiQgNAHgPAEQgRAEgPAAQgpAAgOgmg");
	this.shape_99.setTransform(-4.3,-2.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhhhQAnhiBFgKQAxgTAugwQARgTAQgUQAug+BJgGQASgDAUgBQARAAAPABQApADAPgBQAHAAAFAKQAJAMAUAXQAiAtAjA4QAyBJgkBNQgYBSBNBSQA2A4AGArQACAYgQASQgUAZggAIQgSADgWAHQhAgHhDADQgRABgPAEQgQAFgNALQg9Asg0AmQgMAJgPAFQhAAWgZguQgEgJgGgJQgdg0gJhJQgBgNgCgNQgLhWhHguQgHgEgHgFQhRgvAlhbg");
	this.shape_100.setTransform(-4,-2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.4)").s().p("AiiFhIgKgSQgdg0gJhJIgDgaQgLhWhHguIgOgJQhRgvAlhbIAAgCQAnhiBFgKQAxgTAugwQARgTAQgUQAug+BJgGQASgDAUgBQARAAAPABQApADAPgBQAHAAAFAKIAdAjQAiAtAjA4QAyBJgkBNQgYBSBNBSQA2A4AGArQACAYgQASQgUAZggAIQgSADgWAHQhAgHhDADQgRABgPAEQgQAFgNALIhxBSQgMAJgPAFQgUAHgRAAQgjAAgRgfg");
	this.shape_101.setTransform(-4,-2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlhhQQAqhiA9gQQArgaAtgwQARgSARgUQAvg8BMgFQAQgCAUgBQARgBAOABQAoACAQgIQAGgDAHAIQAKAIAVAXQAlArAhA4QAuBJghBPQgYBVBQBMQA3A0ALAqQAEAYgNATQgQAageANQgRAGgWAJQhAgGhCACQgRAAgPAEQgRAEgNAKQhAAogwArQgMAJgNAGQg9AbgegoQgGgIgGgJQgkgvgMhJQgCgMgCgNQgNhWhIgsQgHgEgHgEQhUgvAohZg");
	this.shape_102.setTransform(-3.8,-1.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.4)").s().p("AiTFmIgMgRQgkgvgMhJIgEgZQgNhWhIgsIgOgIQhUgvAohZIABgCQAqhiA9gQQArgaAtgwIAigmQAvg8BMgFQAQgCAUgBIAfAAQAoACAQgIQAGgDAHAIQAKAIAVAXQAlArAhA4QAuBJghBPQgYBVBQBMQA3A0ALAqQAEAYgNATQgQAageANIgnAPQhAgGhCACQgRAAgPAEQgRAEgNAKQhAAogwArQgMAJgNAGQgZALgTAAQgdAAgSgYg");
	this.shape_103.setTransform(-3.8,-1.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alig+QAthhA0gXQAnggAsgwQARgTARgTQAxg5BLgDQASgDASgBQARgBAPAAQAnACAPgQQAHgFAHAFQALAGAYAVQAnAoAfA7QArBIggBQQgWBZBRBFQA5AwAQAqQAHAYgLAUQgNAcgbAQQgRAIgVALQhAgEhBABQgRABgQADQgRADgOAJQhBAjgtAwQgLALgNAHQg5AfgjgjQgHgHgHgHQgrgrgPhIQgCgNgDgNQgPhWhJgpQgHgEgIgEQhWgsAshag");
	this.shape_104.setTransform(-3.4,-1.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.4)").s().p("AiFFsIgOgOQgrgrgPhIIgFgaQgPhWhJgpIgPgIQhWgsAshaIABgCQAthhA0gXQAnggAsgwIAigmQAxg5BLgDIAkgEIAggBQAnACAPgQQAHgFAHAFQALAGAYAVQAnAoAfA7QArBIggBQQgWBZBRBFQA5AwAQAqQAHAYgLAUQgNAcgbAQIgmATQhAgEhBABQgRABgQADQgRADgOAJQhBAjgtAwQgLALgNAHQgaAOgWAAQgZAAgTgSg");
	this.shape_105.setTransform(-3.4,-1.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlkgsQAwhgAtgeQAhgmAsgwQARgTARgTQAyg3BMgBQAUgDAQgBQARgBAPAAQAmAAAPgWQAGgIAIADQANACAZAUQArAmAdA8QAnBIgeBRQgWBcBTA/QA8AsAUAqQAJAYgIAUQgJAegaAVQgPAKgUANQhAgDhCABQgRAAgQACQgRADgOAHQhEAfgqA2QgKALgLAIQg2AkgogeQgIgFgJgHQgwgngThHQgDgMgDgNQgShWhJgnQgHgEgIgEQhZgqAwhag");
	this.shape_106.setTransform(-3.1,-1.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.4)").s().p("Ah3FyIgRgMQgwgngThHIgGgZQgRhWhKgnIgPgIQhZgqAwhaIAAgCQAwhgAtgeQAhgmAsgwIAigmQAyg3BMgBIAkgEIAggBQAmAAAPgWQAGgIAIADQANACAZAUQArAmAdA8QAnBIgeBRQgWBcBTA/QA8AsAUAqQAJAYgIAUQgIAegbAVIgjAXQhAgDhCABQgRAAgQACQgRADgOAHQhEAfgqA2QgKALgLAIQgdAUgaAAQgVAAgSgOg");
	this.shape_107.setTransform(-3.1,-1.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllgZQAzhfAkglQAcgsAsgwQARgTARgSQAzg1BNAAQAUgCAQgCQARgBAPAAQAkgBAPgdQAHgLAIAAQAOgBAbATQAuAkAbA9QAkBHgcBTQgWBgBWA5QA9AmAYArQAMAYgFAVQgFAfgYAZQgOANgUAPQhAgChBAAQgRAAgQACQgSABgOAHQhGAbgpA6QgIAMgKAJQgyApgugZQgIgEgKgGQg3gigWhHQgDgMgEgNQgUhVhKgmQgHgDgIgEQhcgoAzhag");
	this.shape_108.setTransform(-2.7,-1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.4)").s().p("AhqF5IgSgKQg3gigWhHIgHgZQgUhVhKgmIgPgHQhcgoAzhaIABgCQAzhfAkglQAcgsAsgwIAiglQAzg1BNAAIAkgEIAggBQAkgBAPgdQAHgLAIAAQAOgBAbATQAuAkAbA9QAkBHgcBTQgWBgBWA5QA9AmAYArQAMAYgFAVQgFAfgYAZQgOANgUAPQhAgChBAAQgRAAgQACQgSABgOAHQhGAbgpA6QgIAMgKAJQgfAagdAAQgSAAgSgKg");
	this.shape_109.setTransform(-2.7,-1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlogGQA2heAcgsQAXgzArgwQARgTASgRQA1gzBNABQAUgCASgBQAPgBAPgBQAjgCAPgkQAGgOAJgCQAQgFAdATQAwAhAZA+QAhBHgaBVQgVBjBXAyQBAAjAcArQAOAXgCAWQgBAggWAeQgNAPgTASQhAgBhCgBQgRAAgQABQgSABgOAFQhJAXglA+QgIAOgKAKQgtAugzgUQgKgEgLgFQg8gdgahGQgEgMgEgNQgXhVhKgjQgHgEgIgDQhfgmA3hbg");
	this.shape_110.setTransform(-2.3,-0.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.4)").s().p("AhdGAIgVgJQg8gdgahGIgIgZQgXhVhKgjIgPgHQhfgmA3hbIAAgBQA2heAcgsQAXgzArgwQARgTASgRQA1gzBNABIAmgDIAegCQAjgCAPgkQAGgOAJgCQAQgFAdATQAwAhAZA+QAhBHgaBVQgVBjBXAyQBAAjAcArQAOAXgCAWQgBAggWAeQgNAPgTASIiCgCIghABQgSABgOAFQhJAXglA+QgIAOgKAKQgeAggjAAQgPAAgQgGg");
	this.shape_111.setTransform(-2.3,-0.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlrALQA5hcAUgyQASg5ArgwQARgTASgRQA1gwBPACQATgBASgCQARgBANgCQAigDAPgrQAGgQAKgFQAQgIAgASQAzAfAXA/QAdBHgXBWQgWBnBaAsQBCAeAgArQAQAXABAWQADAigUAiQgMASgSAUQhAAAhCgCQgRAAgQAAQgSAAgPAEQhLATgiBEQgHAOgKALQgpAyg4gOQgKgCgNgFQhCgZgdhFQgFgMgEgNQgahVhKghQgIgDgIgDQhhgjA6heg");
	this.shape_112.setTransform(-1.8,-0.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.4)").s().p("AhRGHIgXgHQhCgZgdhFQgFgMgEgNQgahVhKghIgQgGQhhgjA6heIAAgBQA5hcAUgyQASg5ArgwQARgTASgRQA1gwBPACIAlgDIAegDQAigDAPgrQAGgQAKgFQAQgIAgASQAzAfAXA/QAdBHgXBWQgWBnBaAsQBCAeAgArQAQAXABAWQADAigUAiQgMASgSAUQhAAAhCgCIghAAQgSAAgPAEQhLATgiBEQgHAOgKALQgfAngqAAQgLAAgNgDg");
	this.shape_113.setTransform(-1.8,-0.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(1,1,1).p("AluAeQA8hbAMg5QAMg/AqgxQARgTATgQQA3guBPAEQATgCASgBQARgCAPgCQAfgDAPgzQAFgTALgHQASgLAhARQA2AdAWBAQAZBGgVBYQgVBqBcAmQBDAZAlArQASAXAEAYQAHAjgTAmQgKAUgSAWQhAAChBgDQgRgBgRAAQgSgBgPAEQhNAOgfBIQgHAQgIAMQgmA3g9gJQgMgCgNgDQhJgUgghFQgGgMgEgNQgchVhLgfQgIgDgIgCQhkghA+heg");
	this.shape_114.setTransform(-1.2,-0.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.4)").s().p("AhFGOQgMgCgNgDQhJgUgghFQgGgMgEgNQgchVhLgfIgQgFQhkghA+heIAAgBQA8hbAMg5QAMg/AqgxQARgTATgQQA3guBPAEIAlgDIAggEQAfgDAPgzQAFgTALgHQASgLAhARQA2AdAWBAQAZBGgVBYQgVBqBcAmQBDAZAlArQASAXAEAYQAHAjgTAmQgKAUgSAWQhAAChBgDIgigBQgSgBgPAEQhNAOgfBIQgHAQgIAMQggAvgyAAIgRgBg");
	this.shape_115.setTransform(-1.2,-0.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlyAxQA/hbADg/QAIhGAqgwQARgUATgPQA3gsBQAFQAUgBARgCQARgBAPgCQAegFAPg5QAFgXAMgJQATgOAjAQQA5AaATBCQAWBGgTBZQgVBtBfAhQBFATApAsQAVAWAHAZQAKAlgQAqQgKAWgRAYQhAAEhBgEQgRgBgRgBQgSgBgQACQhPAJgcBOQgFARgIANQgkA7hBgDQgMgBgPgDQhPgPgkhEQgGgMgEgNQgfhUhLgdQgIgEgJgCQhngfBCheg");
	this.shape_116.setTransform(-0.6,-0.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.4)").s().p("Ag6GVQgMgBgPgDQhPgPgkhEQgGgMgEgNQgfhUhLgdQgIgEgJgCQhngfBCheIAAAAQA/hbADg/QAIhGAqgwQARgUATgPQA3gsBQAFIAlgDIAggDQAegFAPg5QAFgXAMgJQATgOAjAQQA5AaATBCQAWBGgTBZQgVBtBfAhQBFATApAsQAVAWAHAZQAKAlgQAqQgKAWgRAYQhAAEhBgEIgigCQgSgBgQACQhPAJgcBOQgFARgIANQgiA4g8AAIgHAAg");
	this.shape_117.setTransform(-0.6,-0.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQlsQgOBAgdAGQggAGglABQhrgJhDBPQgpAwgCBIQAHBIhFBcQhFBfBqAcQBZAYAlBcQAkBaBkANQBvAPAghvQAdhjBvAMQBSAKBSgHQBEhuhMhJQgugsg+gMQhqgZAUhuQAShfgRhFQgShGg9gYQg8gZgPBAg");

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.4)").s().p("AhMGZQhkgNgkhaQglhchZgYQhqgcBFhfQBFhcgHhIQAChIApgwQBDhPBrAJQAlgBAggGQAdgGAOhAQAPhAA8AZQA9AYASBGQARBFgSBfQgUBuBqAZQA+AMAuAsQBMBJhEBuQhSAHhSgKQhvgMgdBjQgcBihaAAQgMAAgNgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-42.1,82.7,84.3);


(lib.codeamoebaclassesShip = function() {
	this.initialize();

	// body
	this.body = new lib.shipbody();
	this.body.setTransform(0,-0.5,0.997,0.999);

	// flames
	this.flames = new lib.Flames();
	this.flames.setTransform(0.1,18.7,1.49,1.502);

	// shadow
	this.shipShadow = new lib.Shadow();
	this.shipShadow.setTransform(1.9,2.5,1,0.998);

	this.addChild(this.shipShadow,this.flames,this.body);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-13.3,17.4,42.3);


(lib.codeamoebaclassesInteractiveLayer = function() {
	this.initialize();

	// ship
	this.ship = new lib.codeamoebaclassesShip();
	this.ship.setTransform(302.5,295);

	this.addChild(this.ship);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(294.6,281.7,17.3,42.3);


// stage content:
(lib.flash_generated = function() {
	this.initialize();

	// UI
	this.start_btn = new lib.StartButton();
	this.start_btn.setTransform(302.5,298.5,1.5,1.502);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2);

	this.text = new cjs.Text("SCORE", "bold 16px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 100;
	this.text.setTransform(63.9,7);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.text_1 = new cjs.Text("LIVES", "bold 16px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(570.9,7);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.lives_txt = new cjs.Text("0", "bold 16px 'Arial'", "#FFFFFF");
	this.lives_txt.name = "lives_txt";
	this.lives_txt.lineHeight = 18;
	this.lives_txt.lineWidth = 19;
	this.lives_txt.setTransform(578.3,6.9);
	this.lives_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.score_txt = new cjs.Text("0", "bold 16px 'Arial'", "#FFFFFF");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 18;
	this.score_txt.lineWidth = 100;
	this.score_txt.setTransform(71.2,6.9);
	this.score_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	// Circle
	this.dropShadow = new lib.dropshadow();
	this.dropShadow.setTransform(383.5,396.9);

	this.maskedArea = new lib.maskedarea();
	this.maskedArea.setTransform(302,302);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvLAvLMAAAheWMBeWAAAMAAABeWgA/Z/SQgqAqgpArQjiDzieEQQjlGJhWHFQgIAngGAoQgnDtAAD8QAADjAgDXQAJBBAMA+QALA4ANA2QA6D9BqDrQAjBNAoBMQCFD7C9DkQBcBuBpBpQNDNDSaABQSdgBNDtDQNDtCAAycQAAyctDtCQtDtDydAAQyaAAtDNDg");
	this.shape.setTransform(302,302);

	this.circle = new lib.circle();
	this.circle.setTransform(303.5,303.8);
	this.circle.alpha = 0.57;

	// Players
	this.players = new lib.codeamoebaclassesInteractiveLayer();

	// Background
	this.background = new lib.background();
	this.background.setTransform(302,302);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EgvLAvLMAAAheWMBeWAAAMAAABeWg");
	this.shape_1.setTransform(302,302);

	this.addChild(this.shape_1,this.background,this.players,this.circle,this.shape,this.maskedArea,this.dropShadow,this.score_txt,this.lives_txt,this.text_1,this.text,this.start_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(264.4,301.4,670.2,633.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
