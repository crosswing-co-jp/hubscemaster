import { JSFrame } from "jsframe.js";

export class triggeredFunctions {
  static innerFrameVoiceClick(numberStr) {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/nndb.php?config=" + numberStr;
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static popupVoiceClick(numberStr) {
    const LINK = "https://voice-doujin.space/vr/inner/nndb.php?config=" + numberStr; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static innerFrameNumClick(numberStr) {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/nn.php?config=inner" + numberStr;
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame01Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/01.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame02Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/innner/02.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame03Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/03.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame04Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/04.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame05Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/05.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame06Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/06.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame07Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/07.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static innerFrame08Click() {
    const jsFrame = new JSFrame();
    const windowtitle = "VOiCE VR";
    //アンカー
    const align = "CENTER_CENTER";
    //iframe内に表示するURL
    const innerurl = "https://voice-doujin.space/vr/inner/08.php";
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2.2;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 320) {
      widthx = x * 0.9;
      heighty = y * 1.5;
      posx = x / 2;
      posy = y;
    } else {
      widthx = x * 1.8;
      heighty = y * 1.5;
      posx = x;
      posy = y;
    }

    const frame = jsFrame.create({
      title: windowtitle,
      width: widthx,
      height: heighty,
      movable: true, //マウスで移動可能
      resizable: true, //マウスでリサイズ可能
      url: innerurl,
      urlLoaded: _frame => {}
    });

    frame.setPosition(posx, posy, align);
    frame.show();
  }

  static popup01Click() {
    const LINK = "https://voice-doujin.space/vr/stage/01.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup02Click() {
    const LINK = "https://voice-doujin.space/vr/stage/02.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup03Click() {
    const LINK = "https://voice-doujin.space/vr/stage/03.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup04Click() {
    const LINK = "https://voice-doujin.space/vr/stage/04.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup05Click() {
    const LINK = "https://voice-doujin.space/vr/stage/05.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup06Click() {
    const LINK = "https://voice-doujin.space/vr/stage/06.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup07Click() {
    const LINK = "https://voice-doujin.space/vr/stage/07.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static popup08Click() {
    const LINK = "https://voice-doujin.space/vr/stage/08.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }

  static normal01Click() {
    const LINK = "https://voice-doujin.space/vr/normal/01.php"; // 別タブ遷移したいURL

    const x = window.innerWidth;
    const y = window.innerHeight;
    let posx = 0;
    let posy = 0;
    let widthx = 0;
    let heighty = 0;

    if (x >= 640) {
      widthx = x * 0.5;
      heighty = y * 0.9;
      posx = x / 8;
      posy = y / 8;
    } else {
      widthx = x * 0.9;
      heighty = y * 0.9;
      posx = x / 10;
      posy = y / 10;
    }

    const wOption =
      "top=" +
      posy +
      ", left=" +
      posx +
      ", height=" +
      heighty +
      ", width=" +
      widthx +
      ", menubar=no" +
      ", toolbar=no" +
      ", location=no" +
      ", status=no" +
      ", resizable=yes" +
      ", scrollbars=yes" +
      ", directories=no";

    // 画面を開く
    const winObj = window.open(LINK, "_blank", wOption);
    winObj.focus();

    try {
      winObj.resizeTo(widthx, heighty);
      winObj.moveTo(posx, posy);
    } catch (e) {
      console.log(e);
    }
  }
}
