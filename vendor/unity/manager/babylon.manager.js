var BABYLON;
! function(e) {
    var n = function() {
        function n() {}
        return Object.defineProperty(n, "Version", {
            get: function() {
                return "5.0.0 - A63.1X"
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n, "Copyright", {
            get: function() {
                return "All rights reserved (c) 2020 Mackey Kinard"
            },
            enumerable: !1,
            configurable: !0
        }), n.IsFrameWindow = function() {
            return window !== window.parent
        }, n.HasAudioContext = function() {
            return null != e.Engine.audioEngine && null != e.Engine.audioEngine.audioContext && null != e.Engine.audioEngine.audioContext.state && "running" === e.Engine.audioEngine.audioContext.state
        }, n.PostWindowMessage = function(e, n, t) {
            void 0 === n && (n = "*"), void 0 === t && (t = !1), t === !0 ? window.postMessage(e, n) : window.top ? window.top.postMessage(e, n) : console.warn("No Valid Top Window")
        }, n.LoadSceneFile = function(n, t) {
            if (void 0 === t && (t = null), e.SceneManager.IsFrameWindow()) null != t && "" !== t ? e.SceneManager.PostWindowMessage({
                source: "babylon",
                command: "loadscene",
                param1: n,
                param2: t
            }, "*") : e.SceneManager.PostWindowMessage({
                source: "babylon",
                command: "loadscene",
                param1: n,
                param2: null
            }, "*");
            else {
                var a = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname + "?scene=" + n;
                null != t && "" !== t && (a += t), window.location.replace(a)
            }
        }, n.EnableSceneParsing = function(n) {
            e.SceneManager.SceneParsingEnabled = n
        }, n.IsSceneParsingEnabled = function() {
            return e.SceneManager.SceneParsingEnabled
        }, n.GetFullscreenUI = function(n) {
            if (null == e.SceneManager.AdvDynamicTexture) {
                var t = "Default-Screen-UI",
                    a = !0,
                    r = e.Texture.BILINEAR_SAMPLINGMODE;
                e.SceneManager.AdvDynamicTexture = e.GUI.AdvancedDynamicTexture.CreateFullscreenUI(t, a, n, r)
            }
            return e.SceneManager.AdvDynamicTexture
        }, n.GetAmbientSkybox = function(e) {
            return e.getMeshById("Ambient Skybox")
        }, n.GetIntensityFactor = function() {
            return null != window.intensityFactor ? window.intensityFactor : 2
        }, n.GetRenderQuality = function() {
            var n = e.RenderQuality.High,
                t = e.Utilities.GetLocalStorageItem("renderQuality");
            return null != t && "" !== t && (n = parseInt(t)), n
        }, n.SetRenderQuality = function(n) {
            var t = n;
            e.Utilities.SetLocalStorageItem("renderQuality", t.toString().toLowerCase())
        }, n.GetVirtualRealityEnabled = function() {
            var n = e.Utilities.GetLocalStorageItem("virtualReality");
            return null != n && "true" === n
        }, n.SetVirtualRealityEnabled = function(n) {
            e.Utilities.SetLocalStorageItem("virtualReality", n.toString().toLowerCase())
        }, n.SetWindowState = function(e, n) {
            null == window.state && (window.state = {}), window.state[e] = n
        }, n.GetWindowState = function(e) {
            var n = null;
            return null != window.state && null != window.state[e] && (n = window.state[e]), null != n ? n : null
        }, n.IsDebugMode = function() {
            return null != window.debugModeEnabled && window.debugModeEnabled === !0
        }, n.ConsoleLog = function() {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            e.SceneManager.IsDebugMode() && console.log.apply(console, n)
        }, n.ConsoleInfo = function() {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            e.SceneManager.IsDebugMode() && console.info.apply(console, n)
        }, n.ConsoleWarn = function() {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            e.SceneManager.IsDebugMode() && console.warn.apply(console, n)
        }, n.ConsoleError = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            console.error.apply(console, e)
        }, n.LogMessage = function(n) {
            e.SceneManager.IsDebugMode() && e.Tools.Log(n)
        }, n.LogWarning = function(n) {
            e.SceneManager.IsDebugMode() && e.Tools.Warn(n)
        }, n.LogError = function(n) {
            e.Tools.Error(n)
        }, n.IsWindows = function() {
            return "undefined" != typeof Windows && "undefined" != typeof Windows.UI && "undefined" != typeof Windows.System && "undefined" != typeof Windows.Foundation
        }, n.IsCordova = function() {
            return null != window.cordova
        }, n.IsWebAssembly = function() {
            return window.WebAssembly
        }, n.IsOculusBrowser = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/OculusBrowser/i) && (e = !0), e
        }, n.IsSamsungBrowser = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/SamsungBrowser/i) && (e = !0), e
        }, n.IsWindowsPhone = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/Windows Phone/i) && (e = !0), e
        }, n.IsBlackBerry = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/BlackBerry/i) && (e = !0), e
        }, n.IsOperaMini = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/Opera Mini/i) && (e = !0), e
        }, n.IsAndroid = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/Android/i) && (e = !0), e
        }, n.IsWebOS = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/webOS/i) && (e = !0), e
        }, n.IsIOS = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/iPhone|iPad|iPod/i) && (e = !0), e
        }, n.IsIPHONE = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/iPhone/i) && (e = !0), e
        }, n.IsIPAD = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/iPad/i) && (e = !0), e
        }, n.IsIPOD = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/iPod/i) && (e = !0), e
        }, n.IsIE11 = function() {
            return void 0 !== navigator.maxTouchPoints
        }, n.IsMobile = function() {
            var e = !1;
            if (null != navigator && null != navigator.userAgent) {
                var n = navigator.userAgent;
                (n.match(/Android/i) || n.match(/webOS/i) || n.match(/iPhone|iPad|iPod/i) || n.match(/BlackBerry/i) || n.match(/Opera Mini/i) || n.match(/Windows Phone/i)) && (e = !0)
            }
            return e
        }, n.IsPlaystation = function() {
            var e = !1;
            return null != navigator && null != navigator.userAgent && navigator.userAgent.match(/Playstation/i) && (e = !0), e
        }, n.IsXboxConsole = function() {
            var n = !1;
            if (e.SceneManager.IsWindows() && "undefined" != typeof Windows.System.Profile && "undefined" != typeof Windows.System.Profile.AnalyticsInfo && "undefined" != typeof Windows.System.Profile.AnalyticsInfo.versionInfo && "undefined" != typeof Windows.System.Profile.AnalyticsInfo.versionInfo.deviceFamily) {
                var t = Windows.System.Profile.AnalyticsInfo.versionInfo.deviceFamily;
                t.match(/Xbox/i) && (n = !0)
            }
            return n
        }, n.IsXboxLive = function() {
            return e.SceneManager.IsWindows() && "undefined" != typeof Microsoft && "undefined" != typeof Microsoft.Xbox && "undefined" != typeof Microsoft.Xbox.Services
        }, n.GetTime = function() {
            return .001 * TimerPlugin.getTimeMilliseconds()
        }, n.GetGameTime = function() {
            return .001 * (TimerPlugin.getTimeMilliseconds() - TimerPlugin.gameTimeMilliseconds)
        }, n.GetDeltaSeconds = function(n, t) {
            void 0 === t && (t = !1);
            var a = n || e.SceneManager.GetLastCreatedScene(),
                r = Math.max(e.Scene.MinDeltaTime, Math.min(a.getEngine().getDeltaTime(), e.Scene.MaxDeltaTime)),
                i = .001 * r;
            return t === !0 && (i *= a.getAnimationRatio()), i
        }, n.GetAnimationRatio = function(n) {
            var t = n || e.SceneManager.GetLastCreatedScene();
            return t.getAnimationRatio()
        }, n.SetTimeout = function(n, t) {
            var a = null;
            return a = TimerPlugin.requestTimeout(function() {
                null != a && e.SceneManager.ClearTimeout(a), null != t && t()
            }, n)
        }, n.ClearTimeout = function(e) {
            TimerPlugin.clearRequestTimeout(e)
        }, n.SetInterval = function(e, n) {
            return TimerPlugin.requestInterval(n, e)
        }, n.ClearInterval = function(e) {
            TimerPlugin.clearRequestInterval(e)
        }, n.RunOnce = function(e, n, t) {
            e.executeOnceBeforeRender(n, t)
        }, n.PopupDebug = function(e) {
            e.debugLayer && (e.debugLayer.hide(), e.debugLayer.show({
                enablePopup: !0,
                globalRoot: null
            }))
        }, n.ToggleDebug = function(n, t, a) {
            if (void 0 === t && (t = !1), void 0 === a && (a = null), n.debugLayer) {
                var r = window;
                e.SceneManager.debugLayerVisible === !0 ? (e.SceneManager.debugLayerVisible = !1, r.METER && r.METER.show && r.METER.show(), n.debugLayer.hide()) : (e.SceneManager.debugLayerVisible = !0, r.METER && r.METER.hide && r.METER.hide(), n.debugLayer.show({
                    embedMode: t,
                    globalRoot: a
                }))
            }
        }, n.DisposeScene = function(n, t) {
            void 0 === t && (t = new e.Color4(0, 0, 0, 1));
            var a = n.getEngine();
            n.dispose(), a.clear(t, !0, !0, !0)
        }, n.SafeDestroy = function(n, t, a) {
            void 0 === t && (t = 5), void 0 === a && (a = !1), t > 0 ? (a === !0 && n.setEnabled(!1), e.SceneManager.SetTimeout(t, function() {
                n.dispose(!1, !1)
            })) : n.dispose(!1, !1)
        }, n.AlertMessage = function(n, t) {
            void 0 === t && (t = "Babylon.js");
            var a = null;
            return e.SceneManager.IsWindows() ? a = new Windows.UI.Popups.MessageDialog(n, t).showAsync() : window.alert(n), a
        }, n.GetQueryStringParam = function(e, n) {
            n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
            var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                a = t.exec(n);
            return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
        }, n.GetWebGLVersionString = function(n) {
            var t = "WebGL - Unknown",
                a = n || e.SceneManager.GetLastCreatedScene();
            if (null != a) {
                var r = a.getEngine();
                if (null != r) {
                    var i = r.getGlInfo();
                    null != i && (t = i.version + " - " + i.renderer)
                }
            }
            return t
        }, n.GetWebGLVersionNumber = function(n) {
            var t = 0,
                a = n || e.SceneManager.GetLastCreatedScene();
            if (null != a) {
                var r = a.getEngine();
                null != r && (t = r.webGLVersion)
            }
            return t
        }, n.GetRootUrl = function(e) {
            return null != e._rootUrl && "" !== e._rootUrl ? e._rootUrl : "/"
        }, n.SetRootUrl = function(e, n) {
            e._rootUrl = n
        }, n.GetSceneFile = function(e) {
            return null != e._fileName && "" !== e._fileName ? e._fileName : null
        }, n.SetSceneFile = function(e, n) {
            e._fileName = n
        }, n.GetRightHanded = function(e) {
            return null != e._righty && e._righty === !0
        }, n.SetRightHanded = function(e, n) {
            e._righty = n
        }, n.SetWindowsLaunchMode = function(n) {
            void 0 === n && (n = 1), e.SceneManager.IsWindows() && "undefined" != typeof Windows.UI.ViewManagement && "undefined" != typeof Windows.UI.ViewManagement.ApplicationView && (Windows.UI.ViewManagement.ApplicationView.preferredLaunchWindowingMode = n)
        }, n.ShowPageErrorMessage = function(e, n, t) {
            void 0 === n && (n = "Error"), void 0 === t && (t = 0), window.showErrorMessage && window.showErrorMessage(e, n, t)
        }, n.QuitWindowsApplication = function() {
            e.SceneManager.IsWindows() && window.close()
        }, n.ShowSceneLoader = function() {
            window.showSceneLoader && window.showSceneLoader()
        }, n.HideSceneLoader = function() {
            window.hideSceneLoader && window.hideSceneLoader()
        }, n.UpdateLoaderStatus = function(e, n, t) {
            window.updateStatus && window.updateStatus(e, n, t)
        }, n.UpdateLoaderDetails = function(e, n) {
            window.updateDetails && window.updateDetails(e, n)
        }, n.UpdateLoaderProgress = function(e, n) {
            window.updateProgress && window.updateProgress(e, n)
        }, n.GetEngineInstances = function() {
            return e.EngineStore.Instances
        }, n.GetLastCreatedEngine = function() {
            return e.EngineStore.LastCreatedEngine
        }, n.GetLastCreatedScene = function() {
            return e.EngineStore.LastCreatedScene
        }, n.GetAssetContainer = function(e, n) {
            return null == e || null == n || "" === n ? null : null != e.assetContainers ? e.assetContainers.get(n.toLowerCase()) : null
        }, n.SetAssetContainer = function(e, n, t) {
            null != e && null != n && "" !== n && null != t && (null == e.assetContainers && (e.assetContainers = new Map), e.assetContainers.set(n.toLowerCase(), t))
        }, n.ClearAssetContainers = function(e) {
            return null == e ? null : (null != e.assetContainers, void(e.assetContainers = new Map))
        }, n.GetMesh = function(e, n) {
            return null == e ? null : e.getNodeByName(n)
        }, n.GetMeshByID = function(e, n) {
            return null == e ? null : e.getNodeById(n)
        }, n.GetAbstractMesh = function(e, n) {
            return null == e ? null : e.getNodeByName(n)
        }, n.GetAbstractMeshByID = function(e, n) {
            return null == e ? null : e.getNodeById(n)
        }, n.GetTransformNode = function(e, n) {
            return null == e ? null : e.getNodeByName(n)
        }, n.GetTransformNodeByID = function(e, n) {
            return null == e ? null : e.getNodeById(n)
        }, n.GetTransformDetailMesh = function(n) {
            var t = null,
                a = n.name + ".Detail",
                r = n.getChildren(function(n) {
                    return n.name === a && n instanceof e.AbstractMesh
                }, !0);
            return null != r && r.length > 0 && (t = r[0]), t
        }, n.GetPrimitiveMeshes = function(e) {
            return e.getChildMeshes(!0, function(e) {
                return e.name.indexOf("_primitive") >= 0
            })
        }, n.GetTransformLayer = function(e) {
            return null != e.metadata && null != e.metadata.unity && null != e.metadata.unity.layer ? e.metadata.unity.layer : 0
        }, n.GetTransformTag = function(e) {
            return null != e.metadata && null != e.metadata.unity && null != e.metadata.unity.group && "" !== e.metadata.unity.group ? e.metadata.unity.group : "Untagged"
        }, n.HasTransformTags = function(n, t) {
            return e.Tags.MatchesQuery(n, t)
        }, n.TextureFloatSupported = function(e) {
            var n = !1,
                t = !1,
                a = e.getEngine(),
                r = a.getCaps();
            return r.textureHalfFloatRender && r.textureHalfFloatLinearFiltering ? n = !0 : r.textureFloatRender && r.textureFloatLinearFiltering && (t = !0), n || t
        }, n.RegisterClickAction = function(n, t, a) {
            var r = null;
            return null != t && (t.isPickable = !0, null == t.actionManager && (t.actionManager = new e.ActionManager(n)), r = t.actionManager.registerAction(new e.ExecuteCodeAction({
                trigger: e.ActionManager.OnPickTrigger
            }, a))), r
        }, n.UnregisterClickAction = function(e, n) {
            var t = !1;
            return null != e && null != n && (t = e.actionManager.unregisterAction(n)), t
        }, n.StartTweenAnimation = function(n, t, a, r, i, o, l, s, u, c, d) {
            void 0 === l && (l = 1), void 0 === s && (s = null), void 0 === u && (u = null), void 0 === c && (c = null), void 0 === d && (d = null);
            var m = l || 1,
                p = s || 30,
                g = u || e.Animation.ANIMATIONLOOPMODE_CONSTANT,
                h = e.Utilities.CreateTweenAnimation(t, r, i, o, p, g);
            null != c && h.setEasingFunction(c);
            var f = e.Utilities.GetLastKeyFrameIndex(h),
                S = g != e.Animation.ANIMATIONLOOPMODE_CONSTANT;
            return n.beginDirectAnimation(a, [h], 0, f, S, m, d)
        }, n.GetMaterialWithName = function(e, n) {
            var t = null;
            if (null != e.materials && e.materials.length > 0)
                for (var a = (e.materials.length, 0); a < e.materials.length; a++) {
                    var r = e.materials[a];
                    if (r.name.startsWith(n)) {
                        t = r;
                        break
                    }
                }
            return t
        }, n.GetAllMaterialsWithName = function(e, n) {
            var t = null;
            if (null != e.materials && e.materials.length > 0)
                for (var a = (e.materials.length, 0); a < e.materials.length; a++) {
                    var r = e.materials[a];
                    r.name.startsWith(n) && (null == t && (t = []), t.push(r))
                }
            return t
        }, n.InstantiatePrefab = function(n, t, a, r, i) {
            void 0 === r && (r = !1), void 0 === i && (i = !0);
            var o = e.Utilities.CloneAssetContainerItem(n, t, function(e) {
                return e
            }, r, i);
            if (null != o) {
                null != a && "" !== a && (o.name = a);
                var l = [];
                l.push(o);
                var s = o.getChildren(null, !1);
                null != s && s.length > 0 && s.forEach(function(e) {
                    l.push(e)
                }), l.forEach(function(n) {
                    n.id = e.Utilities.CreateGuid()
                });
                var u = [];
                e.Utilities.PostParseSceneComponents(n.scene, l, null, u), n.scene.onAfterRenderObservable.addOnce(function() {
                    if (null != u && u.length > 0)
                        for (var e = 0; e < u.length; e++) {
                            var n = u[e];
                            null != n && n.delayComponentInstance && n.delayComponentInstance(n)
                        }
                })
            }
            return o
        }, n.CloneTransformNode = function(n, t, a) {
            var r = e.Utilities.GetAssetContainerNode(n, t),
                i = r.clone(a, null, !0);
            return null != i && i.setEnabled(!0), i
        }, n.CloneAbstractMesh = function(n, t, a) {
            var r = e.Utilities.GetAssetContainerMesh(n, t),
                i = r.clone(a, null, !0);
            return null != i && i.setEnabled(!0), i
        }, n.CreateInstancedMesh = function(n, t, a) {
            var r = e.Utilities.GetAssetContainerMesh(n, t),
                i = r.createInstance(a);
            return null != i && i.setEnabled(!0), i
        }, n.RegisterScriptComponent = function(e, n, t) {
            void 0 === t && (t = !0), null != e && e.registerComponentInstance && e.registerComponentInstance(e, n, t)
        }, n.DestroyScriptComponent = function(e) {
            null != e && e.destroyComponentInstance && e.destroyComponentInstance(e)
        }, n.FindScriptComponent = function(e, n) {
            if (null == e) return null;
            var t = null;
            if (null != e.metadata && e.metadata.unity) {
                var a = e.metadata.unity;
                if (null != a.components && a.components.length > 0)
                    for (var r = 0; r < a.components.length; r++) {
                        var i = a.components[r];
                        if (null != i.instance && i.klass === n) {
                            t = i.instance;
                            break
                        }
                    }
            }
            return null != t ? t : null
        }, n.FindAllScriptComponents = function(e, n) {
            if (null == e) return null;
            var t = null;
            if (null != e.metadata && e.metadata.unity) {
                var a = e.metadata.unity;
                if (null != a.components && a.components.length > 0)
                    for (var r = 0; r < a.components.length; r++) {
                        var i = a.components[r];
                        null != i.instance && i.klass === n && (null == t && (t = []), t.push(i.instance))
                    }
            }
            return null != t ? t : null
        }, n.FindSceneMetadata = function(e) {
            return null == e ? null : null != e.metadata && e.metadata.unity ? e.metadata.unity : null
        }, n.FindSceneCameraRig = function(e) {
            return null == e ? null : null != e.cameraRig ? e.cameraRig : null
        }, n.FindSceneLightRig = function(e) {
            return null == e ? null : null != e.lightRig ? e.lightRig : null
        }, n.FindTransformWithScript = function(n, t) {
            var a = n.getNodes();
            return e.Utilities.SearchTransformNodeForScript(t, a)
        }, n.FindAllTransformsWithScript = function(n, t) {
            var a = n.getNodes();
            return e.Utilities.SearchAllTransformNodesForScript(t, a)
        }, n.FindChildTransformNode = function(n, t, a, r, i) {
            if (void 0 === a && (a = e.SearchType.ExactMatch), void 0 === r && (r = !0), void 0 === i && (i = null), null == n) return null;
            var o = null != a ? a : e.SearchType.ExactMatch,
                l = n.getChildren(i, r);
            return e.Utilities.SearchTransformNodes(t, l, o)
        }, n.FindChildTransformWithTags = function(n, t, a, r) {
            if (void 0 === a && (a = !0), void 0 === r && (r = null), null == n) return null;
            var i = n.getChildren(r, a);
            return e.Utilities.SearchTransformNodeForTags(t, i)
        }, n.FindAllChildTransformsWithTags = function(n, t, a, r) {
            if (void 0 === a && (a = !0), void 0 === r && (r = null), null == n) return null;
            var i = n.getChildren(r, a);
            return e.Utilities.SearchAllTransformNodesForTags(t, i)
        }, n.FindChildTransformWithScript = function(n, t, a, r) {
            if (void 0 === a && (a = !0), void 0 === r && (r = null), null == n) return null;
            var i = n.getChildren(r, a);
            return e.Utilities.SearchTransformNodeForScript(t, i)
        }, n.FindAllChildTransformsWithScript = function(n, t, a, r) {
            if (void 0 === a && (a = !0), void 0 === r && (r = null), null == n) return null;
            var i = n.getChildren(r, a);
            return e.Utilities.SearchAllTransformNodesForScript(t, i)
        }, n.SearchForScriptComponentByName = function(n, t) {
            var a = n.getNodes(),
                r = e.Utilities.SearchTransformNodeForScript(t, a);
            return e.SceneManager.FindScriptComponent(r, t)
        }, n.SearchForAllScriptComponentsByName = function(n, t) {
            var a = null,
                r = n.getNodes(),
                i = e.Utilities.SearchAllTransformNodesForScript(t, r);
            return null != i && i.length > 0 && i.forEach(function(n) {
                var r = e.SceneManager.FindScriptComponent(n, t);
                null != r && (null == a && (a = []), a.push(r))
            }), null != a ? a : null
        }, n.MoveWithCollisions = function(e, n) {
            return null == e ? null : void(null != n && e.moveWithCollisions(n))
        }, n.MoveWithTranslation = function(e, n) {
            return null == e ? null : void(null != n && e.position.addInPlace(n))
        }, n.TurnWithRotation = function(n, t, a) {
            return void 0 === a && (a = e.Space.LOCAL), null == n ? null : void(0 != t && n.rotate(e.Axis.Y, t, a))
        }, n.GetPhysicsHeapSize = function() {
            if ("undefined" == typeof Ammo) return 0;
            var e = 0;
            return Ammo && Ammo.HEAP8 && Ammo.HEAP8.length && (e = Ammo.HEAP8.length / 1048576), e
        }, n.ConfigurePhysicsEngine = function(n, t, a, r, i, o, l) {
            if (void 0 === t && (t = !0), void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === i && (i = !0), void 0 === o && (o = 1e-4), void 0 === l && (l = null), "undefined" != typeof Ammo) {
                var s = new e.Vector3(0, (-9.81), 0),
                    u = null != l ? l : s;
                if (Ammo && e.AmmoJSPlugin) {
                    var c = n.isPhysicsEnabled(),
                        d = c === !0 ? n.getPhysicsEngine() : null,
                        m = c === !0 && null != d ? d.getPhysicsPlugin() : null,
                        p = c === !0 && null != d && "AmmoJSPlugin" === d.getPhysicsPluginName();
                    if (p === !1) {
                        var g = null,
                            h = e.SceneManager.GetPhysicsHeapSize();
                        if (r > 0) {
                            var f = new Ammo.btAxisSweep3(new Ammo.btVector3((-r), (-r), (-r)), new Ammo.btVector3(r, r, r));
                            g = new e.AmmoJSPlugin(t, Ammo, f), e.Tools.Log("Ammo.js plugin (btAxisSweep3 - " + h + " MB)")
                        } else g = new e.AmmoJSPlugin(t), e.Tools.Log("Ammo.js plugin (btDbvtBroadphase - " + h + " MB)");
                        t === !0 ? e.Tools.Log("Ammo.js delta world step enabled") : e.Tools.Log("Ammo.js fixed time step enabled"), e.Utilities.UseTriangleNormals() === !0 && e.Tools.Log("Ammo.js triangle normals enabled"), null != e.SceneManager.OnSetupPhysicsPlugin && e.SceneManager.OnSetupPhysicsPlugin(n, g), g.onCreateCustomShape = function(t) {
                            var a = null,
                                r = "Unknown",
                                i = t.object;
                            if (null != i.name && (r = i.name), null != i._colliderType) {
                                var o = i._colliderType;
                                a = e.Utilities.CreateImpostorCustomShape(n, t, o, e.Utilities.ShowDebugColliders(), e.Utilities.ColliderVisibility(), e.Utilities.ColliderRenderGroup(), e.Utilities.UseTriangleNormals())
                            } else e.Tools.Warn("No custom shape collider type defined for entity: " + r);
                            return a
                        }, n.enablePhysics(u, g), c = n.isPhysicsEnabled(), d = c === !0 ? n.getPhysicsEngine() : null, m = c === !0 && null != d ? d.getPhysicsPlugin() : null, p = c === !0 && null != d && "AmmoJSPlugin" === d.getPhysicsPluginName(), null != d && a > 0 && d.setSubTimeStep(a)
                    } else e.Tools.Warn("Ammo.js plugin enabled");
                    if (p === !0 && null != d && null != m && null != m.world) {
                        null == Ammo.btSmoothTriangleMesh && e.Tools.Warn("Ammo.js using default triangle"), null == Ammo.btSmoothVehicleRaycaster && e.Tools.Warn("Ammo.js using default vehicle raycaster"), m.world.getDispatchInfo().set_m_allowedCcdPenetration(o), m.world.getBroadphase().getOverlappingPairCache().setInternalGhostPairCallback(new Ammo.btGhostPairCallback);
                        var S = n;
                        S._monitorContactManifolds || (S._monitorContactManifolds = !0, i === !0 && (e.Tools.Log("Ammo.js contact manifolds enabled"), n.registerBeforeRender(function() {
                            var e = m.world.getDispatcher().getNumManifolds();
                            if (e > 0)
                                for (var n = 0; n < e; n++) {
                                    var t = m.world.getDispatcher().getManifoldByIndexInternal(n),
                                        a = Ammo.castObject(t.getBody0(), Ammo.btCollisionObject),
                                        r = Ammo.castObject(t.getBody1(), Ammo.btCollisionObject);
                                    null != a && null != a.entity && null != a.entity.physicsImpostor && null != r && null != r.entity && r.isActive() && null != a.entity.physicsImpostor.tmpCollisionObjects && (a.entity.physicsImpostor.tmpCollisionObjects[r.entity.uniqueId] = r.entity), null != r && null != r.entity && null != r.entity.physicsImpostor && null != a && null != a.entity && a.isActive() && null != r.entity.physicsImpostor.tmpCollisionObjects && (r.entity.physicsImpostor.tmpCollisionObjects[a.entity.uniqueId] = a.entity)
                                }
                        })))
                    } else e.Tools.Warn("Ammo.js physics plugins are invalid")
                } else e.Tools.Warn("Ammo.js physics plugin not available")
            }
        }, n.GetPhysicsEngine = function(e) {
            return "undefined" == typeof Ammo ? null : e.getPhysicsEngine()
        }, n.GetPhysicsWorld = function(n) {
            if ("undefined" == typeof Ammo) return null;
            var t = null,
                a = e.SceneManager.GetPhysicsEngine(n);
            if (null != a) {
                var r = a.getPhysicsPlugin();
                null != r && (t = r.world)
            }
            return t
        }, n.PhysicsRaycast = function(n, t, a, r, i, o) {
            if (void 0 === i && (i = null), void 0 === o && (o = null), null == n) return null;
            if ("undefined" == typeof Ammo) return null;
            if (null == e.SceneManager.TempPhysicsWorld && (e.SceneManager.TempPhysicsWorld = e.SceneManager.GetPhysicsWorld(n)), null == e.SceneManager.TempPhysicsWorld) return null;
            null == e.SceneManager.TempVRayDest && (e.SceneManager.TempVRayDest = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempVRayOrigin && (e.SceneManager.TempVRayOrigin = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempCastEndPoint && (e.SceneManager.TempCastEndPoint = new e.Vector3(0, 0, 0)), null == e.SceneManager.TempRaycastResult && (e.SceneManager.TempRaycastResult = new e.RaycastHitResult), null == e.SceneManager.ClosestRayResultCallback && (e.SceneManager.ClosestRayResultCallback = new Ammo.ClosestRayResultCallback(e.SceneManager.TempVRayOrigin, e.SceneManager.TempVRayDest));
            var l = Ammo.castObject(e.SceneManager.ClosestRayResultCallback, Ammo.RayResultCallback);
            if (l.set_m_closestHitFraction(1), l.set_m_collisionObject(null), null != i ? l.set_m_collisionFilterGroup(i) : l.set_m_collisionFilterGroup(e.CollisionFilters.DefaultFilter), null != o ? l.set_m_collisionFilterMask(o) : l.set_m_collisionFilterMask(e.CollisionFilters.AllFilter), e.SceneManager.TempCastEndPoint.copyFrom(t), a.scaleAndAddToRef(r, e.SceneManager.TempCastEndPoint), e.SceneManager.TempVRayOrigin.setValue(t.x, t.y, t.z), e.SceneManager.TempVRayDest.setValue(e.SceneManager.TempCastEndPoint.x, e.SceneManager.TempCastEndPoint.y, e.SceneManager.TempCastEndPoint.z), e.SceneManager.ClosestRayResultCallback.get_m_rayFromWorld().setValue(t.x, t.y, t.z), e.SceneManager.ClosestRayResultCallback.get_m_rayToWorld().setValue(e.SceneManager.TempCastEndPoint.x, e.SceneManager.TempCastEndPoint.y, e.SceneManager.TempCastEndPoint.z), e.SceneManager.TempRaycastResult.reset(t, e.SceneManager.TempCastEndPoint), e.SceneManager.TempPhysicsWorld.rayTest(e.SceneManager.TempVRayOrigin, e.SceneManager.TempVRayDest, e.SceneManager.ClosestRayResultCallback), e.SceneManager.ClosestRayResultCallback.hasHit()) {
                var s = e.SceneManager.ClosestRayResultCallback.get_m_hitPointWorld(),
                    u = e.SceneManager.ClosestRayResultCallback.get_m_hitNormalWorld();
                e.SceneManager.TempRaycastResult.update(!0, s.x(), s.y(), s.z(), u.x(), u.y(), u.z(), l.get_m_collisionObject())
            }
            return e.SceneManager.TempRaycastResult
        }, n.PhysicsRaycastToPoint = function(n, t, a, r, i) {
            if (void 0 === r && (r = null), void 0 === i && (i = null), null == n) return null;
            if ("undefined" == typeof Ammo) return null;
            if (null == e.SceneManager.TempPhysicsWorld && (e.SceneManager.TempPhysicsWorld = e.SceneManager.GetPhysicsWorld(n)), null == e.SceneManager.TempPhysicsWorld) return null;
            null == e.SceneManager.TempVRayDest && (e.SceneManager.TempVRayDest = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempVRayOrigin && (e.SceneManager.TempVRayOrigin = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempRaycastResult && (e.SceneManager.TempRaycastResult = new e.RaycastHitResult), null == e.SceneManager.ClosestRayResultCallback && (e.SceneManager.ClosestRayResultCallback = new Ammo.ClosestRayResultCallback(e.SceneManager.TempVRayOrigin, e.SceneManager.TempVRayDest));
            var o = Ammo.castObject(e.SceneManager.ClosestRayResultCallback, Ammo.RayResultCallback);
            if (o.set_m_closestHitFraction(1), o.set_m_collisionObject(null), null != r ? o.set_m_collisionFilterGroup(r) : o.set_m_collisionFilterGroup(e.CollisionFilters.DefaultFilter), null != i ? o.set_m_collisionFilterMask(i) : o.set_m_collisionFilterMask(e.CollisionFilters.AllFilter), e.SceneManager.TempVRayOrigin.setValue(t.x, t.y, t.z), e.SceneManager.TempVRayDest.setValue(a.x, a.y, a.z), e.SceneManager.ClosestRayResultCallback.get_m_rayFromWorld().setValue(t.x, t.y, t.z), e.SceneManager.ClosestRayResultCallback.get_m_rayToWorld().setValue(a.x, a.y, a.z), e.SceneManager.TempRaycastResult.reset(t, a), e.SceneManager.TempPhysicsWorld.rayTest(e.SceneManager.TempVRayOrigin, e.SceneManager.TempVRayDest, e.SceneManager.ClosestRayResultCallback), e.SceneManager.ClosestRayResultCallback.hasHit()) {
                var l = e.SceneManager.ClosestRayResultCallback.get_m_hitPointWorld(),
                    s = e.SceneManager.ClosestRayResultCallback.get_m_hitNormalWorld();
                e.SceneManager.TempRaycastResult.update(!0, l.x(), l.y(), l.z(), s.x(), s.y(), s.z(), o.get_m_collisionObject())
            }
            return e.SceneManager.TempRaycastResult
        }, n.PhysicsShapecast = function(n, t, a, r, i, o, l) {
            if (void 0 === o && (o = null), void 0 === l && (l = null), null == n) return null;
            if ("undefined" == typeof Ammo) return null;
            if (null == e.SceneManager.TempPhysicsWorld && (e.SceneManager.TempPhysicsWorld = e.SceneManager.GetPhysicsWorld(n)), null == e.SceneManager.TempPhysicsWorld) return null;
            null == e.SceneManager.TempVRayDest && (e.SceneManager.TempVRayDest = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempVRayOrigin && (e.SceneManager.TempVRayOrigin = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempCastEndPoint && (e.SceneManager.TempCastEndPoint = new e.Vector3(0, 0, 0)), null == e.SceneManager.TempTransformFrom && (e.SceneManager.TempTransformFrom = new Ammo.btTransform), null == e.SceneManager.TempTransformTo && (e.SceneManager.TempTransformTo = new Ammo.btTransform), null == e.SceneManager.TempRaycastResult && (e.SceneManager.TempRaycastResult = new e.RaycastHitResult), null == e.SceneManager.ClosestConvexResultCallback && (e.SceneManager.ClosestConvexResultCallback = new Ammo.ClosestConvexResultCallback(e.SceneManager.TempVRayOrigin, e.SceneManager.TempVRayDest));
            var s = Ammo.castObject(e.SceneManager.ClosestConvexResultCallback, Ammo.ConvexResultCallback);
            s.set_m_closestHitFraction(1), null != o ? s.set_m_collisionFilterGroup(o) : s.set_m_collisionFilterGroup(e.CollisionFilters.DefaultFilter), null != l ? s.set_m_collisionFilterMask(l) : s.set_m_collisionFilterMask(e.CollisionFilters.AllFilter), null != e.SceneManager.ClosestConvexResultCallback.set_m_hitCollisionObject && e.SceneManager.ClosestConvexResultCallback.set_m_hitCollisionObject(null), e.SceneManager.TempCastEndPoint.copyFrom(a), r.scaleAndAddToRef(i, e.SceneManager.TempCastEndPoint), e.SceneManager.TempVRayOrigin.setValue(a.x, a.y, a.z), e.SceneManager.TempVRayDest.setValue(e.SceneManager.TempCastEndPoint.x, e.SceneManager.TempCastEndPoint.y, e.SceneManager.TempCastEndPoint.z), e.SceneManager.ClosestConvexResultCallback.get_m_convexFromWorld().setValue(a.x, a.y, a.z), e.SceneManager.ClosestConvexResultCallback.get_m_convexToWorld().setValue(e.SceneManager.TempCastEndPoint.x, e.SceneManager.TempCastEndPoint.y, e.SceneManager.TempCastEndPoint.z);
            var u = 1e-4;
            if (e.SceneManager.TempRaycastResult.reset(a, e.SceneManager.TempCastEndPoint), e.SceneManager.TempTransformFrom.setIdentity(), e.SceneManager.TempTransformFrom.setOrigin(e.SceneManager.TempVRayOrigin), e.SceneManager.TempTransformTo.setIdentity(), e.SceneManager.TempTransformTo.setOrigin(e.SceneManager.TempVRayDest), e.SceneManager.TempPhysicsWorld.convexSweepTest(t, e.SceneManager.TempTransformFrom, e.SceneManager.TempTransformTo, e.SceneManager.ClosestConvexResultCallback, u), e.SceneManager.ClosestConvexResultCallback.hasHit()) {
                var c = e.SceneManager.ClosestConvexResultCallback.get_m_hitPointWorld(),
                    d = e.SceneManager.ClosestConvexResultCallback.get_m_hitNormalWorld();
                e.SceneManager.TempRaycastResult.update(!0, c.x(), c.y(), c.z(), d.x(), d.y(), d.z(), e.SceneManager.ClosestConvexResultCallback.get_m_hitCollisionObject())
            }
            return e.SceneManager.TempRaycastResult
        }, n.PhysicsShapecastToPoint = function(n, t, a, r, i, o) {
            if (void 0 === i && (i = null), void 0 === o && (o = null), null == n) return null;
            if ("undefined" == typeof Ammo) return null;
            if (null == e.SceneManager.TempPhysicsWorld && (e.SceneManager.TempPhysicsWorld = e.SceneManager.GetPhysicsWorld(n)), null == e.SceneManager.TempPhysicsWorld) return null;
            null == e.SceneManager.TempVRayDest && (e.SceneManager.TempVRayDest = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempVRayOrigin && (e.SceneManager.TempVRayOrigin = new Ammo.btVector3(0, 0, 0)), null == e.SceneManager.TempTransformFrom && (e.SceneManager.TempTransformFrom = new Ammo.btTransform), null == e.SceneManager.TempTransformTo && (e.SceneManager.TempTransformTo = new Ammo.btTransform), null == e.SceneManager.TempRaycastResult && (e.SceneManager.TempRaycastResult = new e.RaycastHitResult), null == e.SceneManager.ClosestConvexResultCallback && (e.SceneManager.ClosestConvexResultCallback = new Ammo.ClosestConvexResultCallback(e.SceneManager.TempVRayOrigin, e.SceneManager.TempVRayDest));
            var l = Ammo.castObject(e.SceneManager.ClosestConvexResultCallback, Ammo.ConvexResultCallback);
            l.set_m_closestHitFraction(1), null != i ? l.set_m_collisionFilterGroup(i) : l.set_m_collisionFilterGroup(e.CollisionFilters.DefaultFilter), null != o ? l.set_m_collisionFilterMask(o) : l.set_m_collisionFilterMask(e.CollisionFilters.AllFilter), null != e.SceneManager.ClosestConvexResultCallback.set_m_hitCollisionObject && e.SceneManager.ClosestConvexResultCallback.set_m_hitCollisionObject(null), e.SceneManager.TempVRayOrigin.setValue(a.x, a.y, a.z), e.SceneManager.TempVRayDest.setValue(r.x, r.y, r.z), e.SceneManager.ClosestConvexResultCallback.get_m_convexFromWorld().setValue(a.x, a.y, a.z), e.SceneManager.ClosestConvexResultCallback.get_m_convexToWorld().setValue(r.x, r.y, r.z);
            var s = 1e-4;
            if (e.SceneManager.TempRaycastResult.reset(a, r), e.SceneManager.TempTransformFrom.setIdentity(), e.SceneManager.TempTransformFrom.setOrigin(e.SceneManager.TempVRayOrigin), e.SceneManager.TempTransformTo.setIdentity(), e.SceneManager.TempTransformTo.setOrigin(e.SceneManager.TempVRayDest), e.SceneManager.TempPhysicsWorld.convexSweepTest(t, e.SceneManager.TempTransformFrom, e.SceneManager.TempTransformTo, e.SceneManager.ClosestConvexResultCallback, s), e.SceneManager.ClosestConvexResultCallback.hasHit()) {
                var u = e.SceneManager.ClosestConvexResultCallback.get_m_hitPointWorld(),
                    c = e.SceneManager.ClosestConvexResultCallback.get_m_hitNormalWorld();
                e.SceneManager.TempRaycastResult.update(!0, u.x(), u.y(), u.z(), c.x(), c.y(), c.z(), e.SceneManager.ClosestConvexResultCallback.get_m_hitCollisionObject())
            }
            return e.SceneManager.TempRaycastResult
        }, n.CreatePhysicsImpostor = function(n, t, a, r, i) {
            if (void 0 === i && (i = !0), null != t && "undefined" != typeof Ammo) {
                t.checkCollisions = !1;
                var o = t.parent;
                i === !0 && (t.parent = null), t._colliderType = a;
                var l = a;
                switch (a) {
                    case e.PhysicsImpostor.MeshImpostor:
                    case e.PhysicsImpostor.BoxImpostor:
                    case e.PhysicsImpostor.SphereImpostor:
                    case e.PhysicsImpostor.CapsuleImpostor:
                    case e.PhysicsImpostor.ConvexHullImpostor:
                        l = e.PhysicsImpostor.CustomImpostor
                }
                t.physicsImpostor = new e.PhysicsImpostor(t, l, r, n), i === !0 && (t.parent = o)
            }
        }, n.GetPhysicsImposterType = function(n) {
            if ("undefined" == typeof Ammo) return null;
            var t = "Unknown";
            switch (n) {
                case e.PhysicsImpostor.NoImpostor:
                    t = "No";
                    break;
                case e.PhysicsImpostor.SphereImpostor:
                    t = "Sphere";
                    break;
                case e.PhysicsImpostor.BoxImpostor:
                    t = "Box";
                    break;
                case e.PhysicsImpostor.PlaneImpostor:
                    t = "Plane";
                    break;
                case e.PhysicsImpostor.MeshImpostor:
                    t = "Mesh";
                    break;
                case e.PhysicsImpostor.CapsuleImpostor:
                    t = "Capsule";
                    break;
                case e.PhysicsImpostor.CylinderImpostor:
                    t = "Cylinder";
                    break;
                case e.PhysicsImpostor.ParticleImpostor:
                    t = "Particle";
                    break;
                case e.PhysicsImpostor.HeightmapImpostor:
                    t = "Heightmap";
                    break;
                case e.PhysicsImpostor.ConvexHullImpostor:
                    t = "ConvexHull";
                    break;
                case e.PhysicsImpostor.CustomImpostor:
                    t = "CustomShape"
            }
            return t
        }, n.CreatePhysicsBoxShape = function(e) {
            return "undefined" == typeof Ammo ? null : new Ammo.btBoxShape(new Ammo.btVector3(e.x, e.y, e.z))
        }, n.CreatePhysicsSphereShape = function(e) {
            return "undefined" == typeof Ammo ? null : new Ammo.btSphereShape(e)
        }, n.CreatePhysicsEllipsoidShape = function(e) {
            if ("undefined" == typeof Ammo) return null;
            var n = [new Ammo.btVector3(0, 0, 0)],
                t = [1],
                a = new Ammo.btMultiSphereShape(n, t, 1);
            return a.setLocalScaling(new Ammo.btVector3(e.x, e.y, e.z)), a
        }, n.CreatePhysicsCylinderShape = function(e, n) {
            return "undefined" == typeof Ammo ? null : new Ammo.btCylinderShape(new Ammo.btVector3(e, n, e))
        }, n.CreatePhysicsCapsuleShape = function(e, n) {
            return "undefined" == typeof Ammo ? null : new Ammo.btCapsuleShape(e, n)
        }, n.CreatePhysicsCompoundShape = function(e) {
            return void 0 === e && (e = !1), "undefined" == typeof Ammo ? null : new Ammo.btCompoundShape(e)
        }, n.CreatePhysicsEmptyShape = function() {
            return "undefined" == typeof Ammo ? null : new Ammo.btEmptyShape
        }, n.GetRecastHeapSize = function() {
            if ("undefined" == typeof Recast) return 0;
            var e = 0;
            return Recast && Recast.HEAP8 && Recast.HEAP8.length && (e = Recast.HEAP8.length / 1048576), e
        }, n.GetNavigationTools = function() {
            if ("undefined" != typeof Recast) return null == e.SceneManager.PluginInstance && (e.SceneManager.PluginInstance = new e.RecastJSPlugin), e.SceneManager.PluginInstance
        }, n.GetCrowdInterface = function(n) {
            if ("undefined" == typeof Recast) return null;
            if (e.SceneManager.HasNavigationData()) {
                var t = e.SceneManager.GetNavigationTools();
                return null != t && null == e.SceneManager.CrowdInterface && (e.SceneManager.CrowdInterface = t.createCrowd(e.SceneManager.MAX_AGENT_COUNT, e.SceneManager.MAX_AGENT_RADIUS, n)), e.SceneManager.CrowdInterface
            }
            return null
        }, n.HasNavigationData = function() {
            if ("undefined" == typeof Recast) return !1;
            var n = e.SceneManager.GetNavigationTools();
            return null != n && null != n.navMesh
        }, n.GetNavigationMesh = function() {
            return "undefined" == typeof Recast ? null : e.SceneManager.NavigationMesh
        }, n.BakeNavigationMesh = function(n, t, a, r, i, o) {
            if (void 0 === r && (r = !1), void 0 === i && (i = null), void 0 === o && (o = !1), "undefined" == typeof Recast) return null;
            e.Tools.Log("Recast.js baking navigation mesh data");
            var l = e.SceneManager.GetNavigationTools();
            if (null != l)
                if (l.createNavMesh(t, a), null != l.navMesh) {
                    var s = "NavigationMesh",
                        u = n.getMaterialByName(s);
                    null == u && (u = new e.StandardMaterial(s, n), u.diffuseColor = i || new e.Color3(.05, .225, .75), u.alpha = .5), e.SceneManager.NavigationMesh = l.createDebugNavMesh(n), null != e.SceneManager.NavigationMesh && (e.SceneManager.NavigationMesh.material = u, e.SceneManager.NavigationMesh.isPickable = !0, e.SceneManager.NavigationMesh.isVisible = !0, e.SceneManager.NavigationMesh.visibility = r === !0 ? 1 : 0, e.SceneManager.NavigationMesh.renderingGroupId = e.Utilities.ColliderRenderGroup(), e.Tags.AddTagsTo(e.SceneManager.NavigationMesh, "Navigation"), e.Utilities.ValidateTransformMetadata(e.SceneManager.NavigationMesh), o === !0 && (e.SceneManager.NavigationMesh.checkCollisions = !0, e.RigidbodyPhysics && (e.SceneManager.NavigationMesh.metadata.unity.physics = e.RigidbodyPhysics.CreatePhysicsMetadata(0, 0, .05, new e.Vector3(0, 0, 0)), e.SceneManager.NavigationMesh.metadata.unity.collision = e.RigidbodyPhysics.CreateCollisionMetadata("MeshCollider", !1, !1, 0, .6, .6), e.RigidbodyPhysics.SetupPhysicsComponent(n, e.SceneManager.NavigationMesh)))), null != e.SceneManager.NavigationMesh ? e.SceneManager.OnNavMeshReadyObservable.hasObservers() === !0 && e.SceneManager.OnNavMeshReadyObservable.notifyObservers(e.SceneManager.NavigationMesh) : e.Tools.Warn("Failed to generate navigation mesh geometry")
                } else e.Tools.Warn("Failed to create navigation mesh data");
            return e.SceneManager.NavigationMesh
        }, n.LoadNavigationMesh = function(n, t, a, r, i, o) {
            if (void 0 === a && (a = !1), void 0 === r && (r = null), void 0 === i && (i = 0), void 0 === o && (o = !1), "undefined" == typeof Recast) return null;
            e.Tools.Log("Recast.js loading prebaked navigation mesh");
            var l = e.SceneManager.GetNavigationTools();
            if (null != l)
                if (l.setTimeStep && l.setTimeStep(i), l.buildFromNavmeshData(t), null != l.navMesh) {
                    var s = "NavigationMesh",
                        u = n.getMaterialByName(s);
                    null == u && (u = new e.StandardMaterial(s, n), u.diffuseColor = r || new e.Color3(.05, .225, .75), u.alpha = .5), e.SceneManager.NavigationMesh = l.createDebugNavMesh(n), null != e.SceneManager.NavigationMesh && (e.SceneManager.NavigationMesh.material = u, e.SceneManager.NavigationMesh.isPickable = !0, e.SceneManager.NavigationMesh.isVisible = !0, e.SceneManager.NavigationMesh.visibility = a === !0 ? 1 : 0, e.SceneManager.NavigationMesh.renderingGroupId = e.Utilities.ColliderRenderGroup(), e.Tags.AddTagsTo(e.SceneManager.NavigationMesh, "Navigation"), e.Utilities.ValidateTransformMetadata(e.SceneManager.NavigationMesh), o === !0 && (e.SceneManager.NavigationMesh.checkCollisions = !0, e.RigidbodyPhysics && (e.SceneManager.NavigationMesh.metadata.unity.physics = e.RigidbodyPhysics.CreatePhysicsMetadata(0, 0, .05, new e.Vector3(0, 0, 0)), e.SceneManager.NavigationMesh.metadata.unity.collision = e.RigidbodyPhysics.CreateCollisionMetadata("MeshCollider", !1, !1, 0, .6, .6), e.RigidbodyPhysics.SetupPhysicsComponent(n, e.SceneManager.NavigationMesh)))), null != e.SceneManager.NavigationMesh ? e.SceneManager.OnNavMeshReadyObservable.hasObservers() === !0 && e.SceneManager.OnNavMeshReadyObservable.notifyObservers(e.SceneManager.NavigationMesh) : e.Tools.Warn("Failed to generate navigation mesh geometry")
                } else e.Tools.Warn("Failed to build navigation mesh data");
            return e.SceneManager.NavigationMesh
        }, n.SaveNavigationMesh = function() {
            if ("undefined" == typeof Recast) return null;
            var n = e.SceneManager.GetNavigationTools();
            return null != n && null != n.navMesh ? n.getNavmeshData() : null
        }, n.ComputeNavigationPath = function(n, t, a) {
            if (void 0 === a && (a = !0), "undefined" == typeof Recast) return null;
            var r = e.SceneManager.GetNavigationTools(),
                i = a === !0 ? r.getClosestPoint(n) : n,
                o = a === !0 ? r.getClosestPoint(t) : t;
            return null != r && null != r.navMesh ? r.computePath(i, o) : null
        }, n.MoveAlongNavigationPath = function(n, t, a, r, i, o) {
            void 0 === i && (i = null);
            var l = null;
            if (a && a.length > 0) {
                for (var s = 0, u = [{
                        frame: 0,
                        value: t.position
                    }], c = 0; c < a.length; c++) s += e.Vector3.Distance(u[c].value, a[c]), u.push({
                    frame: s,
                    value: a[c]
                });
                l = new e.Animation("Navigation", "position", 3, e.Animation.ANIMATIONTYPE_VECTOR3, e.Animation.ANIMATIONLOOPMODE_CONSTANT), null != i && l.setEasingFunction(i), l.setKeys(u), t.animations = [l], n.beginAnimation(t, 0, s, !1, r, o)
            }
            return l
        }, n.AddNavigationCylinderObstacle = function(n, t, a) {
            if ("undefined" == typeof Recast) return null;
            var r = e.SceneManager.GetNavigationTools();
            return null != r && null != r.navMesh ? r.addCylinderObstacle(n, t, a) : null
        }, n.AddNavigationBoxObstacle = function(n, t, a) {
            if ("undefined" == typeof Recast) return null;
            var r = e.SceneManager.GetNavigationTools();
            return null != r && null != r.navMesh ? r.addBoxObstacle(n, t, a) : null
        }, n.RemoveNavigationObstacle = function(n) {
            if ("undefined" == typeof Recast) return null;
            var t = e.SceneManager.GetNavigationTools();
            null != t && null != t.navMesh && t.removeObstacle(n)
        }, n.ConfigureUserInput = function(n, t) {
            void 0 === t && (t = null);
            var a = !(null == t || !t.pointerLock) && t.pointerLock,
                r = !(null == t || !t.preventDefault) && t.preventDefault,
                i = !(null == t || !t.useCapture) && t.useCapture;
            if (e.SceneManager.resetUserInput(), !e.SceneManager.input) {
                if (document.documentElement.tabIndex = 1, document.documentElement.addEventListener("keyup", e.SceneManager.inputKeyUpHandler, i), document.documentElement.addEventListener("pointerup", e.SceneManager.inputPointerUpHandler, i), e.UserInputOptions.UseCanvasElement === !0) {
                    var o = document.getElementById("renderingCanvas") || n.getEngine().getRenderingCanvas();
                    o.tabIndex = 2, o.addEventListener("focusout", e.SceneManager.resetKeyMapHandler, i), o.addEventListener("keydown", e.SceneManager.inputKeyDownHandler, i), o.addEventListener("pointerdown", e.SceneManager.inputPointerDownHandler, i), o.addEventListener("pointermove", e.SceneManager.inputPointerMoveHandler, i), o.addEventListener("onwheel" in document ? "wheel" : "mousewheel", e.SceneManager.inputPointerWheelHandler, i)
                } else document.documentElement.addEventListener("focusout", e.SceneManager.resetKeyMapHandler, i), document.documentElement.addEventListener("keydown", e.SceneManager.inputKeyDownHandler, i), document.documentElement.addEventListener("pointerdown", e.SceneManager.inputPointerDownHandler, i), document.documentElement.addEventListener("pointermove", e.SceneManager.inputPointerMoveHandler, i), document.documentElement.addEventListener("onwheel" in document ? "wheel" : "mousewheel", e.SceneManager.inputPointerWheelHandler, i);
                e.SceneManager.preventDefault = r, null == e.SceneManager.GamepadManager && (e.SceneManager.GamepadManager = new e.GamepadManager, e.SceneManager.GamepadManager.onGamepadConnectedObservable.add(e.SceneManager.inputManagerGamepadConnected), e.SceneManager.GamepadManager.onGamepadDisconnectedObservable.add(e.SceneManager.inputManagerGamepadDisconnected)), e.SceneManager.input = !0, document.documentElement.focus(), a === !0 && e.SceneManager.LockMousePointer(n, !0)
            }
            n.registerAfterRender(function() {
                e.SceneManager.updateUserInput(n)
            })
        }, n.SetLeftJoystickBuffer = function(n, t, a) {
            void 0 === a && (a = !0), e.SceneManager.j_horizontal = n, e.SceneManager.j_vertical = a === !0 ? -t : t
        }, n.SetRightJoystickBuffer = function(n, t, a) {
            void 0 === a && (a = !0), e.SceneManager.j_mousex = n, e.SceneManager.j_mousey = a === !0 ? -t : t
        }, n.DisableUserInput = function(n, t) {
            void 0 === t && (t = !1), e.SceneManager.LockMousePointer(n, !1), e.SceneManager.resetUserInput()
        }, n.ToggleFullscreenMode = function(e, n) {
            void 0 === n && (n = !0), e.getEngine().switchFullscreen(n)
        }, n.EnterFullscreenMode = function(e, n) {
            void 0 === n && (n = !0), e.getEngine().enterFullscreen(n)
        }, n.ExitFullscreenMode = function(e) {
            e.getEngine().exitFullscreen()
        }, n.LockMousePointer = function(n, t) {
            t === !0 ? e.SceneManager.LockMousePointerObserver = n.onPointerObservable.add(function(t, a) {
                t.type == e.PointerEventTypes.POINTERDOWN && (document.pointerLockElement || n.getEngine().enterPointerlock())
            }) : e.SceneManager.IsPointerLockHandled() && (n.onPointerObservable.remove(e.SceneManager.LockMousePointerObserver), e.SceneManager.LockMousePointerObserver = null)
        }, n.IsPointerLocked = function() {
            return e.SceneManager.PointerLockedFlag
        }, n.IsPointerLockHandled = function() {
            return null != e.SceneManager.LockMousePointerObserver
        }, n.GetUserInput = function(n, t) {
            void 0 === t && (t = e.PlayerNumber.One);
            var a = 0;
            if (e.SceneManager.input) switch (n) {
                case e.UserInputAxis.Vertical:
                case e.UserInputAxis.Horizontal:
                    a = t === e.PlayerNumber.Four ? n === e.UserInputAxis.Horizontal ? e.SceneManager.horizontal4 : e.SceneManager.vertical4 : t === e.PlayerNumber.Three ? n === e.UserInputAxis.Horizontal ? e.SceneManager.horizontal3 : e.SceneManager.vertical3 : t === e.PlayerNumber.Two ? n === e.UserInputAxis.Horizontal ? e.SceneManager.horizontal2 : e.SceneManager.vertical2 : n === e.UserInputAxis.Horizontal ? e.SceneManager.horizontal : e.SceneManager.vertical;
                    break;
                case e.UserInputAxis.MouseX:
                case e.UserInputAxis.MouseY:
                    a = t === e.PlayerNumber.Four ? n === e.UserInputAxis.MouseX ? e.SceneManager.mousex4 : e.SceneManager.mousey4 : t === e.PlayerNumber.Three ? n === e.UserInputAxis.MouseX ? e.SceneManager.mousex3 : e.SceneManager.mousey3 : t === e.PlayerNumber.Two ? n === e.UserInputAxis.MouseX ? e.SceneManager.mousex2 : e.SceneManager.mousey2 : n === e.UserInputAxis.MouseX ? e.SceneManager.mousex : e.SceneManager.mousey;
                    break;
                case e.UserInputAxis.Wheel:
                    t === e.PlayerNumber.One && (a = e.SceneManager.wheel)
            }
            return a
        }, n.OnKeyboardUp = function(n) {
            e.SceneManager.input && e.SceneManager.keyButtonUp.push(n)
        }, n.OnKeyboardDown = function(n) {
            e.SceneManager.input && e.SceneManager.keyButtonDown.push(n)
        }, n.OnKeyboardPress = function(n, t) {
            e.SceneManager.input && e.SceneManager.keyButtonPress.push({
                index: n,
                action: t
            })
        }, n.GetKeyboardInput = function(n) {
            var t = !1;
            if (e.SceneManager.input) {
                var a = "k:" + n.toString();
                null != e.SceneManager.keymap[a] && (t = e.SceneManager.keymap[a])
            }
            return t
        }, n.OnPointerUp = function(n) {
            e.SceneManager.input && e.SceneManager.mouseButtonUp.push(n)
        }, n.OnPointerDown = function(n) {
            e.SceneManager.input && e.SceneManager.mouseButtonDown.push(n)
        }, n.OnPointerPress = function(n, t) {
            e.SceneManager.input && e.SceneManager.mouseButtonPress.push({
                index: n,
                action: t
            })
        }, n.GetPointerInput = function(n) {
            var t = !1;
            if (e.SceneManager.input) {
                var a = "p:" + n.toString();
                null != e.SceneManager.keymap[a] && (t = e.SceneManager.keymap[a])
            }
            return t
        }, n.OnGamepadButtonUp = function(n, t) {
            if (void 0 === t && (t = e.PlayerNumber.One), e.SceneManager.input) switch (t) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1ButtonUp.push(n);
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2ButtonUp.push(n);
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3ButtonUp.push(n);
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4ButtonUp.push(n)
            }
        }, n.OnGamepadButtonDown = function(n, t) {
            if (void 0 === t && (t = e.PlayerNumber.One), e.SceneManager.input) switch (t) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1ButtonDown.push(n);
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2ButtonDown.push(n);
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3ButtonDown.push(n);
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4ButtonDown.push(n)
            }
        }, n.OnGamepadButtonPress = function(n, t, a) {
            if (void 0 === a && (a = e.PlayerNumber.One), e.SceneManager.input) switch (a) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1ButtonPress.push({
                        index: n,
                        action: t
                    });
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2ButtonPress.push({
                        index: n,
                        action: t
                    });
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3ButtonPress.push({
                        index: n,
                        action: t
                    });
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4ButtonPress.push({
                        index: n,
                        action: t
                    })
            }
        }, n.GetGamepadButtonInput = function(n, t) {
            void 0 === t && (t = e.PlayerNumber.One);
            var a = !1;
            if (e.SceneManager.input) {
                var r = null;
                switch (t) {
                    case e.PlayerNumber.One:
                        r = "b1:" + n.toString();
                        break;
                    case e.PlayerNumber.Two:
                        r = "b2:" + n.toString();
                        break;
                    case e.PlayerNumber.Three:
                        r = "b3:" + n.toString();
                        break;
                    case e.PlayerNumber.Four:
                        r = "b4:" + n.toString()
                }
                null != r && null != e.SceneManager.keymap[r] && (a = e.SceneManager.keymap[r])
            }
            return a
        }, n.OnGamepadDirectionUp = function(n, t) {
            if (void 0 === t && (t = e.PlayerNumber.One), e.SceneManager.input) switch (t) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1DpadUp.push(n);
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2DpadUp.push(n);
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3DpadUp.push(n);
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4DpadUp.push(n)
            }
        }, n.OnGamepadDirectionDown = function(n, t) {
            if (void 0 === t && (t = e.PlayerNumber.One), e.SceneManager.input) switch (t) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1DpadDown.push(n);
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2DpadDown.push(n);
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3DpadDown.push(n);
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4DpadDown.push(n)
            }
        }, n.OnGamepadDirectionPress = function(n, t, a) {
            if (void 0 === a && (a = e.PlayerNumber.One), e.SceneManager.input) switch (a) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1DpadPress.push({
                        index: n,
                        action: t
                    });
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2DpadPress.push({
                        index: n,
                        action: t
                    });
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3DpadPress.push({
                        index: n,
                        action: t
                    });
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4DpadPress.push({
                        index: n,
                        action: t
                    })
            }
        }, n.GetGamepadDirectionInput = function(n, t) {
            void 0 === t && (t = e.PlayerNumber.One);
            var a = !1;
            if (e.SceneManager.input) {
                var r = null;
                switch (t) {
                    case e.PlayerNumber.One:
                        r = "d1:" + n.toString();
                        break;
                    case e.PlayerNumber.Two:
                        r = "d2:" + n.toString();
                        break;
                    case e.PlayerNumber.Three:
                        r = "d3:" + n.toString();
                        break;
                    case e.PlayerNumber.Four:
                        r = "d4:" + n.toString()
                }
                null != r && null != e.SceneManager.keymap[r] && (a = e.SceneManager.keymap[r])
            }
            return a
        }, n.OnGamepadTriggerLeft = function(n, t) {
            if (void 0 === t && (t = e.PlayerNumber.One), e.SceneManager.input) switch (t) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1LeftTrigger.push(n);
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2LeftTrigger.push(n);
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3LeftTrigger.push(n);
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4LeftTrigger.push(n)
            }
        }, n.OnGamepadTriggerRight = function(n, t) {
            if (void 0 === t && (t = e.PlayerNumber.One), e.SceneManager.input) switch (t) {
                case e.PlayerNumber.One:
                    e.SceneManager.gamepad1RightTrigger.push(n);
                    break;
                case e.PlayerNumber.Two:
                    e.SceneManager.gamepad2RightTrigger.push(n);
                    break;
                case e.PlayerNumber.Three:
                    e.SceneManager.gamepad3RightTrigger.push(n);
                    break;
                case e.PlayerNumber.Four:
                    e.SceneManager.gamepad4RightTrigger.push(n)
            }
        }, n.GetGamepadTriggerInput = function(n, t) {
            void 0 === t && (t = e.PlayerNumber.One);
            var a = 0;
            if (e.SceneManager.input) {
                var r = null;
                switch (t) {
                    case e.PlayerNumber.One:
                        r = "t1:" + n.toString();
                        break;
                    case e.PlayerNumber.Two:
                        r = "t2:" + n.toString();
                        break;
                    case e.PlayerNumber.Three:
                        r = "t3:" + n.toString();
                        break;
                    case e.PlayerNumber.Four:
                        r = "t4:" + n.toString()
                }
                null != r && null != e.SceneManager.keymap[r] && (a = e.SceneManager.keymap[r])
            }
            return a
        }, n.GetGamepadType = function(n) {
            void 0 === n && (n = e.PlayerNumber.One);
            var t = e.GamepadType.None;
            if (e.SceneManager.input) switch (n) {
                case e.PlayerNumber.One:
                    t = e.SceneManager.gamepad1Type;
                    break;
                case e.PlayerNumber.Two:
                    t = e.SceneManager.gamepad2Type;
                    break;
                case e.PlayerNumber.Three:
                    t = e.SceneManager.gamepad3Type;
                    break;
                case e.PlayerNumber.Four:
                    t = e.SceneManager.gamepad4Type
            }
            return t
        }, n.GetGamepad = function(n) {
            void 0 === n && (n = e.PlayerNumber.One);
            var t = null;
            if (e.SceneManager.input) switch (n) {
                case e.PlayerNumber.One:
                    t = e.SceneManager.gamepad1;
                    break;
                case e.PlayerNumber.Two:
                    t = e.SceneManager.gamepad2;
                    break;
                case e.PlayerNumber.Three:
                    t = e.SceneManager.gamepad3;
                    break;
                case e.PlayerNumber.Four:
                    t = e.SceneManager.gamepad4
            }
            return t
        }, n.tickKeyboardInput = function(n) {
            if (e.SceneManager.EnableUserInput !== !1) {
                var t = e.SceneManager.GetKeyboardInput(e.UserInputKey.W) || e.SceneManager.GetKeyboardInput(e.UserInputKey.UpArrow),
                    a = e.SceneManager.GetKeyboardInput(e.UserInputKey.A),
                    r = e.SceneManager.GetKeyboardInput(e.UserInputKey.S) || e.SceneManager.GetKeyboardInput(e.UserInputKey.DownArrow),
                    i = e.SceneManager.GetKeyboardInput(e.UserInputKey.D),
                    o = e.SceneManager.GetKeyboardInput(e.UserInputKey.LeftArrow),
                    l = e.SceneManager.GetKeyboardInput(e.UserInputKey.RightArrow);
                t === !0 ? e.SceneManager.k_vertical = e.Utilities.GetKeyboardInputValue(n, e.SceneManager.k_vertical, 1) : r === !0 ? e.SceneManager.k_vertical = e.Utilities.GetKeyboardInputValue(n, e.SceneManager.k_vertical, -1) : e.SceneManager.k_vertical = 0, e.UserInputOptions.UseArrowKeyRotation === !0 ? (i === !0 ? e.SceneManager.k_horizontal = e.Utilities.GetKeyboardInputValue(n, e.SceneManager.k_horizontal, 1) : a === !0 ? e.SceneManager.k_horizontal = e.Utilities.GetKeyboardInputValue(n, e.SceneManager.k_horizontal, -1) : e.SceneManager.k_horizontal = 0, l === !0 ? e.SceneManager.a_mousex = 1 : o === !0 ? e.SceneManager.a_mousex = -1 : e.SceneManager.a_mousex = 0) : i === !0 || l === !0 ? e.SceneManager.k_horizontal = e.Utilities.GetKeyboardInputValue(n, e.SceneManager.k_horizontal, 1) : a === !0 || o === !0 ? e.SceneManager.k_horizontal = e.Utilities.GetKeyboardInputValue(n, e.SceneManager.k_horizontal, -1) : e.SceneManager.k_horizontal = 0
            }
        }, n.updateUserInput = function(n) {
            e.SceneManager.EnableUserInput !== !1 && (e.SceneManager.PointerLockedFlag = n.getEngine().isPointerLock, e.SceneManager.tickKeyboardInput(n), e.SceneManager.x_horizontal = 0, e.SceneManager.x_vertical = 0, e.SceneManager.x_mousex = 0, e.SceneManager.x_mousey = 0, 0 !== e.SceneManager.j_horizontal ? e.SceneManager.x_horizontal = e.SceneManager.j_horizontal : 0 !== e.SceneManager.g_horizontal1 ? e.SceneManager.x_horizontal = e.SceneManager.g_horizontal1 : 0 !== e.SceneManager.k_horizontal && (e.SceneManager.x_horizontal = e.SceneManager.k_horizontal), 0 !== e.SceneManager.j_vertical ? e.SceneManager.x_vertical = e.SceneManager.j_vertical : 0 !== e.SceneManager.g_vertical1 ? e.SceneManager.x_vertical = e.SceneManager.g_vertical1 : 0 !== e.SceneManager.k_vertical && (e.SceneManager.x_vertical = e.SceneManager.k_vertical), 0 !== e.SceneManager.j_mousex ? e.SceneManager.x_mousex = e.SceneManager.j_mousex : 0 !== e.SceneManager.g_mousex1 ? e.SceneManager.x_mousex = e.SceneManager.g_mousex1 : 0 !== e.SceneManager.a_mousex ? e.SceneManager.x_mousex = e.SceneManager.a_mousex : 0 !== e.SceneManager.k_mousex && (e.SceneManager.x_mousex = e.SceneManager.k_mousex), 0 !== e.SceneManager.j_mousey ? e.SceneManager.x_mousey = e.SceneManager.j_mousey : 0 !== e.SceneManager.g_mousey1 ? e.SceneManager.x_mousey = e.SceneManager.g_mousey1 : 0 !== e.SceneManager.k_mousey && (e.SceneManager.x_mousey = e.SceneManager.k_mousey), e.SceneManager.horizontal = e.SceneManager.x_horizontal, e.SceneManager.vertical = e.SceneManager.x_vertical, e.SceneManager.mousex = e.SceneManager.x_mousex, e.SceneManager.mousey = e.SceneManager.x_mousey, e.SceneManager.wheel = e.SceneManager.x_wheel, e.SceneManager.horizontal2 = e.SceneManager.g_horizontal2, e.SceneManager.vertical2 = e.SceneManager.g_vertical2, e.SceneManager.mousex2 = e.SceneManager.g_mousex2, e.SceneManager.mousey2 = e.SceneManager.g_mousey2, e.SceneManager.horizontal3 = e.SceneManager.g_horizontal3, e.SceneManager.vertical3 = e.SceneManager.g_vertical3, e.SceneManager.mousex3 = e.SceneManager.g_mousex3, e.SceneManager.mousey3 = e.SceneManager.g_mousey3, e.SceneManager.horizontal4 = e.SceneManager.g_horizontal4, e.SceneManager.vertical4 = e.SceneManager.g_vertical4, e.SceneManager.mousex4 = e.SceneManager.g_mousex4, e.SceneManager.mousey4 = e.SceneManager.g_mousey4, e.SceneManager.k_mousex = 0, e.SceneManager.k_mousey = 0, e.SceneManager.x_mousey = 0)
        }, n.resetUserInput = function() {
            e.SceneManager.input = !1, e.SceneManager.keymap = {}, e.SceneManager.wheel = 0, e.SceneManager.mousex = 0, e.SceneManager.mousey = 0, e.SceneManager.vertical = 0, e.SceneManager.horizontal = 0, e.SceneManager.mousex2 = 0, e.SceneManager.mousey2 = 0, e.SceneManager.vertical2 = 0, e.SceneManager.horizontal2 = 0, e.SceneManager.mousex3 = 0, e.SceneManager.mousey3 = 0, e.SceneManager.vertical3 = 0, e.SceneManager.horizontal3 = 0, e.SceneManager.mousex4 = 0, e.SceneManager.mousey4 = 0, e.SceneManager.vertical4 = 0, e.SceneManager.horizontal4 = 0, e.SceneManager.a_mousex = 0, e.SceneManager.x_wheel = 0, e.SceneManager.x_mousex = 0, e.SceneManager.x_mousey = 0, e.SceneManager.x_vertical = 0, e.SceneManager.x_horizontal = 0, e.SceneManager.k_mousex = 0, e.SceneManager.k_mousey = 0, e.SceneManager.k_vertical = 0, e.SceneManager.k_horizontal = 0, e.SceneManager.j_mousex = 0, e.SceneManager.j_mousey = 0, e.SceneManager.j_vertical = 0, e.SceneManager.j_horizontal = 0, e.SceneManager.g_mousex1 = 0, e.SceneManager.g_mousey1 = 0, e.SceneManager.g_vertical1 = 0, e.SceneManager.g_horizontal1 = 0, e.SceneManager.g_mousex2 = 0, e.SceneManager.g_mousey2 = 0, e.SceneManager.g_vertical2 = 0, e.SceneManager.g_horizontal2 = 0, e.SceneManager.g_mousex3 = 0, e.SceneManager.g_mousey3 = 0, e.SceneManager.g_vertical3 = 0, e.SceneManager.g_horizontal3 = 0, e.SceneManager.g_mousex4 = 0, e.SceneManager.g_mousey4 = 0, e.SceneManager.g_vertical4 = 0, e.SceneManager.g_horizontal4 = 0, e.SceneManager.preventDefault = !1, e.SceneManager.mouseButtonUp = [], e.SceneManager.mouseButtonDown = [], e.SceneManager.mouseButtonPress = [], e.SceneManager.keyButtonUp = [], e.SceneManager.keyButtonDown = [], e.SceneManager.keyButtonPress = [], e.SceneManager.gamepad1ButtonUp = [], e.SceneManager.gamepad1ButtonDown = [], e.SceneManager.gamepad1ButtonPress = [], e.SceneManager.gamepad1DpadUp = [], e.SceneManager.gamepad1DpadDown = [], e.SceneManager.gamepad1DpadPress = [], e.SceneManager.gamepad1LeftTrigger = [], e.SceneManager.gamepad1RightTrigger = [], e.SceneManager.gamepad2ButtonUp = [], e.SceneManager.gamepad2ButtonDown = [], e.SceneManager.gamepad2ButtonPress = [], e.SceneManager.gamepad2DpadUp = [], e.SceneManager.gamepad2DpadDown = [], e.SceneManager.gamepad2DpadPress = [], e.SceneManager.gamepad2LeftTrigger = [], e.SceneManager.gamepad2RightTrigger = [], e.SceneManager.gamepad3ButtonUp = [], e.SceneManager.gamepad3ButtonDown = [], e.SceneManager.gamepad3ButtonPress = [], e.SceneManager.gamepad3DpadUp = [], e.SceneManager.gamepad3DpadDown = [], e.SceneManager.gamepad3DpadPress = [], e.SceneManager.gamepad3LeftTrigger = [], e.SceneManager.gamepad3RightTrigger = [], e.SceneManager.gamepad4ButtonUp = [], e.SceneManager.gamepad4ButtonDown = [], e.SceneManager.gamepad4ButtonPress = [], e.SceneManager.gamepad4DpadUp = [], e.SceneManager.gamepad4DpadDown = [], e.SceneManager.gamepad4DpadPress = [], e.SceneManager.gamepad4LeftTrigger = [], e.SceneManager.gamepad4RightTrigger = [], e.SceneManager.previousPosition = null
        }, n.resetKeyMapHandler = function(n) {
            e.SceneManager.keymap = {}
        }, n.inputKeyDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput === !1) return !1;
            var t = "k:" + n.keyCode.toString(),
                a = !1;
            return null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.keyButtonDown && e.SceneManager.keyButtonDown.length > 0 && e.SceneManager.keyButtonDown.forEach(function(e) {
                e(n.keyCode)
            }), a || null != e.SceneManager.keyButtonPress && e.SceneManager.keyButtonPress.length > 0 && e.SceneManager.keyButtonPress.forEach(function(e) {
                e.index === n.keyCode && e.action()
            }), e.SceneManager.preventDefault && n.preventDefault(), !0
        }, n.inputKeyUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput === !1) return !1;
            var t = "k:" + n.keyCode.toString();
            return e.SceneManager.keymap[t] = !1, null != e.SceneManager.keyButtonUp && e.SceneManager.keyButtonUp.length > 0 && e.SceneManager.keyButtonUp.forEach(function(e) {
                e(n.keyCode)
            }), e.SceneManager.preventDefault && n.preventDefault(), !0
        }, n.inputPointerWheelHandler = function(n) {
            if (e.SceneManager.EnableUserInput === !1) return !1;
            var t = n.deltaY ? -n.deltaY : n.wheelDelta / 40;
            return e.SceneManager.x_wheel = Math.abs(t) > e.UserInputOptions.PointerWheelDeadZone ? 0 + t : 0, e.SceneManager.preventDefault && n.preventDefault(), !0
        }, n.inputPointerDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput === !1) return !1;
            e.SceneManager.previousPosition = {
                x: n.clientX,
                y: n.clientY
            };
            var t = "p:" + n.button.toString(),
                a = !1;
            return null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.mouseButtonDown && e.SceneManager.mouseButtonDown.length > 0 && e.SceneManager.mouseButtonDown.forEach(function(e) {
                e(n.button)
            }), a || null != e.SceneManager.mouseButtonPress && e.SceneManager.mouseButtonPress.length > 0 && e.SceneManager.mouseButtonPress.forEach(function(e) {
                e.index === n.button && e.action()
            }), e.SceneManager.preventDefault && n.preventDefault(), !0
        }, n.inputPointerUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput === !1) return !1;
            e.SceneManager.previousPosition = null, e.SceneManager.k_mousex = 0, e.SceneManager.k_mousey = 0;
            var t = "p:" + n.button.toString();
            return e.SceneManager.keymap[t] = !1, null != e.SceneManager.mouseButtonUp && e.SceneManager.mouseButtonUp.length > 0 && e.SceneManager.mouseButtonUp.forEach(function(e) {
                e(n.button)
            }), e.SceneManager.preventDefault && n.preventDefault(), !0
        }, n.inputPointerMoveHandler = function(n) {
            if (e.SceneManager.EnableUserInput === !1) return !1;
            if (e.SceneManager.VirtualJoystickEnabled === !1) {
                var t = 0,
                    a = 0;
                e.SceneManager.IsPointerLocked() ? (t = n.movementX || n.mozMovementX || n.webkitMovementX || n.msMovementX || 0, a = n.movementY || n.mozMovementY || n.webkitMovementY || n.msMovementY || 0, e.SceneManager.previousPosition = null) : null != e.SceneManager.previousPosition && (t = n.clientX - e.SceneManager.previousPosition.x, a = n.clientY - e.SceneManager.previousPosition.y, e.SceneManager.previousPosition = {
                    x: n.clientX,
                    y: n.clientY
                }), e.UserInputOptions.PointerMouseInverted === !0 && (t *= -1, a *= -1), e.SceneManager.rightHanded && (t *= -1);
                var r = t * e.UserInputOptions.PointerAngularSensibility * .1,
                    i = a * e.UserInputOptions.PointerAngularSensibility * .1;
                Math.abs(t) <= e.UserInputOptions.PointerMouseDeadZone && (r = 0), Math.abs(a) <= e.UserInputOptions.PointerMouseDeadZone && (i = 0), e.SceneManager.k_mousex += r, e.SceneManager.k_mousey += i
            }
            return e.SceneManager.preventDefault && n.preventDefault(), !0
        }, n.inputOneButtonDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = "b1:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad1ButtonDown && e.SceneManager.gamepad1ButtonDown.length > 0 && e.SceneManager.gamepad1ButtonDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad1ButtonPress && e.SceneManager.gamepad1ButtonPress.length > 0 && e.SceneManager.gamepad1ButtonPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputOneButtonUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = "b1:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad1ButtonUp && e.SceneManager.gamepad1ButtonUp.length > 0 && e.SceneManager.gamepad1ButtonUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputOneXboxDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = "d1:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad1DpadDown && e.SceneManager.gamepad1DpadDown.length > 0 && e.SceneManager.gamepad1DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad1DpadPress && e.SceneManager.gamepad1DpadPress.length > 0 && e.SceneManager.gamepad1DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputOneShockDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = "d1:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad1DpadDown && e.SceneManager.gamepad1DpadDown.length > 0 && e.SceneManager.gamepad1DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad1DpadPress && e.SceneManager.gamepad1DpadPress.length > 0 && e.SceneManager.gamepad1DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputOneXboxDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = "d1:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad1DpadUp && e.SceneManager.gamepad1DpadUp.length > 0 && e.SceneManager.gamepad1DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputOneShockDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = "d1:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad1DpadUp && e.SceneManager.gamepad1DpadUp.length > 0 && e.SceneManager.gamepad1DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputOneXboxLeftTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1 && (e.SceneManager.keymap["t1:0"] = n, null != e.SceneManager.gamepad1LeftTrigger && e.SceneManager.gamepad1LeftTrigger.length > 0 && e.SceneManager.gamepad1LeftTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputOneXboxRightTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1 && (e.SceneManager.keymap["t1:1"] = n, null != e.SceneManager.gamepad1RightTrigger && e.SceneManager.gamepad1RightTrigger.length > 0 && e.SceneManager.gamepad1RightTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputOneLeftStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadLStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadLStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_horizontal1 = e.UserInputOptions.GamepadLStickXInverted ? -t.x : t.x, e.SceneManager.g_vertical1 = e.UserInputOptions.GamepadLStickYInverted ? t.y : -t.y
            }
        }, n.inputOneRightStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad1) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadRStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadRStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_mousex1 = e.UserInputOptions.GamepadRStickXInverted ? -t.x : t.x, e.SceneManager.g_mousey1 = e.UserInputOptions.GamepadRStickYInverted ? -t.y : t.y
            }
        }, n.inputTwoButtonDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = "b2:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad2ButtonDown && e.SceneManager.gamepad2ButtonDown.length > 0 && e.SceneManager.gamepad2ButtonDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad2ButtonPress && e.SceneManager.gamepad2ButtonPress.length > 0 && e.SceneManager.gamepad2ButtonPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputTwoButtonUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = "b2:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad2ButtonUp && e.SceneManager.gamepad2ButtonUp.length > 0 && e.SceneManager.gamepad2ButtonUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputTwoXboxDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = "d2:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad2DpadDown && e.SceneManager.gamepad2DpadDown.length > 0 && e.SceneManager.gamepad2DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad2DpadPress && e.SceneManager.gamepad2DpadPress.length > 0 && e.SceneManager.gamepad2DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputTwoShockDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = "d2:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad2DpadDown && e.SceneManager.gamepad2DpadDown.length > 0 && e.SceneManager.gamepad2DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad2DpadPress && e.SceneManager.gamepad2DpadPress.length > 0 && e.SceneManager.gamepad2DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputTwoXboxDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = "d2:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad2DpadUp && e.SceneManager.gamepad2DpadUp.length > 0 && e.SceneManager.gamepad2DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputTwoShockDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = "d2:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad2DpadUp && e.SceneManager.gamepad2DpadUp.length > 0 && e.SceneManager.gamepad2DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputTwoXboxLeftTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2 && (e.SceneManager.keymap["t2:0"] = n, null != e.SceneManager.gamepad2LeftTrigger && e.SceneManager.gamepad2LeftTrigger.length > 0 && e.SceneManager.gamepad2LeftTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputTwoXboxRightTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2 && (e.SceneManager.keymap["t2:1"] = n, null != e.SceneManager.gamepad2RightTrigger && e.SceneManager.gamepad2RightTrigger.length > 0 && e.SceneManager.gamepad2RightTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputTwoLeftStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadLStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadLStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_horizontal2 = e.UserInputOptions.GamepadLStickXInverted ? -t.x : t.x, e.SceneManager.g_vertical2 = e.UserInputOptions.GamepadLStickYInverted ? t.y : -t.y
            }
        }, n.inputTwoRightStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad2) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadRStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadRStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_mousex2 = e.UserInputOptions.GamepadRStickXInverted ? -t.x : t.x, e.SceneManager.g_mousey2 = e.UserInputOptions.GamepadRStickYInverted ? -t.y : t.y
            }
        }, n.inputThreeButtonDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = "b3:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad3ButtonDown && e.SceneManager.gamepad3ButtonDown.length > 0 && e.SceneManager.gamepad3ButtonDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad3ButtonPress && e.SceneManager.gamepad3ButtonPress.length > 0 && e.SceneManager.gamepad3ButtonPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputThreeButtonUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = "b3:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad3ButtonUp && e.SceneManager.gamepad3ButtonUp.length > 0 && e.SceneManager.gamepad3ButtonUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputThreeXboxDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = "d3:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad3DpadDown && e.SceneManager.gamepad3DpadDown.length > 0 && e.SceneManager.gamepad3DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad3DpadPress && e.SceneManager.gamepad3DpadPress.length > 0 && e.SceneManager.gamepad3DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputThreeShockDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = "d3:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad3DpadDown && e.SceneManager.gamepad3DpadDown.length > 0 && e.SceneManager.gamepad3DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad3DpadPress && e.SceneManager.gamepad3DpadPress.length > 0 && e.SceneManager.gamepad3DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputThreeXboxDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = "d3:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad3DpadUp && e.SceneManager.gamepad3DpadUp.length > 0 && e.SceneManager.gamepad3DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputThreeShockDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = "d3:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad3DpadUp && e.SceneManager.gamepad3DpadUp.length > 0 && e.SceneManager.gamepad3DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputThreeXboxLeftTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3 && (e.SceneManager.keymap["t3:0"] = n, null != e.SceneManager.gamepad3LeftTrigger && e.SceneManager.gamepad3LeftTrigger.length > 0 && e.SceneManager.gamepad3LeftTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputThreeXboxRightTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3 && (e.SceneManager.keymap["t3:1"] = n, null != e.SceneManager.gamepad3RightTrigger && e.SceneManager.gamepad3RightTrigger.length > 0 && e.SceneManager.gamepad3RightTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputThreeLeftStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadLStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadLStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_horizontal3 = e.UserInputOptions.GamepadLStickXInverted ? -t.x : t.x, e.SceneManager.g_vertical3 = e.UserInputOptions.GamepadLStickYInverted ? t.y : -t.y
            }
        }, n.inputThreeRightStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad3) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadRStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadRStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_mousex3 = e.UserInputOptions.GamepadRStickXInverted ? -t.x : t.x, e.SceneManager.g_mousey3 = e.UserInputOptions.GamepadRStickYInverted ? -t.y : t.y
            }
        }, n.inputFourButtonDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = "b4:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad4ButtonDown && e.SceneManager.gamepad4ButtonDown.length > 0 && e.SceneManager.gamepad4ButtonDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad4ButtonPress && e.SceneManager.gamepad4ButtonPress.length > 0 && e.SceneManager.gamepad4ButtonPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputFourButtonUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = "b4:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad4ButtonUp && e.SceneManager.gamepad4ButtonUp.length > 0 && e.SceneManager.gamepad4ButtonUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputFourXboxDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = "d4:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad4DpadDown && e.SceneManager.gamepad4DpadDown.length > 0 && e.SceneManager.gamepad4DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad4DpadPress && e.SceneManager.gamepad4DpadPress.length > 0 && e.SceneManager.gamepad4DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputFourShockDPadDownHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = "d4:" + n.toString(),
                    a = !1;
                null != e.SceneManager.keymap[t] && (a = e.SceneManager.keymap[t]), e.SceneManager.keymap[t] = !0, null != e.SceneManager.gamepad4DpadDown && e.SceneManager.gamepad4DpadDown.length > 0 && e.SceneManager.gamepad4DpadDown.forEach(function(e) {
                    e(n)
                }), a || null != e.SceneManager.gamepad4DpadPress && e.SceneManager.gamepad4DpadPress.length > 0 && e.SceneManager.gamepad4DpadPress.forEach(function(e) {
                    e.index === n && e.action()
                })
            }
        }, n.inputFourXboxDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = "d4:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad4DpadUp && e.SceneManager.gamepad4DpadUp.length > 0 && e.SceneManager.gamepad4DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputFourShockDPadUpHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = "d4:" + n.toString();
                e.SceneManager.keymap[t] = !1, null != e.SceneManager.gamepad4DpadUp && e.SceneManager.gamepad4DpadUp.length > 0 && e.SceneManager.gamepad4DpadUp.forEach(function(e) {
                    e(n)
                })
            }
        }, n.inputFourXboxLeftTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4 && (e.SceneManager.keymap["t4:0"] = n, null != e.SceneManager.gamepad4LeftTrigger && e.SceneManager.gamepad4LeftTrigger.length > 0 && e.SceneManager.gamepad4LeftTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputFourXboxRightTriggerHandler = function(n) {
            e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4 && (e.SceneManager.keymap["t4:1"] = n, null != e.SceneManager.gamepad4RightTrigger && e.SceneManager.gamepad4RightTrigger.length > 0 && e.SceneManager.gamepad4RightTrigger.forEach(function(e) {
                e(n)
            }))
        }, n.inputFourLeftStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadLStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadLStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_horizontal4 = e.UserInputOptions.GamepadLStickXInverted ? -t.x : t.x, e.SceneManager.g_vertical4 = e.UserInputOptions.GamepadLStickYInverted ? t.y : -t.y
            }
        }, n.inputFourRightStickHandler = function(n) {
            if (e.SceneManager.EnableUserInput !== !1 && null != e.SceneManager.gamepad4) {
                var t = n,
                    a = t.x * e.UserInputOptions.GamepadRStickSensibility,
                    r = t.y * e.UserInputOptions.GamepadRStickSensibility;
                t.x = Math.abs(a) > e.UserInputOptions.GamepadDeadStickValue ? a : 0, t.y = Math.abs(r) > e.UserInputOptions.GamepadDeadStickValue ? r : 0, e.SceneManager.g_mousex4 = e.UserInputOptions.GamepadRStickXInverted ? -t.x : t.x, e.SceneManager.g_mousey4 = e.UserInputOptions.GamepadRStickYInverted ? -t.y : t.y
            }
        }, n.inputManagerGamepadConnected = function(n, t) {
            if (null == e.SceneManager.gamepad1 && 0 === n.index)
                if (e.SceneManager.gamepad1 = n, e.Tools.Log("Gamepad One Connected: " + e.SceneManager.gamepad1.id), e.SceneManager.gamepad1 instanceof e.Xbox360Pad) {
                    e.SceneManager.gamepad1Type = e.GamepadType.Xbox360;
                    var a = e.SceneManager.gamepad1;
                    a.onbuttonup(e.SceneManager.inputOneButtonUpHandler), a.onbuttondown(e.SceneManager.inputOneButtonDownHandler), a.onleftstickchanged(e.SceneManager.inputOneLeftStickHandler), a.onrightstickchanged(e.SceneManager.inputOneRightStickHandler), a.ondpadup(e.SceneManager.inputOneXboxDPadUpHandler), a.ondpaddown(e.SceneManager.inputOneXboxDPadDownHandler), a.onlefttriggerchanged(e.SceneManager.inputOneXboxLeftTriggerHandler), a.onrighttriggerchanged(e.SceneManager.inputOneXboxRightTriggerHandler)
                } else if (e.SceneManager.gamepad1 instanceof e.DualShockPad) {
                e.SceneManager.gamepad1Type = e.GamepadType.DualShock;
                var r = e.SceneManager.gamepad1;
                r.onbuttonup(e.SceneManager.inputOneButtonUpHandler), r.onbuttondown(e.SceneManager.inputOneButtonDownHandler), r.onleftstickchanged(e.SceneManager.inputOneLeftStickHandler), r.onrightstickchanged(e.SceneManager.inputOneRightStickHandler), r.ondpadup(e.SceneManager.inputOneShockDPadUpHandler), r.ondpaddown(e.SceneManager.inputOneShockDPadDownHandler), r.onlefttriggerchanged(e.SceneManager.inputOneXboxLeftTriggerHandler), r.onrighttriggerchanged(e.SceneManager.inputOneXboxRightTriggerHandler)
            } else if (e.SceneManager.gamepad1 instanceof e.PoseEnabledController);
            else {
                e.SceneManager.gamepad1Type = e.GamepadType.Generic;
                var i = e.SceneManager.gamepad1;
                i.onbuttonup(e.SceneManager.inputOneButtonUpHandler), i.onbuttondown(e.SceneManager.inputOneButtonDownHandler), i.onleftstickchanged(e.SceneManager.inputOneLeftStickHandler), i.onrightstickchanged(e.SceneManager.inputOneRightStickHandler)
            }
            if (null == e.SceneManager.gamepad2 && 1 === n.index)
                if (e.SceneManager.gamepad2 = n, e.Tools.Log("Gamepad Two Connected: " + e.SceneManager.gamepad2.id), e.SceneManager.gamepad2 instanceof e.Xbox360Pad) {
                    e.SceneManager.gamepad2Type = e.GamepadType.Xbox360;
                    var o = e.SceneManager.gamepad2;
                    o.onbuttonup(e.SceneManager.inputTwoButtonUpHandler), o.onbuttondown(e.SceneManager.inputTwoButtonDownHandler), o.onleftstickchanged(e.SceneManager.inputTwoLeftStickHandler), o.onrightstickchanged(e.SceneManager.inputTwoRightStickHandler), o.ondpadup(e.SceneManager.inputTwoXboxDPadUpHandler), o.ondpaddown(e.SceneManager.inputTwoXboxDPadDownHandler), o.onlefttriggerchanged(e.SceneManager.inputTwoXboxLeftTriggerHandler), o.onrighttriggerchanged(e.SceneManager.inputTwoXboxRightTriggerHandler)
                } else if (e.SceneManager.gamepad2 instanceof e.DualShockPad) {
                e.SceneManager.gamepad2Type = e.GamepadType.DualShock;
                var l = e.SceneManager.gamepad2;
                l.onbuttonup(e.SceneManager.inputOneButtonUpHandler), l.onbuttondown(e.SceneManager.inputOneButtonDownHandler), l.onleftstickchanged(e.SceneManager.inputOneLeftStickHandler), l.onrightstickchanged(e.SceneManager.inputOneRightStickHandler), l.ondpadup(e.SceneManager.inputOneShockDPadUpHandler), l.ondpaddown(e.SceneManager.inputOneShockDPadDownHandler), l.onlefttriggerchanged(e.SceneManager.inputOneXboxLeftTriggerHandler), l.onrighttriggerchanged(e.SceneManager.inputOneXboxRightTriggerHandler)
            } else if (e.SceneManager.gamepad2 instanceof e.PoseEnabledController);
            else {
                e.SceneManager.gamepad2Type = e.GamepadType.Generic;
                var s = e.SceneManager.gamepad2;
                s.onbuttonup(e.SceneManager.inputTwoButtonUpHandler), s.onbuttondown(e.SceneManager.inputTwoButtonDownHandler), s.onleftstickchanged(e.SceneManager.inputTwoLeftStickHandler), s.onrightstickchanged(e.SceneManager.inputTwoRightStickHandler)
            }
            if (null == e.SceneManager.gamepad3 && 2 === n.index)
                if (e.SceneManager.gamepad3 = n, e.Tools.Log("Gamepad Three Connected: " + e.SceneManager.gamepad3.id), e.SceneManager.gamepad3 instanceof e.Xbox360Pad) {
                    e.SceneManager.gamepad3Type = e.GamepadType.Xbox360;
                    var u = e.SceneManager.gamepad3;
                    u.onbuttonup(e.SceneManager.inputThreeButtonUpHandler), u.onbuttondown(e.SceneManager.inputThreeButtonDownHandler), u.onleftstickchanged(e.SceneManager.inputThreeLeftStickHandler), u.onrightstickchanged(e.SceneManager.inputThreeRightStickHandler), u.ondpadup(e.SceneManager.inputThreeXboxDPadUpHandler), u.ondpaddown(e.SceneManager.inputThreeXboxDPadDownHandler), u.onlefttriggerchanged(e.SceneManager.inputThreeXboxLeftTriggerHandler), u.onrighttriggerchanged(e.SceneManager.inputThreeXboxRightTriggerHandler)
                } else if (e.SceneManager.gamepad3 instanceof e.DualShockPad) {
                var c = e.SceneManager.gamepad3;
                c.onbuttonup(e.SceneManager.inputOneButtonUpHandler), c.onbuttondown(e.SceneManager.inputOneButtonDownHandler), c.onleftstickchanged(e.SceneManager.inputOneLeftStickHandler), c.onrightstickchanged(e.SceneManager.inputOneRightStickHandler), c.ondpadup(e.SceneManager.inputOneShockDPadUpHandler), c.ondpaddown(e.SceneManager.inputOneShockDPadDownHandler), c.onlefttriggerchanged(e.SceneManager.inputOneXboxLeftTriggerHandler), c.onrighttriggerchanged(e.SceneManager.inputOneXboxRightTriggerHandler)
            } else if (e.SceneManager.gamepad3 instanceof e.PoseEnabledController);
            else {
                e.SceneManager.gamepad3Type = e.GamepadType.Generic;
                var d = e.SceneManager.gamepad3;
                d.onbuttonup(e.SceneManager.inputThreeButtonUpHandler), d.onbuttondown(e.SceneManager.inputThreeButtonDownHandler), d.onleftstickchanged(e.SceneManager.inputThreeLeftStickHandler), d.onrightstickchanged(e.SceneManager.inputThreeRightStickHandler)
            }
            if (null == e.SceneManager.gamepad4 && 3 === n.index)
                if (e.SceneManager.gamepad4 = n, e.Tools.Log("Gamepad Four Connected: " + e.SceneManager.gamepad4.id), e.SceneManager.gamepad4 instanceof e.Xbox360Pad) {
                    e.SceneManager.gamepad4Type = e.GamepadType.Xbox360;
                    var m = e.SceneManager.gamepad4;
                    m.onbuttonup(e.SceneManager.inputFourButtonUpHandler), m.onbuttondown(e.SceneManager.inputFourButtonDownHandler), m.onleftstickchanged(e.SceneManager.inputFourLeftStickHandler), m.onrightstickchanged(e.SceneManager.inputFourRightStickHandler), m.ondpadup(e.SceneManager.inputFourXboxDPadUpHandler), m.ondpaddown(e.SceneManager.inputFourXboxDPadDownHandler), m.onlefttriggerchanged(e.SceneManager.inputFourXboxLeftTriggerHandler), m.onrighttriggerchanged(e.SceneManager.inputFourXboxRightTriggerHandler)
                } else if (e.SceneManager.gamepad4 instanceof e.DualShockPad) {
                var p = e.SceneManager.gamepad4;
                p.onbuttonup(e.SceneManager.inputOneButtonUpHandler), p.onbuttondown(e.SceneManager.inputOneButtonDownHandler), p.onleftstickchanged(e.SceneManager.inputOneLeftStickHandler), p.onrightstickchanged(e.SceneManager.inputOneRightStickHandler), p.ondpadup(e.SceneManager.inputOneShockDPadUpHandler), p.ondpaddown(e.SceneManager.inputOneShockDPadDownHandler), p.onlefttriggerchanged(e.SceneManager.inputOneXboxLeftTriggerHandler), p.onrighttriggerchanged(e.SceneManager.inputOneXboxRightTriggerHandler)
            } else if (e.SceneManager.gamepad4 instanceof e.PoseEnabledController);
            else {
                e.SceneManager.gamepad4Type = e.GamepadType.Generic;
                var g = e.SceneManager.gamepad4;
                g.onbuttonup(e.SceneManager.inputFourButtonUpHandler), g.onbuttondown(e.SceneManager.inputFourButtonDownHandler), g.onleftstickchanged(e.SceneManager.inputFourLeftStickHandler), g.onrightstickchanged(e.SceneManager.inputFourRightStickHandler)
            }
            null != e.SceneManager.GamepadConnected && e.SceneManager.GamepadConnected(n, t)
        }, n.inputManagerGamepadDisconnected = function(n, t) {
            null != e.SceneManager.GamepadDisconnected && e.SceneManager.GamepadDisconnected(n, t)
        }, n.inputManagerLeftControllerMainButton = function(e, n) {}, n.inputManagerLeftControllerPadState = function(e, n) {}, n.inputManagerLeftControllerPadValues = function(e, n) {}, n.inputManagerLeftControllerAuxButton = function(e, n) {}, n.inputManagerLeftControllerTriggered = function(e, n) {}, n.inputManagerRightControllerMainButton = function(e, n) {}, n.inputManagerRightControllerPadState = function(e, n) {}, n.inputManagerRightControllerPadValues = function(e, n) {}, n.inputManagerRightControllerAuxButton = function(e, n) {}, n.inputManagerRightControllerTriggered = function(e, n) {}, n.inputManagerControllerConnected = function(e, n) {}, n.EnableUserInput = !0, n.RenderLoopReady = !0, n.PauseRenderLoop = !1, n.LostRenderContext = !1, n.AutoUpdateProgress = !0, n.PhysicsCapsuleShape = 0, n.SupportSRGBBuffers = !1, n.VirtualJoystickEnabled = !1, n.WaitForSeconds = function(n) {
            return new Promise(function(t) {
                return e.SceneManager.SetTimeout(1e3 * n, t)
            })
        }, n.OnPreRenderLoopObservable = new e.Observable, n.OnPostRenderLoopObservable = new e.Observable, n.OnEngineResizeObservable = new e.Observable, n.OnLoadCompleteObservable = new e.Observable, n.OnRebuildContextObservable = new e.Observable, n.OnAssetManagerProgress = null, n.SceneParsingEnabled = !0, n.AdvDynamicTexture = null, n.OnSetupPhysicsPlugin = null, n.TempVRayDest = null, n.TempVRayOrigin = null, n.TempShapeVector = null, n.TempPhysicsWorld = null, n.TempTransformFrom = null, n.TempTransformTo = null, n.TempCastEndPoint = null, n.TempRaycastResult = null, n.ClosestRayResultCallback = null, n.ClosestConvexResultCallback = null, n.MAX_AGENT_COUNT = 200, n.MAX_AGENT_RADIUS = 2, n.NavigationMesh = null, n.CrowdInterface = null, n.PluginInstance = null, n.OnNavMeshReadyObservable = new e.Observable, n.GamepadManager = null, n.GamepadConnected = null, n.GamepadDisconnected = null, n.PointerLockedFlag = !1, n.LockMousePointerObserver = null, n.input = !1, n.keymap = {}, n.wheel = 0, n.mousex = 0, n.mousey = 0, n.vertical = 0, n.horizontal = 0, n.mousex2 = 0, n.mousey2 = 0, n.vertical2 = 0, n.horizontal2 = 0, n.mousex3 = 0, n.mousey3 = 0, n.vertical3 = 0, n.horizontal3 = 0, n.mousex4 = 0, n.mousey4 = 0, n.vertical4 = 0, n.horizontal4 = 0, n.a_mousex = 0, n.x_wheel = 0, n.x_mousex = 0, n.x_mousey = 0, n.x_vertical = 0, n.x_horizontal = 0, n.k_mousex = 0, n.k_mousey = 0, n.k_vertical = 0, n.k_horizontal = 0, n.j_mousex = 0, n.j_mousey = 0, n.j_vertical = 0, n.j_horizontal = 0, n.g_mousex1 = 0, n.g_mousey1 = 0, n.g_vertical1 = 0, n.g_horizontal1 = 0, n.g_mousex2 = 0, n.g_mousey2 = 0, n.g_vertical2 = 0, n.g_horizontal2 = 0, n.g_mousex3 = 0, n.g_mousey3 = 0, n.g_vertical3 = 0, n.g_horizontal3 = 0, n.g_mousex4 = 0, n.g_mousey4 = 0, n.g_vertical4 = 0, n.g_horizontal4 = 0, n.mouseButtonPress = [], n.mouseButtonDown = [], n.mouseButtonUp = [], n.keyButtonPress = [], n.keyButtonDown = [], n.keyButtonUp = [], n.previousPosition = null, n.preventDefault = !1, n.rightHanded = !0, n.gamepad1 = null, n.gamepad1Type = -1, n.gamepad1ButtonPress = [], n.gamepad1ButtonDown = [], n.gamepad1ButtonUp = [], n.gamepad1DpadPress = [], n.gamepad1DpadDown = [], n.gamepad1DpadUp = [], n.gamepad1LeftTrigger = [], n.gamepad1RightTrigger = [], n.gamepad2 = null, n.gamepad2Type = -1, n.gamepad2ButtonPress = [], n.gamepad2ButtonDown = [], n.gamepad2ButtonUp = [], n.gamepad2DpadPress = [], n.gamepad2DpadDown = [], n.gamepad2DpadUp = [], n.gamepad2LeftTrigger = [], n.gamepad2RightTrigger = [], n.gamepad3 = null, n.gamepad3Type = -1, n.gamepad3ButtonPress = [], n.gamepad3ButtonDown = [], n.gamepad3ButtonUp = [], n.gamepad3DpadPress = [], n.gamepad3DpadDown = [], n.gamepad3DpadUp = [], n.gamepad3LeftTrigger = [], n.gamepad3RightTrigger = [], n.gamepad4 = null, n.gamepad4Type = -1, n.gamepad4ButtonPress = [], n.gamepad4ButtonDown = [], n.gamepad4ButtonUp = [], n.gamepad4DpadPress = [], n.gamepad4DpadDown = [], n.gamepad4DpadUp = [], n.gamepad4LeftTrigger = [], n.gamepad4RightTrigger = [], n.debugLayerVisible = !1, n
    }();
    e.SceneManager = n
}(BABYLON || (BABYLON = {}));
var SM = BABYLON.SceneManager,
    __extends = this && this.__extends || function() {
        var e = function(n, t) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                })(n, t)
        };
        return function(n, t) {
            function a() {
                this.constructor = n
            }
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            e(n, t), n.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
        }
    }(),
    BABYLON;
! function(e) {
    var n;
    ! function(n) {
        n[n.Deg2Rad = 2 * Math.PI / 360] = "Deg2Rad", n[n.Rad2Deg = 1 / e.System.Deg2Rad] = "Rad2Deg", n[n.Epsilon = 1e-5] = "Epsilon", n[n.SingleEpsilon = 1.401298e-45] = "SingleEpsilon", n[n.EpsilonNormalSqrt = 1e-15] = "EpsilonNormalSqrt", n[n.Kph2Mph = .621371] = "Kph2Mph", n[n.Mph2Kph = 1.60934] = "Mph2Kph", n[n.Mps2Kph = 3.6] = "Mps2Kph", n[n.Meter2Inch = 39.3701] = "Meter2Inch", n[n.Inch2Meter = .0254] = "Inch2Meter", n[n.Gravity = 9.81] = "Gravity", n[n.Gravity3G = 29.400000000000002] = "Gravity3G", n[n.SkidFactor = .25] = "SkidFactor", n[n.MaxInteger = 2147483647] = "MaxInteger", n[n.WalkingVelocity = 4.4] = "WalkingVelocity", n[n.TerminalVelocity = 55] = "TerminalVelocity", n[n.SmoothDeltaFactor = .2] = "SmoothDeltaFactor", n[n.ToLinearSpace = 2.2] = "ToLinearSpace", n[n.ToGammaSpace = .45454545454545453] = "ToGammaSpace"
    }(n = e.System || (e.System = {}));
    var t;
    ! function(e) {
        e[e.Default = -1] = "Default", e[e.Right = 0] = "Right", e[e.Left = 1] = "Left"
    }(t = e.Handedness || (e.Handedness = {}));
    var a;
    ! function(e) {
        e[e.ExactMatch = 0] = "ExactMatch", e[e.StartsWith = 1] = "StartsWith", e[e.EndsWith = 2] = "EndsWith", e[e.IndexOf = 3] = "IndexOf"
    }(a = e.SearchType || (e.SearchType = {}));
    var r;
    ! function(e) {
        e[e.Auto = 0] = "Auto", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Three = 3] = "Three", e[e.Four = 4] = "Four"
    }(r = e.PlayerNumber || (e.PlayerNumber = {}));
    var i;
    ! function(e) {
        e[e.FirstPerson = 0] = "FirstPerson", e[e.ThirdPerson = 1] = "ThirdPerson"
    }(i = e.PlayerControl || (e.PlayerControl = {}));
    var o;
    ! function(e) {
        e[e.High = 0] = "High", e[e.Medium = 1] = "Medium", e[e.Low = 2] = "Low"
    }(o = e.RenderQuality || (e.RenderQuality = {}));
    var l;
    ! function(e) {
        e[e.None = -1] = "None", e[e.Generic = 0] = "Generic", e[e.Xbox360 = 1] = "Xbox360", e[e.DualShock = 2] = "DualShock", e[e.PoseController = 3] = "PoseController"
    }(l = e.GamepadType || (e.GamepadType = {}));
    var s;
    ! function(e) {
        e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
    }(s = e.Xbox360Trigger || (e.Xbox360Trigger = {}));
    var u;
    ! function(e) {
        e[e.DirectVelocity = 0] = "DirectVelocity", e[e.AppliedForces = 1] = "AppliedForces"
    }(u = e.MovementType || (e.MovementType = {}));
    var c;
    ! function(e) {
        e[e.Top = 0] = "Top", e[e.Left = 1] = "Left", e[e.Right = 2] = "Right", e[e.Bottom = 3] = "Bottom"
    }(c = e.CollisionContact || (e.CollisionContact = {}));
    var d;
    ! function(e) {
        e[e.AABB = 0] = "AABB", e[e.OBB = 1] = "OBB"
    }(d = e.IntersectionPrecision || (e.IntersectionPrecision = {}));
    var m;
    ! function(e) {
        e[e.DefaultFilter = 1] = "DefaultFilter", e[e.StaticFilter = 2] = "StaticFilter", e[e.KinematicFilter = 4] = "KinematicFilter", e[e.DebrisFilter = 8] = "DebrisFilter", e[e.SensorTrigger = 16] = "SensorTrigger", e[e.CharacterFilter = 32] = "CharacterFilter", e[e.GroundFilter = 64] = "GroundFilter", e[e.AllFilter = -1] = "AllFilter"
    }(m = e.CollisionFilters || (e.CollisionFilters = {}));
    var p;
    ! function(e) {
        e[e.ACTIVE_TAG = 1] = "ACTIVE_TAG", e[e.ISLAND_SLEEPING = 2] = "ISLAND_SLEEPING", e[e.WANTS_DEACTIVATION = 3] = "WANTS_DEACTIVATION", e[e.DISABLE_DEACTIVATION = 4] = "DISABLE_DEACTIVATION", e[e.DISABLE_SIMULATION = 5] = "DISABLE_SIMULATION"
    }(p = e.CollisionState || (e.CollisionState = {}));
    var g;
    ! function(e) {
        e[e.CF_STATIC_OBJECT = 1] = "CF_STATIC_OBJECT", e[e.CF_KINEMATIC_OBJECT = 2] = "CF_KINEMATIC_OBJECT", e[e.CF_NO_CONTACT_RESPONSE = 4] = "CF_NO_CONTACT_RESPONSE", e[e.CF_CUSTOM_MATERIAL_CALLBACK = 8] = "CF_CUSTOM_MATERIAL_CALLBACK", e[e.CF_CHARACTER_OBJECT = 16] = "CF_CHARACTER_OBJECT", e[e.CF_DISABLE_VISUALIZE_OBJECT = 32] = "CF_DISABLE_VISUALIZE_OBJECT", e[e.CF_DISABLE_SPU_COLLISION_PROCESSING = 64] = "CF_DISABLE_SPU_COLLISION_PROCESSING", e[e.CF_HAS_CONTACT_STIFFNESS_DAMPING = 128] = "CF_HAS_CONTACT_STIFFNESS_DAMPING", e[e.CF_HAS_CUSTOM_DEBUG_RENDERING_COLOR = 256] = "CF_HAS_CUSTOM_DEBUG_RENDERING_COLOR", e[e.CF_HAS_FRICTION_ANCHOR = 512] = "CF_HAS_FRICTION_ANCHOR", e[e.CF_HAS_COLLISION_SOUND_TRIGGER = 1024] = "CF_HAS_COLLISION_SOUND_TRIGGER"
    }(g = e.CollisionFlags || (e.CollisionFlags = {}));
    var h;
    ! function(e) {
        e[e.Left = 0] = "Left", e[e.Middle = 1] = "Middle", e[e.Right = 2] = "Right"
    }(h = e.UserInputPointer || (e.UserInputPointer = {}));
    var f;
    ! function(e) {
        e[e.Horizontal = 0] = "Horizontal", e[e.Vertical = 1] = "Vertical", e[e.ClientX = 2] = "ClientX", e[e.ClientY = 3] = "ClientY", e[e.MouseX = 4] = "MouseX", e[e.MouseY = 5] = "MouseY", e[e.Wheel = 6] = "Wheel"
    }(f = e.UserInputAxis || (e.UserInputAxis = {}));
    var S;
    ! function(e) {
        e[e.BackSpace = 8] = "BackSpace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Shift = 16] = "Shift", e[e.Ctrl = 17] = "Ctrl", e[e.Alt = 18] = "Alt", e[e.Pause = 19] = "Pause", e[e.Break = 19] = "Break", e[e.CapsLock = 20] = "CapsLock", e[e.Escape = 27] = "Escape", e[e.SpaceBar = 32] = "SpaceBar", e[e.PageUp = 33] = "PageUp", e[e.PageDown = 34] = "PageDown", e[e.End = 35] = "End", e[e.Home = 36] = "Home", e[e.LeftArrow = 37] = "LeftArrow", e[e.UpArrow = 38] = "UpArrow", e[e.RightArrow = 39] = "RightArrow", e[e.DownArrow = 40] = "DownArrow", e[e.Insert = 45] = "Insert", e[e.Delete = 46] = "Delete", e[e.Num0 = 48] = "Num0", e[e.Num1 = 49] = "Num1", e[e.Num2 = 50] = "Num2", e[e.Num3 = 51] = "Num3", e[e.Num4 = 52] = "Num4", e[e.Num5 = 53] = "Num5", e[e.Num6 = 54] = "Num6", e[e.Num7 = 55] = "Num7", e[e.Num8 = 56] = "Num8", e[e.Num9 = 57] = "Num9", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.LeftWindowKey = 91] = "LeftWindowKey", e[e.RightWindowKey = 92] = "RightWindowKey", e[e.SelectKey = 93] = "SelectKey", e[e.Numpad0 = 96] = "Numpad0", e[e.Numpad1 = 97] = "Numpad1", e[e.Numpad2 = 98] = "Numpad2", e[e.Numpad3 = 99] = "Numpad3", e[e.Numpad4 = 100] = "Numpad4", e[e.Numpad5 = 101] = "Numpad5", e[e.Numpad6 = 102] = "Numpad6", e[e.Numpad7 = 103] = "Numpad7", e[e.Numpad8 = 104] = "Numpad8", e[e.Numpad9 = 105] = "Numpad9", e[e.Multiply = 106] = "Multiply", e[e.Add = 107] = "Add", e[e.Subtract = 109] = "Subtract", e[e.DecimalPoint = 110] = "DecimalPoint", e[e.Divide = 111] = "Divide", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.NumLock = 144] = "NumLock", e[e.ScrollLock = 145] = "ScrollLock", e[e.SemiColon = 186] = "SemiColon", e[e.EqualSign = 187] = "EqualSign", e[e.Comma = 188] = "Comma", e[e.Dash = 189] = "Dash", e[e.Period = 190] = "Period", e[e.ForwardSlash = 191] = "ForwardSlash", e[e.GraveAccent = 192] = "GraveAccent", e[e.OpenBracket = 219] = "OpenBracket", e[e.BackSlash = 220] = "BackSlash", e[e.CloseBraket = 221] = "CloseBraket", e[e.SingleQuote = 222] = "SingleQuote"
    }(S = e.UserInputKey || (e.UserInputKey = {}));
    var M = function() {
        function e() {}
        return e.KeyboardSmoothing = !1, e.KeyboardMoveSensibility = 3, e.KeyboardMoveDeadZone = .001, e.GamepadDeadStickValue = .25, e.GamepadLStickXInverted = !1, e.GamepadLStickYInverted = !1, e.GamepadRStickXInverted = !1, e.GamepadRStickYInverted = !0, e.GamepadLStickSensibility = 1, e.GamepadRStickSensibility = 1, e.PointerAngularSensibility = .5, e.PointerWheelDeadZone = .1, e.PointerMouseDeadZone = .1, e.PointerMouseInverted = !0, e.UseCanvasElement = !0, e.UseArrowKeyRotation = !1, e
    }();
    e.UserInputOptions = M;
    var y = function() {
        function e() {}
        return e
    }();
    e.RequestHeader = y;
    var v = function() {
        function e() {
            this.mesh = null, this.state = 0
        }
        return e
    }();
    e.TriggerVolume = v;
    var b = function() {
        function e() {
            this.ListenerDictionary = {}
        }
        return e.prototype.AddListener = function(e, n) {
            var t;
            null == this.ListenerDictionary[e] ? (t = [], this.ListenerDictionary[e] = t) : t = this.ListenerDictionary[e], t.push(n)
        }, e.prototype.RemoveListener = function(e, n) {
            var t = this.ListenerDictionary[e];
            if (null != t) {
                var a = t.findIndex(function(e) {
                    return n == e
                });
                a >= 0 && t.splice(a, 1)
            }
        }, e.prototype.RaiseMessage = function(e, n) {
            void 0 === n && (n = null);
            var t = this.ListenerDictionary[e];
            null != t && t.forEach(function(e) {
                e(n)
            })
        }, e
    }();
    e.EventMessageBus = b;
    var T = function() {
        function n(e, n, t, a) {
            void 0 === t && (t = !1), void 0 === a && (a = !0), this.assetContainer = null, this.prefabName = null, this.makeNewMaterials = !1, this.cloneAnimations = !0, this.AvailableInstances = [], this.assetContainer = e, this.prefabName = n, this.makeNewMaterials = t, this.cloneAnimations = a
        }
        return n.prototype.GetInstance = function(n, t) {
            void 0 === n && (n = null), void 0 === t && (t = null);
            var a = this.AvailableInstances.length > 0 ? this.AvailableInstances.pop() : this.CreateNewInstance();
            return null != a && (null != n ? a.position.copyFrom(n) : a.position.set(0, 0, 0), null != t ? null != a.rotationQuaternion ? a.rotationQuaternion.copyFrom(t) : a.rotationQuaternion = t.clone() : null != a.rotationQuaternion ? a.rotationQuaternion.set(0, 0, 0, 1) : a.rotationQuaternion = new e.Quaternion(0, 0, 0, 1), a.setEnabled(!0)), a
        }, n.prototype.ReturnInstance = function(n) {
            null != n && (n.setEnabled(!1), n.position.set(0, 0, 0), null != n.rotationQuaternion ? n.rotationQuaternion.set(0, 0, 0, 1) : n.rotationQuaternion = new e.Quaternion(0, 0, 0, 1), n.name = this.prefabName + ".Unassigned", this.AvailableInstances.push(n))
        }, n.prototype.PrePopulatePool = function(e) {
            for (var n = 0; n < e; n++) {
                var t = this.CreateNewInstance();
                null != t && this.ReturnInstance(t)
            }
        }, n.prototype.CreateNewInstance = function() {
            var n = null;
            return null != this.assetContainer && null != this.prefabName && "" !== this.prefabName && (n = e.SceneManager.InstantiatePrefab(this.assetContainer, this.prefabName, this.prefabName + ".Instance", this.makeNewMaterials, this.cloneAnimations)), n
        }, n
    }();
    e.PrefabObjectPool = T;
    var _ = function() {
        function e(e, n, t) {
            var a = this;
            this.active = !1, this.touchId = null, this.dragStart = null, this.maxDistance = 0, this.deadZone = 0, this.xvalue = 0, this.yvalue = 0, this.stick = null, this.touchId = null, this.dragStart = null, this.active = !1, this.xvalue = 0, this.yvalue = 0, this.deadZone = t, this.maxDistance = n, this.stick = document.getElementById(e), null != this.stick ? (this.stick.addEventListener("mousedown", function(e) {
                a.handleDown(e)
            }), this.stick.addEventListener("touchstart", function(e) {
                a.handleDown(e)
            }), document.addEventListener("mousemove", function(e) {
                a.handleMove(e)
            }, {
                passive: !1
            }), document.addEventListener("touchmove", function(e) {
                a.handleMove(e)
            }, {
                passive: !1
            }), document.addEventListener("mouseup", function(e) {
                a.handleUp(e);
            }), document.addEventListener("touchend", function(e) {
                a.handleUp(e)
            })) : console.warn("Failed to locate joystick element: " + e)
        }
        return e.prototype.getValueX = function() {
            return this.xvalue
        }, e.prototype.getValueY = function() {
            return this.yvalue
        }, e.prototype.getStickElement = function() {
            return this.stick
        }, e.prototype.dispose = function() {}, e.prototype.handleDown = function(e) {
            this.active = !0, this.stick.style.transition = "0s", e.preventDefault(), e.changedTouches ? this.dragStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            } : this.dragStart = {
                x: e.clientX,
                y: e.clientY
            }, e.changedTouches && (this.touchId = e.changedTouches[0].identifier)
        }, e.prototype.handleMove = function(e) {
            if (this.active) {
                var n = null;
                if (e.changedTouches) {
                    for (var t = 0; t < e.changedTouches.length; t++) this.touchId == e.changedTouches[t].identifier && (n = t, e.clientX = e.changedTouches[t].clientX, e.clientY = e.changedTouches[t].clientY);
                    if (null == n) return
                }
                var a = e.clientX - this.dragStart.x,
                    r = e.clientY - this.dragStart.y,
                    i = Math.atan2(r, a),
                    o = Math.min(this.maxDistance, Math.hypot(a, r)),
                    l = o * Math.cos(i),
                    s = o * Math.sin(i);
                this.stick.style.transform = "translate3d(" + l + "px, " + s + "px, 0px)";
                var u = o < this.deadZone ? 0 : this.maxDistance / (this.maxDistance - this.deadZone) * (o - this.deadZone),
                    c = u * Math.cos(i),
                    d = u * Math.sin(i),
                    m = parseFloat((c / this.maxDistance).toFixed(4)),
                    p = parseFloat((d / this.maxDistance).toFixed(4));
                this.xvalue = m, this.yvalue = p
            }
        }, e.prototype.handleUp = function(e) {
            this.active && (e.changedTouches && this.touchId != e.changedTouches[0].identifier || (this.stick.style.transition = ".2s", this.stick.style.transform = "translate3d(0px, 0px, 0px)", this.xvalue = 0, this.yvalue = 0, this.touchId = null, this.active = !1))
        }, e
    }();
    e.TouchJoystickHandler = _;
    var x = function() {
        function n() {
            this._hit = !1, this._dest = new e.Vector3(0, 0, 0), this._origin = new e.Vector3(0, 0, 0), this._hitPoint = new e.Vector3(0, 0, 0), this._hitNormal = new e.Vector3(0, 0, 0), this._hitDistance = 0, this._collisionObject = null, this.reset(e.Vector3.Zero(), e.Vector3.Zero())
        }
        return Object.defineProperty(n.prototype, "hasHit", {
            get: function() {
                return this._hit
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "hitPoint", {
            get: function() {
                return this._hitPoint
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "hitNormal", {
            get: function() {
                return this._hitNormal
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "hitDistance", {
            get: function() {
                return this._hitDistance
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "collisionObject", {
            get: function() {
                return this._collisionObject
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "rayDestination", {
            get: function() {
                return this._dest
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "rayOrigin", {
            get: function() {
                return this._origin
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.reset = function(e, n) {
            this._hit = !1, this._hitPoint.set(0, 0, 0), this._hitNormal.set(0, 0, 0), this._hitDistance = 0, this._collisionObject = null, this._origin.copyFrom(e), this._dest.copyFrom(n)
        }, n.prototype.update = function(n, t, a, r, i, o, l, s) {
            void 0 === s && (s = null), this._hit = n, this._hitPoint.set(t, a, r), this._hitNormal.set(i, o, l), this._hitDistance = e.Vector3.Distance(this._origin, this.hitPoint), this._collisionObject = s
        }, n
    }();
    e.RaycastHitResult = x;
    var C = function() {
        function n(e, n, t, a) {
            void 0 === t && (t = 0), void 0 === a && (a = .5), this._numPoints = -1, this._pointMesh = null, this._pointSize = .5, this._pointType = 0, this._linesName = "MeshLines", this._linesMesh = null, this._babylonScene = null, this._pointMesh = null, this._linesMesh = null, this._linesName = e, this._babylonScene = n, this._pointType = t, this._pointSize = a
        }
        return Object.defineProperty(n.prototype, "pointMesh", {
            get: function() {
                return this._pointMesh
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "linesMesh", {
            get: function() {
                return this._linesMesh
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.dispose = function(e) {
            void 0 === e && (e = !0), this._babylonScene = null, this._linesName = null, null != this._pointMesh && (this._pointMesh.dispose(e), this._pointMesh = null), null != this._linesMesh && (this._linesMesh.dispose(e), this._linesMesh = null)
        }, n.prototype.hidePoint = function(e) {
            void 0 === e && (e = !0), null != this._pointMesh && (this._pointMesh.isVisible = !e)
        }, n.prototype.drawPoint = function(n) {
            null == this._pointMesh && (1 === this._pointType ? (this._pointMesh = e.MeshBuilder.CreateBox(this._linesName + ".EndPoint", {
                size: 2 * this._pointSize
            }, this._babylonScene), this._pointMesh.visibility = .25) : (this._pointMesh = e.MeshBuilder.CreateSphere(this._linesName + ".EndPoint", {
                segments: 24,
                diameter: 2 * this._pointSize
            }, this._babylonScene), this._pointMesh.visibility = .25)), null != this._pointMesh && (this._pointMesh.isVisible = !0, this._pointMesh.position.copyFrom(n))
        }, n.prototype.drawLine = function(n, t) {
            void 0 === t && (t = null), null == this._linesMesh ? (this._numPoints = n.length, this._linesMesh = e.MeshBuilder.CreateLines(this._linesName, {
                points: n,
                updatable: !0
            }, this._babylonScene), null != t && (this._linesMesh.color = t), this._linesMesh.refreshBoundingInfo(!1)) : n.length === this._numPoints ? (this._linesMesh = e.MeshBuilder.CreateLines(this._linesName, {
                points: n,
                instance: this._linesMesh
            }, this._babylonScene), null != t && (this._linesMesh.color = t), this._linesMesh.refreshBoundingInfo(!1)) : e.Tools.Warn("Dynamic line mesh point count mismatch for " + this._linesName)
        }, n
    }();
    e.LinesMeshRenderer = C;
    var A = function(n) {
        function t() {
            return null !== n && n.apply(this, arguments) || this
        }
        return __extends(t, n), t.prototype.addContainerTask = function(n, t, a, r) {
            var i = this,
                o = new e.ContainerAssetTask(n, t, a, r),
                l = o;
            return l._lengthComputable = 0, l._loaded = 0, l._total = 0, l.runTask = function(n, t, a) {
                e.SceneLoader.LoadAssetContainer(o.rootUrl, o.sceneFilename, n, function(e) {
                    o.loadedContainer = e, o.loadedMeshes = e.meshes, o.loadedParticleSystems = e.particleSystems, o.loadedSkeletons = e.skeletons, o.loadedAnimationGroups = e.animationGroups, t()
                }, function(e) {
                    l._lengthComputable = e.lengthComputable, l._loaded = e.loaded, l._total = e.total, i.handlePreloadingProgress()
                }, function(e, n, t) {
                    a(n, t)
                })
            }, this._tasks.push(o), o
        }, t.prototype.addMeshTask = function(n, t, a, r) {
            var i = this,
                o = new e.MeshAssetTask(n, t, a, r),
                l = o;
            return l._lengthComputable = 0, l._loaded = 0, l._total = 0, l.runTask = function(n, t, a) {
                e.SceneLoader.ImportMesh(o.meshesNames, o.rootUrl, o.sceneFilename, n, function(e, n, a, r) {
                    o.loadedMeshes = e, o.loadedParticleSystems = n, o.loadedSkeletons = a, o.loadedAnimationGroups = r, t()
                }, function(e) {
                    l._lengthComputable = e.lengthComputable, l._loaded = e.loaded, l._total = e.total, i.handlePreloadingProgress()
                }, function(e, n, t) {
                    a(n, t)
                })
            }, this._tasks.push(o), o
        }, t.prototype.addTextFileTask = function(n, t) {
            var a = this,
                r = new e.TextFileAssetTask(n, t),
                i = r;
            return i._lengthComputable = 0, i._loaded = 0, i._total = 0, i.runTask = function(e, n, t) {
                e._loadFile(r.url, function(e) {
                    r.text = e, n()
                }, function(e) {
                    i._lengthComputable = e.lengthComputable, i._loaded = e.loaded, i._total = e.total, a.handlePreloadingProgress()
                }, !1, !1, function(e, n) {
                    e && t(e.status + " " + e.statusText, n)
                })
            }, this._tasks.push(r), r
        }, t.prototype.addBinaryFileTask = function(n, t) {
            var a = this,
                r = new e.BinaryFileAssetTask(n, t),
                i = r;
            return i._lengthComputable = 0, i._loaded = 0, i._total = 0, i.runTask = function(e, n, t) {
                e._loadFile(r.url, function(e) {
                    r.data = e, n()
                }, function(e) {
                    i._lengthComputable = e.lengthComputable, i._loaded = e.loaded, i._total = e.total, a.handlePreloadingProgress()
                }, !0, !0, function(e, n) {
                    e && t(e.status + " " + e.statusText, n)
                })
            }, this._tasks.push(r), r
        }, t.prototype.addImageTask = function(n, t) {
            var a = this,
                r = new e.ImageAssetTask(n, t),
                i = r;
            return i._lengthComputable = 0, i._loaded = 0, i._total = 0, i.runTask = function(n, t, o) {
                var l = new Image;
                e.Tools.SetCorsBehavior(r.url, l), l.onload = function() {
                    r.image = l, t()
                }, l.onerror = function(e) {
                    o("Error loading image", e)
                }, l.onprogress = function(e) {
                    i._lengthComputable = e.lengthComputable, i._loaded = e.loaded, i._total = e.total, a.handlePreloadingProgress()
                }, l.src = r.url
            }, this._tasks.push(r), r
        }, t.prototype.handlePreloadingProgress = function() {
            var n = !0,
                t = 0,
                a = 0;
            if (null != this._tasks && this._tasks.length > 0)
                for (var r = 0; r < this._tasks.length; r++) {
                    var i = this._tasks[r];
                    null != i._lengthComputable && null != i._loaded && null != i._total && (n = n && i._lengthComputable, t += i._loaded, a += i._total)
                }
            if (null != e.SceneManager.OnAssetManagerProgress) {
                var o = {
                    lengthComputable: n,
                    loaded: t,
                    total: n ? a : 0
                };
                e.SceneManager.OnAssetManagerProgress(o)
            }
        }, t
    }(e.AssetsManager);
    e.PreloadAssetsManager = A;
    var w = function() {
        function n() {}
        return n.IsLayerMasked = function(e, n) {
                return 0 != (e & 1 << n)
            }, n.GetLoadingState = function() {
                return e.Utilities.LoadingState
            }, n.Approximately = function(n, t) {
                return Math.abs(t - n) < Math.max(1e-6 * Math.max(Math.abs(n), Math.abs(t)), 8 * e.System.SingleEpsilon)
            }, n.GetVertexDataFromMesh = function(n) {
                var t = n.computeWorldMatrix(!0),
                    a = e.VertexData.ExtractFromMesh(n, !0, !0);
                return a.transform(t), a
            }, n.UpdateAbstractMeshMaterial = function(n, t, a) {
                if (null != n) {
                    var r = n instanceof e.InstancedMesh;
                    if (r === !1) {
                        var i = n.material;
                        if (i instanceof e.MultiMaterial) {
                            var o = i.clone(i.name + ".Clone");
                            o.subMaterials[a] = t, n.material = o
                        } else n.material = t
                    } else console.warn("Instanced mesh not supported as a node material on mesh: " + n.name)
                } else console.warn("Null source mesh for mesh: " + n.name)
            }, n.MoveTowardsVector2 = function(n, t, a) {
                var r = new e.Vector2(0, 0);
                return e.Utilities.MoveTowardsVector2ToRef(n, t, a, r), r
            }, n.MoveTowardsVector2ToRef = function(e, n, t, a) {
                var r = n.x - e.x,
                    i = n.y - e.y,
                    o = r * r + i * i;
                if (0 == o || t >= 0 && o <= t * t) a.set(n.x, n.y);
                else {
                    var l = Math.sqrt(o);
                    a.set(e.x + r / l * t, e.y + i / l * t)
                }
            }, n.MoveTowardsVector3 = function(n, t, a) {
                var r = new e.Vector3(0, 0, 0);
                return e.Utilities.MoveTowardsVector3ToRef(n, t, a, r), r
            }, n.MoveTowardsVector3ToRef = function(e, n, t, a) {
                var r = n.x - e.x,
                    i = n.y - e.y,
                    o = n.z - e.z,
                    l = r * r + i * i + o * o;
                if (0 == l || l <= t * t) a.set(n.x, n.y, n.z);
                else {
                    var s = Math.sqrt(l);
                    a.set(e.x + r / s * t, e.y + i / s * t, e.z + o / s * t)
                }
            }, n.MoveTowardsVector4 = function(n, t, a) {
                var r = new e.Vector4(0, 0, 0, 0);
                return e.Utilities.MoveTowardsVector4ToRef(n, t, a, r), r
            }, n.MoveTowardsVector4ToRef = function(e, n, t, a) {
                var r = n.x - e.x,
                    i = n.y - e.y,
                    o = n.z - e.z,
                    l = n.w - e.w,
                    s = r * r + i * i + o * o + l * l;
                if (0 == s || t >= 0 && s <= t * t) a.set(n.x, n.y, n.z, n.w);
                else {
                    var u = Math.sqrt(s);
                    a.set(e.x + r / u * t, e.y + i / u * t, e.z + o / u * t, e.w + l / u * t)
                }
            }, n.ClampMagnitudeVector2 = function(n, t) {
                var a = new e.Vector2(0, 0);
                return e.Utilities.ClampMagnitudeVector2ToRef(n, t, a), a
            }, n.ClampMagnitudeVector2ToRef = function(e, n, t) {
                var a = e.lengthSquared();
                if (a > n * n) {
                    var r = Math.sqrt(a),
                        i = e.x / r,
                        o = e.y / r;
                    t.set(i * n, o * n)
                }
            }, n.ClampMagnitudeVector3 = function(n, t) {
                var a = new e.Vector3(0, 0, 0);
                return e.Utilities.ClampMagnitudeVector3ToRef(n, t, a), a
            }, n.ClampMagnitudeVector3ToRef = function(e, n, t) {
                var a = e.lengthSquared();
                if (a > n * n) {
                    var r = Math.sqrt(a),
                        i = e.x / r,
                        o = e.y / r,
                        l = e.z / r;
                    t.set(i * n, o * n, l * n)
                }
            }, n.ZeroPad = function(e, n) {
                var t = n - e.toString().length + 1;
                return Array(+(t > 0 && t)).join("0") + e
            }, n.LerpLog = function(e, n, t) {
                var a = Math.min(Math.max(t, 0), 1),
                    r = Math.sin(a * Math.PI * .5);
                return e + (n - e) * r
            }, n.LerpExp = function(e, n, t) {
                var a = Math.min(Math.max(t, 0), 1),
                    r = 1 - Math.cos(a * Math.PI * .5);
                return e + (n - e) * r
            }, n.LerpClamp = function(e, n, t) {
                var a = Math.min(Math.max(t, 0), 1);
                return e + (n - e) * a
            }, n.LerpUnclamp = function(e, n, t) {
                return e + (n - e) * t
            }, n.GetAngle = function(n, t) {
                return e.Utilities.GetAngleRadians(n, t) * e.System.Rad2Deg
            }, n.GetAngleRadians = function(n, t) {
                return Math.acos(e.Vector3.Dot(n, t))
            }, n.ClampAngle = function(n, t, a) {
                var r = n;
                do r < -360 && (r += 360), r > 360 && (r -= 360); while (r < -360 || r > 360);
                return e.Scalar.Clamp(r, t, a)
            }, n.ClampAngle180 = function(n, t, a) {
                return n > 180 && (n -= 360), n = e.Scalar.Clamp(n, t, a), n < 0 && (n += 360), n
            }, n.ClampAngle360 = function(n, t, a) {
                return (n < 90 || n > 270) && (n > 180 && (n -= 360), a > 180 && (a -= 360), t > 180 && (t -= 360)), n = e.Scalar.Clamp(n, t, a), n < 0 && (n += 360), n
            }, n.SmoothDamp = function(n, t, a, r, i, o) {
                if (!o) return 0;
                var l = n - t,
                    s = Math.max(1e-4, a),
                    u = 2 / s,
                    c = u * i,
                    d = 1 / (1 + c + .48 * c * c + .235 * c * c * c),
                    m = t,
                    p = r * s;
                l = e.Scalar.Clamp(l, -p, p);
                var g = n - l,
                    h = (o.x + u * l) * i;
                o.x = (o.x - u * h) * d;
                var f = g + (l + h) * d;
                return m - n > 0 == f > m && (f = m, o.x = (f - m) / i), f
            }, n.SmoothDampAngle = function(n, t, a, r, i, o) {
                var l = n + e.Scalar.DeltaAngle(n, t);
                return e.Utilities.SmoothDamp(n, l, a, r, i, o)
            }, n.SmoothDampVector2 = function(n, t, a, r, i, o) {
                var l = new e.Vector2(0, 0);
                return e.Utilities.SmoothDampVector2ToRef(n, t, a, r, i, o, l), l
            }, n.SmoothDampVector2ToRef = function(e, n, t, a, r, i, o) {
                t = Math.max(1e-4, t);
                var l = 2 / t,
                    s = l * r,
                    u = 1 / (1 + s + .48 * s * s + .235 * s * s * s),
                    c = e.x - n.x,
                    d = e.y - n.y,
                    m = n.clone(),
                    p = a * t,
                    g = p * p,
                    h = c * c + d * d;
                if (h > g) {
                    var f = Math.sqrt(h);
                    c = c / f * p, d = d / f * p
                }
                n.x = e.x - c, n.y = e.y - d;
                var S = (i.x + l * c) * r,
                    M = (i.y + l * d) * r;
                i.x = (i.x - l * S) * u, i.y = (i.y - l * M) * u;
                var y = n.x + (c + S) * u,
                    v = n.y + (d + M) * u,
                    b = m.x - e.x,
                    T = m.y - e.y,
                    _ = y - m.x,
                    x = v - m.y;
                b * _ + T * x > 0 && (y = m.x, v = m.y, i.x = (y - m.x) / r, i.y = (v - m.y) / r), o.set(y, v)
            }, n.SmoothDampVector3 = function(n, t, a, r, i, o) {
                var l = new e.Vector3(0, 0, 0);
                return e.Utilities.SmoothDampVector3ToRef(n, t, a, r, i, o, l), l
            }, n.SmoothDampVector3ToRef = function(e, n, t, a, r, i, o) {
                var l = 0,
                    s = 0,
                    u = 0;
                t = Math.max(1e-4, t);
                var c = 2 / t,
                    d = c * r,
                    m = 1 / (1 + d + .48 * d * d + .235 * d * d * d),
                    p = e.x - n.x,
                    g = e.y - n.y,
                    h = e.z - n.z,
                    f = n.clone(),
                    S = a * t,
                    M = S * S,
                    y = p * p + g * g + h * h;
                if (y > M) {
                    var v = Math.sqrt(y);
                    p = p / v * S, g = g / v * S, h = h / v * S
                }
                n.x = e.x - p, n.y = e.y - g, n.z = e.z - h;
                var b = (i.x + c * p) * r,
                    T = (i.y + c * g) * r,
                    _ = (i.z + c * h) * r;
                i.x = (i.x - c * b) * m, i.y = (i.y - c * T) * m, i.z = (i.z - c * _) * m, l = n.x + (p + b) * m, s = n.y + (g + T) * m, u = n.z + (h + _) * m;
                var x = f.x - e.x,
                    C = f.y - e.y,
                    A = f.z - e.z,
                    w = l - f.x,
                    P = s - f.y,
                    O = u - f.z;
                x * w + C * P + A * O > 0 && (l = f.x, s = f.y, u = f.z, i.x = (l - f.x) / r, i.y = (s - f.y) / r, i.z = (u - f.z) / r), o.set(l, s, u)
            }, n.ToMatrix = function(n, t, a) {
                return e.Matrix.RotationYawPitchRoll(e.Tools.ToRadians(t), e.Tools.ToRadians(n), e.Tools.ToRadians(a))
            }, n.ToMatrixToRef = function(n, t, a, r) {
                e.Matrix.RotationYawPitchRollToRef(e.Tools.ToRadians(t), e.Tools.ToRadians(n), e.Tools.ToRadians(a), r)
            }, n.FastMatrixLerp = function(n, t, a, r) {
                e.Matrix.LerpToRef(n, t, a, r)
            }, n.FastMatrixSlerp = function(n, t, a, r) {
                e.Matrix.DecomposeLerpToRef(n, t, a, r)
            }, n.ToEuler = function(n) {
                var t = n.toEulerAngles();
                return t.x = e.Tools.ToDegrees(t.x), t.y = e.Tools.ToDegrees(t.y), t.z = e.Tools.ToDegrees(t.z), t
            }, n.ToEulerToRef = function(n, t) {
                n.toEulerAnglesToRef(t), t.x = e.Tools.ToDegrees(t.x), t.y = e.Tools.ToDegrees(t.y), t.z = e.Tools.ToDegrees(t.z)
            }, n.FromEuler = function(n, t, a) {
                return e.Quaternion.FromEulerAngles(e.Tools.ToRadians(n), e.Tools.ToRadians(t), e.Tools.ToRadians(a))
            }, n.FromEulerToRef = function(n, t, a, r) {
                e.Quaternion.FromEulerAnglesToRef(e.Tools.ToRadians(n), e.Tools.ToRadians(t), e.Tools.ToRadians(a), r)
            }, n.QuaternionDiff = function(n, t) {
                var a = new e.Quaternion(0, 0, 0, 0);
                return e.Utilities.QuaternionDiffToRef(n, t, a), a
            }, n.QuaternionDiffToRef = function(n, t, a) {
                e.Quaternion.InverseToRef(n, e.Utilities.TempQuaternion), e.Utilities.TempQuaternion.multiplyToRef(t, a)
            }, n.QuaternionSubtractToRef = function(e, n, t) {
                t.set(e._x - n._x, e._y - n._y, e._z - n._z, e._w - n._w)
            }, n.RotateVector = function(n, t) {
                var a = 2 * (t.y * n.z - t.z * n.y),
                    r = 2 * (t.z * n.x - t.x * n.z),
                    i = 2 * (t.x * n.y - t.y * n.x);
                return new e.Vector3(n.x + t.w * a + (t.y * i - t.z * r), n.y + t.w * r + (t.z * a - t.x * i), n.z + t.w * i + (t.x * r - t.y * a))
            }, n.RotateVectorToRef = function(e, n, t) {
                var a = 2 * (n.y * e.z - n.z * e.y),
                    r = 2 * (n.z * e.x - n.x * e.z),
                    i = 2 * (n.x * e.y - n.y * e.x);
                t.x = e.x + n.w * a + (n.y * i - n.z * r), t.y = e.y + n.w * r + (n.z * a - n.x * i), t.z = e.z + n.w * i + (n.x * r - n.y * a)
            }, n.LookRotation = function(n) {
                var t = e.Quaternion.Zero();
                return e.Utilities.LookRotationToRef(n, t), t
            }, n.LookRotationToRef = function(n, t) {
                e.Utilities.TempMatrix.reset(), e.Matrix.LookAtLHToRef(e.Utilities.ZeroVector, n, e.Utilities.UpVector, e.Utilities.TempMatrix), e.Utilities.TempMatrix.invert(), e.Quaternion.FromRotationMatrixToRef(e.Utilities.TempMatrix, t)
            }, n.Vector3Rad2Deg = function(n) {
                var t = e.Vector3.Zero();
                return e.Utilities.Vector3Rad2DegToRef(n, t), t
            }, n.Vector3Rad2DegToRef = function(n, t) {
                t.x = e.Tools.ToDegrees(n.x), t.y = e.Tools.ToDegrees(n.y), t.z = e.Tools.ToDegrees(n.z)
            }, n.MultiplyQuaternionByVector = function(n, t) {
                var a = new e.Vector3(0, 0, 0);
                return e.Utilities.MultiplyQuaternionByVectorToRef(n, t, a), a
            }, n.MultiplyQuaternionByVectorToRef = function(e, n, t) {
                var a = n.x,
                    r = n.y,
                    i = n.z,
                    o = e.x,
                    l = e.y,
                    s = e.z,
                    u = e.w,
                    c = u * a + l * i - s * r,
                    d = u * r + s * a - o * i,
                    m = u * i + o * r - l * a,
                    p = -o * a - l * r - s * i;
                t.x = c * u + p * -o + d * -s - m * -l, t.y = d * u + p * -l + m * -o - c * -s, t.z = m * u + p * -s + c * -l - d * -o
            }, n.ValidateTransformRotation = function(e) {
                null != e.rotationQuaternion && (e.rotation = e.rotationQuaternion.toEulerAngles(), e.rotationQuaternion = null)
            }, n.ValidateTransformQuaternion = function(n) {
                null == n.rotationQuaternion && null != n.rotation && (n.rotationQuaternion = e.Quaternion.FromEulerAngles(n.rotation.x, n.rotation.y, n.rotation.z), n.rotation.set(0, 0, 0))
            }, n.GetKeyboardInputValue = function(n, t, a) {
                var r = a;
                return e.UserInputOptions.KeyboardSmoothing === !0 && (r = e.Scalar.MoveTowards(t, a, e.UserInputOptions.KeyboardMoveSensibility * e.SceneManager.GetDeltaSeconds(n)), Math.abs(r) < e.UserInputOptions.KeyboardMoveDeadZone && (r = 0)), r
            }, n.GenerateRandonNumber = function(e, n, t) {
                void 0 === t && (t = 2);
                var a = (Math.random() * (n - e) + e).toFixed(t);
                return parseFloat(a)
            }, n.ProjectVector = function(n, t) {
                var a = new e.Vector3(0, 0, 0);
                return e.Utilities.ProjectVectorToRef(n, t, a), a
            }, n.ProjectVectorToRef = function(n, t, a) {
                var r = e.Vector3.Dot(t, t);
                if (r < e.System.Epsilon) a.set(0, 0, 0);
                else {
                    var i = e.Vector3.Dot(n, t);
                    a.set(t.x * i / r, t.y * i / r, t.z * i / r)
                }
            }, n.ProjectVectorOnPlane = function(n, t) {
                var a = new e.Vector3(0, 0, 0);
                return e.Utilities.ProjectVectorOnPlaneToRef(n, t, a), a
            }, n.ProjectVectorOnPlaneToRef = function(n, t, a) {
                var r = e.Vector3.Dot(t, t);
                if (r < e.System.Epsilon) a.copyFrom(n);
                else {
                    var i = e.Vector3.Dot(n, t);
                    a.set(n.x - t.x * i / r, n.y - t.y * i / r, n.z - t.z * i / r)
                }
            }, n.AreVectorsEqual = function(e, n, t) {
                return Math.abs(e.x - n.x) < t && Math.abs(e.y - n.y) < t && Math.abs(e.z - n.z) < t
            }, n.GetVerticalSlopeAngle = function(n, t) {
                void 0 === t && (t = 0);
                var a = Math.atan(Math.abs(n.y / Math.sqrt(n.x * n.x + n.z * n.z))) * e.System.Rad2Deg;
                return a = null != a && Number.isNaN(a) === !1 ? a : 0, t > 0 && a >= t && (a = 0), a
            }, n.GetLocalStorageItem = function(e) {
                return null != window.localStorage ? window.localStorage.getItem(e) : null
            }, n.SetLocalStorageItem = function(e, n) {
                null != window.localStorage && window.localStorage.setItem(e, n)
            }, n.GetSessionStorageItem = function(e) {
                return null != window.sessionStorage ? window.sessionStorage.getItem(e) : null
            }, n.SetSessionStorageItem = function(e, n) {
                null != window.sessionStorage && window.sessionStorage.setItem(e, n)
            }, n.DownloadEnvironment = function(n, t, a) {
                void 0 === t && (t = null), void 0 === a && (a = null), e.EnvironmentTextureTools.CreateEnvTextureAsync(n).then(function(a) {
                    var r = n.name || "Environment",
                        i = new Blob([a], {
                            type: "octet/stream"
                        });
                    e.Tools.Download(i, r + ".env"), null != t && t()
                })["catch"](function(e) {
                    console.error(e), null != a && a()
                })
            }, n.HasOwnProperty = function(e, n) {
                return null != e && null != n && "" !== n && n in e
            }, n.GetFilenameFromUrl = function(e) {
                return e.substring(e.lastIndexOf("/") + 1)
            }, n.GetUrlParameter = function(e) {
                var n = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                    t = new RegExp("[\\?&]" + n + "=([^&#]*)"),
                    a = t.exec(window.location.search);
                return null !== a ? decodeURIComponent(a[1].replace(/\+/g, " ")) : null
            }, n.PrintToScreen = function(n, t) {
                if (void 0 === t && (t = "white"), e.Utilities.PrintElement = document.getElementById("print"), null == e.Utilities.PrintElement) {
                    var a = document.createElement("div");
                    a.id = "print", a.style.position = "absolute", a.style.left = "6px", a.style.bottom = "3px", a.style.fontSize = "12px", a.style.zIndex = "10000", a.style.color = "#0c0", document.body.appendChild(a), e.Utilities.PrintElement = a
                }
                null != e.Utilities.PrintElement && e.Utilities.PrintElement.innerHTML !== n && (e.Utilities.PrintElement.style.color !== t && (e.Utilities.PrintElement.style.color = t), e.Utilities.PrintElement.innerHTML = n)
            }, n.FindMeshCollider = function(n, t) {
                var a = null;
                if (t instanceof e.TransformNode) {
                    var r = null != t.metadata && null != t.metadata.unity && null != t.metadata.unity.renderer && null != t.metadata.unity.renderer.hasmeshcollider && t.metadata.unity.renderer.hasmeshcollider === !0;
                    if (r === !0) {
                        var i = t.id + "-collider";
                        a = n.getMeshById(i)
                    } else a = t
                } else a = t;
                return a
            }, n.AddMeshVerts = function(n, t, a, r) {
                if (void 0 === r && (r = !1), null == e.Utilities.TmpHullMatrix && (e.Utilities.TmpHullMatrix = new e.Matrix), null == e.Utilities.TmpAmmoVectorA && (e.Utilities.TmpAmmoVectorA = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoVectorB && (e.Utilities.TmpAmmoVectorB = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoVectorC && (e.Utilities.TmpAmmoVectorC = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoNormalA && (e.Utilities.TmpAmmoNormalA = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoNormalB && (e.Utilities.TmpAmmoNormalB = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoNormalC && (e.Utilities.TmpAmmoNormalC = new Ammo.btVector3(0, 0, 0)), !n.addTriangle) {
                    var i = a;
                    return e.Tools.Warn("No AddTriangle Function For Triangle Mesh On: " + i.name), 0
                }
                var o = 0;
                if (a && a.getIndices && a.getWorldMatrix && a.getChildMeshes) {
                    var l = a.getIndices();
                    l || (l = []);
                    var s = a.getVerticesData(e.VertexBuffer.PositionKind);
                    s || (s = []);
                    var u = a.getVerticesData(e.VertexBuffer.NormalKind);
                    u || (u = []), a.computeWorldMatrix(!1);
                    for (var c = l.length / 3, d = 0; d < c; d++) {
                        for (var m = [], p = [], g = 0; g < 3; g++) {
                            var h = new e.Vector3(s[3 * l[3 * d + g] + 0], s[3 * l[3 * d + g] + 1], s[3 * l[3 * d + g] + 2]),
                                f = new e.Vector3(u[3 * l[3 * d + g] + 0], u[3 * l[3 * d + g] + 1], u[3 * l[3 * d + g] + 2]);
                            e.Matrix.ScalingToRef(a.scaling.x, a.scaling.y, a.scaling.z, e.Utilities.TmpHullMatrix), h = e.Vector3.TransformCoordinates(h, e.Utilities.TmpHullMatrix);
                            var S = void 0,
                                M = void 0;
                            0 == g ? (S = e.Utilities.TmpAmmoVectorA, M = e.Utilities.TmpAmmoNormalA) : 1 == g ? (S = e.Utilities.TmpAmmoVectorB, M = e.Utilities.TmpAmmoNormalB) : (S = e.Utilities.TmpAmmoVectorC, M = e.Utilities.TmpAmmoNormalC), S.setValue(h.x, h.y, h.z), M.setValue(f.x, f.y, f.z), m.push(S), p.push(M)
                        }
                        var y = !1;
                        r === !0 ? n.addTriangleNormals(m[0], m[1], m[2], p[0], p[1], p[2], y) : n.addTriangle(m[0], m[1], m[2], y), o++
                    }
                    a.getChildMeshes().forEach(function(a) {
                        o += e.Utilities.AddMeshVerts(n, t, a, r)
                    })
                }
                return o
            }, n.AddHullVerts = function(n, t, a) {
                if (null == e.Utilities.TmpHullMatrix && (e.Utilities.TmpHullMatrix = new e.Matrix), null == e.Utilities.TmpAmmoVectorA && (e.Utilities.TmpAmmoVectorA = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoVectorB && (e.Utilities.TmpAmmoVectorB = new Ammo.btVector3(0, 0, 0)), null == e.Utilities.TmpAmmoVectorC && (e.Utilities.TmpAmmoVectorC = new Ammo.btVector3(0, 0, 0)), !n.addPoint) {
                    var r = a;
                    return e.Tools.Warn("No AddPoint Function For Convex Hull Shape On: " + r.name), 0
                }
                var i = 0;
                if (a && a.getIndices && a.getWorldMatrix && a.getChildMeshes) {
                    var o = a.getIndices();
                    o || (o = []);
                    var l = a.getVerticesData(e.VertexBuffer.PositionKind);
                    l || (l = []), a.computeWorldMatrix(!1);
                    for (var s = o.length / 3, u = 0; u < s; u++) {
                        for (var c = [], d = 0; d < 3; d++) {
                            var m = void 0,
                                p = new e.Vector3(l[3 * o[3 * u + d] + 0], l[3 * o[3 * u + d] + 1], l[3 * o[3 * u + d] + 2]);
                            e.Matrix.ScalingToRef(a.scaling.x, a.scaling.y, a.scaling.z, e.Utilities.TmpHullMatrix), p = e.Vector3.TransformCoordinates(p, e.Utilities.TmpHullMatrix), m = 0 == d ? e.Utilities.TmpAmmoVectorA : 1 == d ? e.Utilities.TmpAmmoVectorB : e.Utilities.TmpAmmoVectorC, m.setValue(p.x, p.y, p.z), c.push(m)
                        }
                        n.addPoint(c[0], !0), n.addPoint(c[1], !0), n.addPoint(c[2], !0), i++
                    }
                    a.getChildMeshes().forEach(function(a) {
                        i += e.Utilities.AddHullVerts(n, t, a)
                    })
                }
                return i
            }, n.CreateImpostorCustomShape = function(n, t, a, r, i, o, l) {
                void 0 === r && (r = !1), void 0 === i && (i = 0), void 0 === o && (o = 0), void 0 === l && (l = !0), null == e.Utilities.TmpAmmoVectorD && (e.Utilities.TmpAmmoVectorD = new Ammo.btVector3(0, 0, 0));
                var s = null,
                    u = t.object,
                    c = t.object;
                if (a === e.PhysicsImpostor.MeshImpostor) {
                    if (0 !== t.getParam("mass") && (t.setParam("mass", 0), e.Tools.Warn("Mesh impostor not supported for non-static object: " + c.name + ". Forced to static mesh impostor")), 0 == t.getParam("mass")) {
                        var d = null,
                            m = 0;
                        if (null == c._meshCollider && (c._meshCollider = e.Utilities.FindMeshCollider(n, u)), null == c._meshCollider) return e.Tools.Warn("Mesh collider not found for object: " + c.name + ". No physics imposter shape created."), null;
                        var p = c._meshCollider;
                        if (r === !0 && null == c._debugCollider) {
                            var g = c.name + ".Debug",
                                h = p.clone(g, null, !1, !1);
                            h.setParent(c), h.position.set(0, 0, 0), h.rotationQuaternion = new e.Quaternion(0, 0, 0, 1), h.isVisible = !0, h.visibility = i, h.renderingGroupId = o, h.material = e.Utilities.GetColliderMaterial(n), h.checkCollisions = !1, h.isPickable = !1, c._debugCollider = h
                        }
                        null != Ammo.btSmoothTriangleMesh ? (d = new Ammo.btSmoothTriangleMesh, d.set_m_useTriangleNormals && d.set_m_useTriangleNormals(l), t._pluginData.toDispose.push(d), m = e.Utilities.AddMeshVerts(d, p, p, !0)) : (d = new Ammo.btTriangleMesh, t._pluginData.toDispose.push(d), m = e.Utilities.AddMeshVerts(d, p, p, !1)), s = 0 == m ? new Ammo.btCompoundShape : new Ammo.btBvhTriangleMeshShape(d)
                    }
                    return s.setMargin(0), s
                }
                if (a === e.PhysicsImpostor.ConvexHullImpostor) {
                    var f = new Ammo.btConvexHullShape;
                    if (null == c._meshCollider && (c._meshCollider = e.Utilities.FindMeshCollider(n, u)), null == c._meshCollider) return e.Tools.Warn("Mesh collider not found for object: " + c.name + ". No physics imposter shape created."), null;
                    var S = c._meshCollider;
                    if (r === !0 && null == c._debugCollider) {
                        var g = c.name + ".Debug",
                            M = S.clone(g, null, !1, !1);
                        M.setParent(c), M.position.set(0, 0, 0), M.rotationQuaternion = new e.Quaternion(0, 0, 0, 1), M.isVisible = !0, M.visibility = i, M.renderingGroupId = o, M.material = e.Utilities.GetColliderMaterial(n), M.checkCollisions = !1, M.isPickable = !1, c._debugCollider = M
                    }
                    var m = e.Utilities.AddHullVerts(f, S, S);
                    return 0 == m ? (t._pluginData.toDispose.push(f), s = new Ammo.btCompoundShape) : s = f, s.setMargin(0), s
                }
                var y = c,
                    v = (null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.margin ? c.metadata.unity.collision.margin : -1, null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.center ? e.Utilities.ParseVector3(c.metadata.unity.collision.center) : new e.Vector3(0, 0, 0)),
                    b = new e.Quaternion(0, 0, 0, 1);
                switch (a) {
                    case e.PhysicsImpostor.BoxImpostor:
                        var T = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.boxsize ? e.Utilities.ParseVector3(c.metadata.unity.collision.boxsize) : new e.Vector3(1, 1, 1);
                        if (T.x *= y.scaling.x, T.y *= y.scaling.y, T.z *= y.scaling.z, r === !0 && null == c._debugCollider) {
                            var g = c.name + ".Debug",
                                _ = e.MeshBuilder.CreateBox(g, {
                                    width: T.x,
                                    height: T.y,
                                    depth: T.z
                                }, n);
                            _.position.set(0, 0, 0), _.rotationQuaternion = c.rotationQuaternion.clone(), _.setParent(c), _.position.copyFrom(v), _.isVisible = !0, _.visibility = i, _.renderingGroupId = o, _.material = e.Utilities.GetColliderMaterial(n), _.checkCollisions = !1, _.isPickable = !1, c._debugCollider = _
                        }
                        e.Utilities.TmpAmmoVectorD.setValue(T.x / 2, T.y / 2, T.z / 2), s = new Ammo.btBoxShape(e.Utilities.TmpAmmoVectorD);
                        break;
                    case e.PhysicsImpostor.SphereImpostor:
                        var x = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.sphereradius ? c.metadata.unity.collision.sphereradius : .5;
                        x *= Math.max(Math.abs(y.scaling.x), Math.abs(y.scaling.y), Math.abs(y.scaling.z));
                        var C = e.Scalar.WithinEpsilon(y.scaling.x, y.scaling.y, 1e-4) && e.Scalar.WithinEpsilon(y.scaling.x, y.scaling.z, 1e-4);
                        if (r === !0 && null == c._debugCollider) {
                            var A = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.segments ? c.metadata.unity.collision.segments : 24,
                                g = c.name + ".Debug",
                                w = null;
                            w = C === !0 ? e.MeshBuilder.CreateSphere(g, {
                                segments: A,
                                diameter: 2 * x
                            }, n) : e.MeshBuilder.CreateSphere(g, {
                                segments: 16,
                                diameterX: 1 * y.scaling.x,
                                diameterY: 1 * y.scaling.y,
                                diameterZ: 1 * y.scaling.z
                            }, n), w.position.set(0, 0, 0), w.rotationQuaternion = c.rotationQuaternion.clone(), w.setParent(c), w.position.copyFrom(v), w.isVisible = !0, w.visibility = i, w.renderingGroupId = o, w.material = e.Utilities.GetColliderMaterial(n), w.checkCollisions = !1, w.isPickable = !1, c._debugCollider = w
                        }
                        if (C === !0) s = new Ammo.btSphereShape(x);
                        else {
                            var P = [new Ammo.btVector3(0, 0, 0)],
                                O = [1];
                            s = new Ammo.btMultiSphereShape(P, O, 1), s.setLocalScaling(new Ammo.btVector3(y.scaling.x / 2, y.scaling.y / 2, y.scaling.z / 2))
                        }
                        break;
                    case e.PhysicsImpostor.CapsuleImpostor:
                        if (2 === e.SceneManager.PhysicsCapsuleShape) {
                            var f = new Ammo.btConvexHullShape,
                                B = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.capsulesize ? e.Utilities.ParseVector3(c.metadata.unity.collision.capsulesize) : new e.Vector3(.5, 2, 1);
                            if (null == c._meshCollider) {
                                B.x *= Math.max(Math.abs(y.scaling.x), Math.abs(y.scaling.z)), B.y *= y.scaling.y, 0 !== B.z && 2 !== B.z || (0 === B.z ? e.Utilities.FromEulerToRef(0, 0, 90, b) : 2 === B.z && e.Utilities.FromEulerToRef(90, 0, 0, b));
                                var k = r ? ".Debug" : ".Collider",
                                    A = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.segments ? c.metadata.unity.collision.segments : 24,
                                    g = c.name + k,
                                    L = e.MeshBuilder.CreateCapsule(g, {
                                        tessellation: A,
                                        subdivisions: 8,
                                        capSubdivisions: 8,
                                        height: B.y,
                                        radius: B.x
                                    }, n);
                                L.position.set(0, 0, 0), L.rotationQuaternion = c.rotationQuaternion.clone(), L.setParent(c), L.position.copyFrom(v), L.rotationQuaternion = b.clone(), L.isVisible = r, L.visibility = i, L.renderingGroupId = o, L.material = e.Utilities.GetColliderMaterial(n), L.checkCollisions = !1, L.isPickable = !1, c._meshCollider = L
                            }
                            if (null == c._meshCollider) return e.Tools.Warn("Failed to create capsule mesh collider for object: " + c.name + ". No physics imposter shape created."), null;
                            var S = c._meshCollider,
                                m = e.Utilities.AddHullVerts(f, S, S);
                            0 !== B.z && 2 !== B.z || (0 === B.z ? e.Utilities.FromEulerToRef(0, 0, 90, b) : 2 === B.z && e.Utilities.FromEulerToRef(90, 0, 0, b)), 0 == m ? (t._pluginData.toDispose.push(f), s = new Ammo.btCompoundShape) : s = f, s.setMargin(0)
                        } else if (1 === e.SceneManager.PhysicsCapsuleShape) {
                            var U = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.capsulesize ? e.Utilities.ParseVector3(c.metadata.unity.collision.capsulesize) : new e.Vector3(.5, 2, 1);
                            if (U.x *= Math.max(Math.abs(y.scaling.x), Math.abs(y.scaling.z)), U.y *= y.scaling.y, 0 !== U.z && 2 !== U.z || (0 === U.z ? e.Utilities.FromEulerToRef(0, 0, 90, b) : 2 === U.z && e.Utilities.FromEulerToRef(90, 0, 0, b)), r === !0 && null == c._debugCollider) {
                                var g = c.name + ".Debug",
                                    A = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.segments ? c.metadata.unity.collision.segments : 24,
                                    R = e.MeshBuilder.CreateCylinder(g, {
                                        tessellation: A,
                                        subdivisions: 8,
                                        height: U.y,
                                        diameter: 2 * U.x
                                    }, n);
                                R.position.set(0, 0, 0), R.rotationQuaternion = c.rotationQuaternion.clone(), R.setParent(c), R.position.copyFrom(v), R.rotationQuaternion = b.clone(), R.isVisible = !0, R.visibility = i, R.renderingGroupId = o, R.material = e.Utilities.GetColliderMaterial(n), R.checkCollisions = !1, R.isPickable = !1, c._debugCollider = R
                            }
                            e.Utilities.TmpAmmoVectorD.setValue(U.x, U.y / 2, U.x), s = new Ammo.btCylinderShape(e.Utilities.TmpAmmoVectorD)
                        } else {
                            var B = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.capsulesize ? e.Utilities.ParseVector3(c.metadata.unity.collision.capsulesize) : new e.Vector3(.5, 2, 1);
                            if (B.x *= Math.max(Math.abs(y.scaling.x), Math.abs(y.scaling.z)), B.y *= y.scaling.y, 0 !== B.z && 2 !== B.z || (0 === B.z ? e.Utilities.FromEulerToRef(0, 0, 90, b) : 2 === B.z && e.Utilities.FromEulerToRef(90, 0, 0, b)), r === !0 && null == c._debugCollider) {
                                var g = c.name + ".Debug",
                                    A = null != c.metadata && c.metadata.unity && c.metadata.unity.collision && c.metadata.unity.collision.segments ? c.metadata.unity.collision.segments : 24,
                                    L = e.MeshBuilder.CreateCapsule(g, {
                                        tessellation: A,
                                        subdivisions: 8,
                                        capSubdivisions: 8,
                                        height: B.y,
                                        radius: B.x
                                    }, n);
                                L.position.set(0, 0, 0), L.rotationQuaternion = c.rotationQuaternion.clone(), L.setParent(c), L.position.copyFrom(v), L.rotationQuaternion = b.clone(), L.isVisible = !0, L.visibility = i, L.renderingGroupId = o, L.material = e.Utilities.GetColliderMaterial(n), L.checkCollisions = !1, L.isPickable = !1, c._debugCollider = L
                            }
                            s = new Ammo.btCapsuleShape(B.x, B.y / 2)
                        }
                        break;
                    default:
                        e.Tools.Warn("The impostor type (" + a + ") is not currently supported by the babylon toolkit for: " + c.name)
                }
                var N = new Ammo.btCompoundShape;
                if (null != s) {
                    v.x *= y.scaling.x, v.y *= y.scaling.y, v.z *= y.scaling.z;
                    var I = new Ammo.btVector3(v.x, v.y, v.z),
                        D = new Ammo.btQuaternion(b.x, b.y, b.z, b.w),
                        F = new Ammo.btTransform;
                    F.setIdentity(), F.setOrigin(I), F.setRotation(D), N.addChildShape(F, s)
                }
                return N
            }, n.UseTriangleNormals = function() {
                return null == window.useTriangleNormals || window.useTriangleNormals
            }, n.ShowDebugColliders = function() {
                return null != window.showDebugColliders && window.showDebugColliders
            }, n.ColliderVisibility = function() {
                return null != window.colliderVisibility ? window.colliderVisibility : 0
            }, n.ColliderRenderGroup = function() {
                return null != window.colliderRenderGroup ? window.colliderRenderGroup : 0
            }, n.CollisionWireframe = function() {
                return null != window.collisionWireframe && window.collisionWireframe
            }, n.GetColliderMaterial = function(n) {
                var t = "Collider-Material",
                    a = n.getMaterialByName(t);
                if (null == a) {
                    var r = new e.PBRMaterial(t, n);
                    r.albedoColor = new e.Color3(0, .75, 0), r.wireframe = e.Utilities.CollisionWireframe(), r.unlit = !0, a = r
                }
                return a
            }, n.CalculateCombinedFriction = function(e, n) {
                var t = 10,
                    a = e * n;
                return a < -t && (a = -t), a > t && (a = t), a
            }, n.CalculateCombinedRestitution = function(e, n) {
                return e * n
            }, n.GetDirectTargetAngle = function(n, t) {
                return e.Utilities.TempVector3.set(0, 0, 0), e.Utilities.InverseTransformPointToRef(n, t, e.Utilities.TempVector3), Math.atan2(e.Utilities.TempVector3.x, e.Utilities.TempVector3.z)
            }, n.GetSmoothTargetAngle = function(n, t) {
                return e.Utilities.TempVector3.set(0, 0, 0), e.Utilities.InverseTransformPointToRef(n, t, e.Utilities.TempVector3),
                    e.Utilities.TempVector3.x / e.Utilities.TempVector3.length()
            }, n.CalculatCatmullRom = function(n, t, a, r, i) {
                var o = new e.Vector3(0, 0, 0);
                return e.Utilities.CalculatCatmullRomToRef(n, t, a, r, i, o), o
            }, n.CalculatCatmullRomToRef = function(e, n, t, a, r, i) {}, n.StartsWith = function(e, n) {
                return 0 === e.lastIndexOf(n, 0)
            }, n.EndsWith = function(e, n) {
                return e.indexOf(n, e.length - n.length) !== -1
            }, n.ReplaceAll = function(e, n, t) {
                return e.replace(new RegExp(n, "g"), t)
            }, n.IsNullOrEmpty = function(e) {
                return null == e || "" === e
            }, n.SafeStringPush = function(e, n) {
                e.indexOf(n) === -1 && e.push(n)
            }, n.ParseColor3 = function(n, t, a) {
                void 0 === t && (t = null), void 0 === a && (a = !1);
                var r = null;
                return r = null != n && null != n.r && null != n.g && null != n.b ? a === !0 ? new e.Color3(n.r, n.g, n.b).toLinearSpace() : new e.Color3(n.r, n.g, n.b) : t
            }, n.ParseColor4 = function(n, t, a) {
                void 0 === t && (t = null), void 0 === a && (a = !1);
                var r = null;
                if (null != n && null != n.r && null != n.g && null != n.b) {
                    var i = null != n.a ? n.a : 1;
                    r = a === !0 ? new e.Color4(n.r, n.g, n.b, i).toLinearSpace() : new e.Color4(n.r, n.g, n.b, i)
                } else r = t;
                return r
            }, n.ParseVector2 = function(n, t) {
                void 0 === t && (t = null);
                var a = null;
                return a = null != n && null != n.x && null != n.y ? new e.Vector2(n.x, n.y) : t
            }, n.ParseVector3 = function(n, t) {
                void 0 === t && (t = null);
                var a = null;
                return a = null != n && null != n.x && null != n.y && null != n.z ? new e.Vector3(n.x, n.y, n.z) : t
            }, n.ParseVector4 = function(n, t) {
                void 0 === t && (t = null);
                var a = null;
                return a = null != n && null != n.x && null != n.y && null != n.z && null != n.w ? new e.Vector4(n.x, n.y, n.z, n.w) : t
            }, n.ParseSound = function(n, t, a, r, i) {
                var o = null;
                if (null != n && null != n.filename && "" !== n.filename) {
                    var l = e.SceneManager.GetRootUrl(t),
                        s = n.filename;
                    o = new e.Sound(a, l + s, t, r, i)
                }
                return o
            }, n.ParseTexture = function(n, t, a, r, i, o, l, s, u, c) {
                var d = null;
                if (null != n && null != n.filename && "" !== n.filename) {
                    var m = e.SceneManager.GetRootUrl(t),
                        p = n.filename;
                    d = new e.Texture(m + p, t, a, r, i, o, l, s, u, c)
                }
                return d
            }, n.ParseCubemap = function(n, t) {
                var a = null;
                if (null != n && null != n.info) {
                    var r = e.SceneManager.GetRootUrl(t),
                        i = r + n.info.rooturl;
                    a = e.CubeTexture.Parse(n.info, t, i), null != a && (a.gammaSpace = !1)
                }
                return a
            }, n.ParseTextAsset = function(e, n) {
                void 0 === n && (n = null);
                var t = null;
                return t = null != e && null != e.base64 && "" !== e.base64 ? window.atob(e.base64) : n
            }, n.ParseJsonAsset = function(n, t, a) {
                void 0 === t && (t = null), void 0 === a && (a = null);
                var r = e.Utilities.ParseTextAsset(n, t);
                return null != r && "" !== r ? JSON.parse(r, a) : null
            }, n.ParseTransformByID = function(n, t, a) {
                void 0 === a && (a = null);
                var r = null;
                return r = null != n && null != n.id ? e.SceneManager.GetTransformNodeByID(t, n.id) : a
            }, n.ParseTransformByName = function(n, t, a) {
                void 0 === a && (a = null);
                var r = null;
                return r = null != n && null != n.id ? e.SceneManager.GetTransformNode(t, n.id) : a
            }, n.ParseChildTransform = function(n, t, a) {
                void 0 === a && (a = null);
                var r = null;
                return r = null != t && null != t.name ? e.SceneManager.FindChildTransformNode(n, t.name, e.SearchType.IndexOf, !1) : a
            }, n.SetAbsolutePosition = function(e, n) {
                e.setAbsolutePosition(n)
            }, n.GetAbsolutePosition = function(n, t, a) {
                return void 0 === t && (t = null), void 0 === a && (a = !0), e.Utilities.TransformPoint(n, t || e.Utilities.ZeroVector, a)
            }, n.GetAbsolutePositionToRef = function(n, t, a, r) {
                void 0 === a && (a = null), void 0 === r && (r = !0), e.Utilities.TransformPointToRef(n, a || e.Utilities.ZeroVector, t, r)
            }, n.SetAbsoluteRotation = function(n, t) {
                null == n.rotationQuaternion && (n.rotationQuaternion = n.rotation.toQuaternion()), null != n.parent && n.parent instanceof e.TransformNode ? (e.Utilities.TempQuaternion2.set(0, 0, 0, 1), e.Utilities.GetAbsoluteRotationToRef(n.parent, e.Utilities.TempQuaternion2), e.Quaternion.InverseToRef(e.Utilities.TempQuaternion2, e.Utilities.TempQuaternion2), e.Utilities.TempQuaternion2.multiplyInPlace(t), n.rotationQuaternion.copyFrom(e.Utilities.TempQuaternion2)) : n.rotationQuaternion.copyFrom(t)
            }, n.GetAbsoluteRotation = function(n) {
                var t = new e.Quaternion(0, 0, 0, 1);
                return e.Utilities.GetAbsoluteRotationToRef(n, t), t
            }, n.GetAbsoluteRotationToRef = function(n, t) {
                if (null != n.parent && n.parent instanceof e.TransformNode) return e.Utilities.GetAbsoluteRotationToRef(n.parent, t), null == n.rotationQuaternion && (n.rotationQuaternion = n.rotation.toQuaternion()), void t.multiplyInPlace(n.rotationQuaternion);
                var a = n.scaling;
                if (1 == a.x && 1 == a.y && 1 == a.z) t.copyFrom(n.absoluteRotationQuaternion);
                else {
                    var r = 1 / a.x,
                        i = 1 / a.y,
                        o = 1 / a.z,
                        l = n.getWorldMatrix()._m;
                    e.Utilities.TempMatrix2.reset(), e.Matrix.FromValuesToRef(l[0] * r, l[1] * r, l[2] * r, 0, l[4] * i, l[5] * i, l[6] * i, 0, l[8] * o, l[9] * o, l[10] * o, 0, 0, 0, 0, 1, e.Utilities.TempMatrix2), e.Utilities.TempQuaternion3.set(0, 0, 0, 1), e.Utilities.TempMatrix2.decompose(void 0, e.Utilities.TempQuaternion3, void 0), t.copyFrom(e.Utilities.TempQuaternion3)
                }
            }, n.TransformPoint = function(n, t, a) {
                return void 0 === a && (a = !0), a === !0 && n.computeWorldMatrix(), e.Vector3.TransformCoordinates(t, n.getWorldMatrix())
            }, n.InverseTransformPoint = function(n, t, a) {
                return void 0 === a && (a = !0), a === !0 && n.computeWorldMatrix(), e.Utilities.TempMatrix.reset(), n.getWorldMatrix().invertToRef(e.Utilities.TempMatrix), e.Vector3.TransformCoordinates(t, e.Utilities.TempMatrix)
            }, n.TransformPointToRef = function(n, t, a, r) {
                return void 0 === r && (r = !0), r === !0 && n.computeWorldMatrix(), e.Vector3.TransformCoordinatesToRef(t, n.getWorldMatrix(), a)
            }, n.InverseTransformPointToRef = function(n, t, a, r) {
                return void 0 === r && (r = !0), r === !0 && n.computeWorldMatrix(), e.Utilities.TempMatrix.reset(), n.getWorldMatrix().invertToRef(e.Utilities.TempMatrix), e.Vector3.TransformCoordinatesToRef(t, e.Utilities.TempMatrix, a)
            }, n.TransformDirection = function(n, t, a) {
                return void 0 === a && (a = !0), a === !0 && n.computeWorldMatrix(), e.Vector3.TransformNormal(t, n.getWorldMatrix())
            }, n.InverseTransformDirection = function(n, t, a) {
                return void 0 === a && (a = !0), a === !0 && n.computeWorldMatrix(), e.Utilities.TempMatrix.reset(), n.getWorldMatrix().invertToRef(e.Utilities.TempMatrix), e.Vector3.TransformNormal(t, e.Utilities.TempMatrix)
            }, n.TransformDirectionToRef = function(n, t, a, r) {
                return void 0 === r && (r = !0), r === !0 && n.computeWorldMatrix(), e.Vector3.TransformNormalToRef(t, n.getWorldMatrix(), a)
            }, n.InverseTransformDirectionToRef = function(n, t, a, r) {
                return void 0 === r && (r = !0), r === !0 && n.computeWorldMatrix(), e.Utilities.TempMatrix.reset(), n.getWorldMatrix().invertToRef(e.Utilities.TempMatrix), e.Vector3.TransformNormalToRef(t, e.Utilities.TempMatrix, a)
            }, n.RecomputeCenterPivotPoint = function(n) {
                var t = n.getBoundingInfo().boundingSphere.center;
                n.setPivotMatrix(e.Matrix.Translation(-t.x, -t.y, -t.z))
            }, n.GetDirectionVector = function(e, n) {
                return e.getDirection(n)
            }, n.GetDirectionVectorToRef = function(e, n, t) {
                e.getDirectionToRef(n, t)
            }, n.GetForwardVector = function(n) {
                return n.getDirection(e.Vector3.Forward())
            }, n.GetForwardVectorToRef = function(n, t) {
                n.getDirectionToRef(e.Vector3.Forward(), t)
            }, n.GetRightVector = function(n) {
                return n.getDirection(e.Vector3.Right())
            }, n.GetRightVectorToRef = function(n, t) {
                n.getDirectionToRef(e.Vector3.Right(), t)
            }, n.GetUpVector = function(n) {
                return n.getDirection(e.Vector3.Up())
            }, n.GetUpVectorToRef = function(n, t) {
                n.getDirectionToRef(e.Vector3.Up(), t)
            }, n.BlendFloatValue = function(n, t, a) {
                var r = e.Scalar.Clamp(a, 0, 1);
                return r > 0 ? e.Scalar.Lerp(n, t, r) : n
            }, n.BlendVector2Value = function(n, t, a) {
                var r = e.Scalar.Clamp(a, 0, 1);
                if (r > 0) {
                    var i = e.Vector2.Lerp(n, t, r);
                    n.copyFrom(i)
                }
            }, n.BlendVector3Value = function(n, t, a) {
                var r = e.Scalar.Clamp(a, 0, 1);
                r > 0 && e.Vector3.LerpToRef(n, t, r, n)
            }, n.BlendQuaternionValue = function(n, t, a) {
                var r = e.Scalar.Clamp(a, 0, 1);
                r > 0 && e.Quaternion.SlerpToRef(n, t, r, n)
            }, n.SetAnimationTargetProperty = function(e, n) {
                null != e && (e.targetProperty = n, e.targetPropertyPath = e.targetProperty.split("."))
            }, n.SampleAnimationFloat = function(n, t, a) {
                void 0 === a && (a = e.Animation.ANIMATIONLOOPMODE_CYCLE);
                var r = 0;
                return null != n && n.dataType === e.Animation.ANIMATIONTYPE_FLOAT && (null == n._state && (n._state = {
                    key: 0,
                    repeatCount: 0,
                    loopMode: a,
                    workValue: e.Matrix.Zero()
                }), r = e.Utilities.InterpolateAnimation(n, t, n._state)), r
            }, n.SampleAnimationVector2 = function(n, t, a) {
                void 0 === a && (a = e.Animation.ANIMATIONLOOPMODE_CYCLE);
                var r = null;
                return null != n && n.dataType === e.Animation.ANIMATIONTYPE_VECTOR2 && (null == n._state && (n._state = {
                    key: 0,
                    repeatCount: 0,
                    loopMode: a,
                    workValue: e.Matrix.Zero()
                }), r = e.Utilities.InterpolateAnimation(n, t, n._state)), r
            }, n.SampleAnimationVector3 = function(n, t, a) {
                void 0 === a && (a = e.Animation.ANIMATIONLOOPMODE_CYCLE);
                var r = null;
                return null != n && n.dataType === e.Animation.ANIMATIONTYPE_VECTOR3 && (null == n._state && (n._state = {
                    key: 0,
                    repeatCount: 0,
                    loopMode: a,
                    workValue: e.Matrix.Zero()
                }), r = e.Utilities.InterpolateAnimation(n, t, n._state)), r
            }, n.SampleAnimationQuaternion = function(n, t, a) {
                void 0 === a && (a = e.Animation.ANIMATIONLOOPMODE_CYCLE);
                var r = null;
                return null != n && n.dataType === e.Animation.ANIMATIONTYPE_QUATERNION && (null == n._state && (n._state = {
                    key: 0,
                    repeatCount: 0,
                    loopMode: a,
                    workValue: e.Matrix.Zero()
                }), r = e.Utilities.InterpolateAnimation(n, t, n._state)), r
            }, n.SampleAnimationMatrix = function(n, t, a) {
                void 0 === a && (a = e.Animation.ANIMATIONLOOPMODE_CYCLE);
                var r = null;
                return null != n && n.dataType === e.Animation.ANIMATIONTYPE_MATRIX && (null == n._state && (n._state = {
                    key: 0,
                    repeatCount: 0,
                    loopMode: a,
                    workValue: e.Matrix.Zero()
                }), r = e.Utilities.InterpolateAnimation(n, t, n._state)), r
            }, n.CreateTweenAnimation = function(n, t, a, r, i, o) {
                void 0 === i && (i = 30), void 0 === o && (o = e.Animation.ANIMATIONLOOPMODE_RELATIVE);
                var l = [];
                l.push({
                    frame: 0,
                    value: a
                }), l.push({
                    frame: i,
                    value: r
                });
                var s = new e.Animation(n, t, i, e.Animation.ANIMATIONTYPE_FLOAT, o);
                return s.setKeys(l), s
            }, n.GetLastKeyFrameIndex = function(e) {
                var n = 0;
                if (null != e) {
                    var t = e.getKeys();
                    if (null != t && t.length > 0) {
                        var a = t[t.length - 1];
                        null != a && (n = a.frame)
                    }
                }
                return n
            }, n.InterpolateAnimation = function(e, n, t) {
                return e._interpolate(n, t)
            }, n.UpdateLoopBlendPositionSettings = function(e, n, t) {
                var a = e;
                null != a.metadata && null != a.metadata.unity && null != a.metadata.unity.settings && (a.metadata.unity.settings.loopblendpositiony = n, a.metadata.unity.settings.loopblendpositionxz = t)
            }, n.InitializeShaderMaterial = function(n, t, a) {
                void 0 === t && (t = !0), void 0 === a && (a = !1);
                var r = n,
                    i = e.Utilities.HasOwnProperty(r, "getShaderName") ? r.getShaderName() : "glsl",
                    o = !!e.Utilities.HasOwnProperty(r, "getAlphaBlending") && r.getAlphaBlending(),
                    l = !!e.Utilities.HasOwnProperty(r, "getAlphaTesting") && r.getAlphaTesting(),
                    s = e.Utilities.HasOwnProperty(r, "getDefaultDefines") ? r.getDefaultDefines() : null,
                    u = e.Utilities.HasOwnProperty(r, "getDefaultAttributes") ? r.getDefaultAttributes() : null,
                    c = e.Utilities.HasOwnProperty(r, "getDefaultUniforms") ? r.getDefaultUniforms() : null;
                (null == s || s.length <= 0) && (s = ["#define GAMETIME", "#define DELTATIME", "#define DIFFUSECOLOR", "#define DIFFUSETEXTURE"]), (null == u || u.length <= 0) && (u = ["position", "normal", "uv", "uv2", "color"]), (null == c || c.length <= 0) && (c = ["world", "worldView", "worldViewProjection", "view", "projection", "viewProjection", "gameTime", "deltaTime", "diffuseColor", "diffuseTexture", "diffuseTextureInfos", "diffuseTextureMatrix"]);
                var d = {
                        vertex: i,
                        fragment: i
                    },
                    m = {
                        needAlphaBlending: o,
                        needAlphaTesting: l,
                        attributes: u,
                        uniforms: c,
                        defines: s,
                        useClipPlane: a,
                        samplers: [],
                        uniformBuffers: [],
                        externalTextures: [],
                        samplerObjects: [],
                        storageBuffers: []
                    };
                r._shaderPath = d, r._options = m, t === !0 && (r.fn_afterBind = r.bind, r.bind = function(e, t, a) {
                    if (void 0 === a && (a = null), null != r.updateGlobalTime && r.updateGlobalTime(), r.after && r.after(), r.fn_afterBind) try {
                        r.fn_afterBind(e, t, a)
                    } catch (i) {}
                    var o = null !== a && void 0 !== a ? a : r.getEffect(),
                        l = n.getScene();
                    if (l.texturesEnabled && null != o)
                        for (var s in r._textures) {
                            var u = r._textures[s];
                            null != u && (o.setFloat2(s + "Infos", u.coordinatesIndex, u.level), o.setMatrix(s + "Matrix", u.getTextureMatrix()))
                        }
                }), r.awake && r.awake()
            }, n.WorldToScreenPoint = function(n, t, a) {
                void 0 === a && (a = null);
                var r = null,
                    i = null != a ? a.viewport : null != n.activeCamera ? n.activeCamera.viewport : null;
                return null != i && (r = e.Vector3.Project(t, e.Matrix.Identity(), n.getTransformMatrix(), i.toGlobal(n.getEngine().getRenderWidth(), n.getEngine().getRenderHeight()))), r
            }, n.ScreenToWorldPoint = function(n, t) {
                return e.Vector3.Unproject(t, n.getEngine().getRenderWidth(), n.getEngine().getRenderHeight(), e.Matrix.Identity(), n.getViewMatrix(), n.getProjectionMatrix())
            }, n.LoadTextFile = function(n, t, a, r) {
                return e.Tools.LoadFile(n, t, a, null, !1, r)
            }, n.LoadTextFileAsync = function(n) {
                return e.Tools.LoadFileAsync(n, !1)
            }, n.GetHttpRequest = function(e, n, t, a, r, i, o) {
                void 0 === n && (n = null), void 0 === t && (t = null), void 0 === a && (a = null), void 0 === r && (r = null), void 0 === i && (i = !1), void 0 === o && (o = null);
                var l = new XMLHttpRequest;
                return l.open("GET", e, !0), i === !0 && (l.responseType = "arraybuffer"), null != o && l.overrideMimeType(o), null != n && n.forEach(function(e) {
                    null != e && null != e.name && "" !== e.name && l.setRequestHeader(e.name, e.value)
                }), l.onreadystatechange = function() {
                    l.readyState === XMLHttpRequest.DONE && null != t && t(l)
                }, l.onprogress = function(e) {
                    null != r && r(e)
                }, l.onerror = function() {
                    null != a && a("Failed to get data from server.")
                }, l.onabort = function() {
                    null != a && a("Aborted get data from server.")
                }, l.send(null), l
            }, n.GetHttpRequestAsync = function(n, t, a, r, i) {
                return void 0 === t && (t = null), void 0 === a && (a = null), void 0 === r && (r = !1), void 0 === i && (i = null), new Promise(function(o, l) {
                    e.Utilities.GetHttpRequest(n, t, function(e) {
                        o(e)
                    }, function(e) {
                        l(e)
                    }, a, r, i)
                })
            }, n.PostHttpRequest = function(e, n, t, a, r, i, o, l, s) {
                void 0 === t && (t = null), void 0 === a && (a = "application/x-www-form-urlencoded"), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === l && (l = !1), void 0 === s && (s = null);
                var u = new XMLHttpRequest;
                return u.open("POST", e, !0), l === !0 && (u.responseType = "arraybuffer"), null != s && u.overrideMimeType(s), null != t && t.forEach(function(e) {
                    null != e && null != e.name && "" !== e.name && u.setRequestHeader(e.name, e.value)
                }), u.setRequestHeader("Content-Type", a), u.onreadystatechange = function() {
                    u.readyState === XMLHttpRequest.DONE && null != r && r(u)
                }, u.onprogress = function(e) {
                    null != o && o(e)
                }, u.onerror = function() {
                    null != i && i("Failed to post data to server.")
                }, u.onabort = function() {
                    null != i && i("Aborted post data to server.")
                }, u.send(n), u
            }, n.PostHttpRequestAsync = function(n, t, a, r, i, o, l) {
                return void 0 === a && (a = null), void 0 === r && (r = "application/x-www-form-urlencoded"), void 0 === i && (i = null), void 0 === o && (o = !1), void 0 === l && (l = null), new Promise(function(s, u) {
                    e.Utilities.PostHttpRequest(n, t, a, r, function(e) {
                        s(e)
                    }, function(e) {
                        u(e)
                    }, i, o, l)
                })
            }, n.ConvertAmmoVector3 = function(n) {
                var t = new e.Vector3(0, 0, 0);
                return e.Utilities.ConvertAmmoVector3ToRef(n, t), t
            }, n.ConvertAmmoVector3ToRef = function(e, n) {
                n.set(e.x(), e.y(), e.z())
            }, n.ConvertAmmoQuaternion = function(n) {
                var t = new e.Quaternion(0, 0, 0, 1);
                return e.Utilities.ConvertAmmoQuaternionToRef(n, t), t
            }, n.ConvertAmmoQuaternionToRef = function(e, n) {
                n.set(e.x(), e.y(), e.z(), e.w())
            }, n.RemapValueToRange = function(e, n, t, a, r) {
                return a + (e - n) * (r - a) / (t - n)
            }, n.CloneSkeletonPrefab = function(n, t, a, r, i) {
                void 0 === i && (i = null);
                var o = new e.Skeleton(a, r || a, n);
                o.needInitialSkinMatrix = t.needInitialSkinMatrix, o.overrideMesh = i || t.overrideMesh;
                for (var l = 0; l < t.bones.length; l++) {
                    var s = t.bones[l],
                        u = null,
                        c = s.getParent();
                    if (c) {
                        var d = t.bones.indexOf(c);
                        u = o.bones[d]
                    }
                    var m = new e.Bone(s.name, o, u, s.getBaseMatrix().clone(), s.getRestPose().clone());
                    m._index = s._index, m.metadata = s.metadata, s._linkedTransformNode && m.linkTransformNode(s._linkedTransformNode), e.DeepCopier.DeepCopy(s.animations, m.animations)
                }
                var p = o,
                    g = t;
                if (g._ranges) {
                    p._ranges = {};
                    for (var h in g._ranges) {
                        var f = g._ranges[h];
                        f && (p._ranges[h] = f.clone())
                    }
                }
                return g._isDirty = !0, o
            }, n.GetSceneTransforms = function(e) {
                var n = null;
                return null != e.transformNodes && e.transformNodes.length > 0 && e.transformNodes.forEach(function(e) {
                    null != e.metadata && null != e.metadata.unity && null != e.metadata.unity.prefab && e.metadata.unity.prefab === !1 && (null == n && (n = []), n.push(e))
                }), null != e.meshes && e.meshes.length > 0 && e.meshes.forEach(function(e) {
                    null != e.metadata && null != e.metadata.unity && null != e.metadata.unity.prefab && e.metadata.unity.prefab === !1 && (null == n && (n = []), n.push(e))
                }), n
            }, n.PostParseSceneComponents = function(n, t, a, r) {
                if (null != t && t.length > 0) {
                    var i = new e.MetadataParser(n);
                    t.forEach(function(e) {
                        i.parseSceneComponents(e)
                    }), i.postProcessSceneComponents(a, r)
                }
            }, n.GetAssetContainerMesh = function(n, t) {
                var a = null,
                    r = t.toLowerCase();
                if (null == a && null != n.meshes && n.meshes.length > 0)
                    for (var i = 0; i < n.meshes.length; i++) {
                        var o = n.meshes[i];
                        if (o instanceof e.Mesh && o.name.toLowerCase() === r) {
                            a = o;
                            break
                        }
                    }
                return a
            }, n.GetAssetContainerNode = function(e, n) {
                var t = null,
                    a = n.toLowerCase();
                if (null == t && null != e.transformNodes && e.transformNodes.length > 0)
                    for (var r = 0; r < e.transformNodes.length; r++) {
                        var i = e.transformNodes[r];
                        if (i.name.toLowerCase() === a) {
                            t = i;
                            break
                        }
                    }
                return t
            }, n.CloneAssetContainerItem = function(n, t, a, r, i) {
                void 0 === r && (r = !1), void 0 === i && (i = !0);
                var o = null,
                    l = {},
                    s = {},
                    u = {},
                    c = null,
                    d = null,
                    m = [],
                    p = [],
                    g = t.toLowerCase(),
                    h = null,
                    f = function(n, t) {
                        t.setEnabled(!0), null == h && (h = t), l[n.uniqueId] = t.uniqueId, s[t.uniqueId] = t, a && (t.name = a(n.name)), null != n.metadata && null != n.metadata.unity && null != n.metadata.unity.entity && (t.metadata = e.Utilities.CloneEntityMetadata(n.metadata));
                        var r = null != t.metadata && null != t.metadata.unity && null != t.metadata.unity.animator ? t.metadata.unity.animator : null;
                        if (null != r && "" !== r && (null == c && (c = []), c.indexOf(r) < 0 && c.push(r), t.metadata.unity.animator = e.Utilities.CreateGuid(), u[r] = t.metadata.unity.animator), n instanceof e.AbstractMesh && null != n.skeleton && (null == d && (d = []), d.indexOf(n.skeleton) < 0 && d.push(n.skeleton)), t instanceof e.Mesh) {
                            var i = t;
                            if (i.morphTargetManager) {
                                var o = n.morphTargetManager;
                                i.morphTargetManager = o.clone();
                                for (var m = 0; m < o.numTargets; m++) {
                                    var p = o.getTarget(m),
                                        g = i.morphTargetManager.getTarget(m);
                                    l[p.uniqueId] = g.uniqueId, s[g.uniqueId] = g
                                }
                            }
                        }
                    };
                if (null == o && null != n.transformNodes && n.transformNodes.length > 0)
                    for (var S = 0; S < n.transformNodes.length; S++) {
                        var M = n.transformNodes[S];
                        if (M.name.toLowerCase() === g) {
                            var y = e.Utilities.InstantiateHierarchy(M, null, function(e, n) {
                                f(e, n)
                            });
                            if (y) {
                                o = y;
                                break
                            }
                        }
                    }
                if (null == o && null != n.meshes && n.meshes.length > 0)
                    for (var v = function(t) {
                            var i = n.meshes[t];
                            if (i.name.toLowerCase() === g) {
                                var u = e.Utilities.InstantiateHierarchy(i, null, function(e, t) {
                                    f(e, t);
                                    var o = t;
                                    if (i.isWorldMatrixFrozen === !0 && o.freezeWorldMatrix && o.freezeWorldMatrix(), t.material && o.material)
                                        if (r === !0) {
                                            var u = e.material;
                                            if (p.indexOf(u) === -1) {
                                                var c = u.clone(a ? a(u.name) : "Clone of " + u.name);
                                                if (u.isFrozen === !0 && c.freeze && c.freeze(), p.push(u), l[u.uniqueId] = c.uniqueId, s[c.uniqueId] = c, "MultiMaterial" === u.getClassName())
                                                    for (var d = u, m = 0, g = d.subMaterials; m < g.length; m++) {
                                                        var h = g[m];
                                                        h && (c = h.clone(a ? a(h.name) : "Clone of " + h.name), h.isFrozen === !0 && c.freeze && c.freeze(), p.push(h), l[h.uniqueId] = c.uniqueId, s[c.uniqueId] = c)
                                                    }
                                            }
                                            o.material = s[l[u.uniqueId]]
                                        } else "MultiMaterial" === o.material.getClassName() ? n.scene.multiMaterials.indexOf(o.material) === -1 && n.scene.addMultiMaterial(o.material) : n.scene.materials.indexOf(o.material) === -1 && n.scene.addMaterial(o.material)
                                });
                                if (u) return o = u, "break"
                            }
                        }, S = 0; S < n.meshes.length; S++) {
                        var b = v(S);
                        if ("break" === b) break
                    }
                return null != d && d.length > 0 && d.forEach(function(t) {
                    for (var r = a ? a(t.name) : "Clone of " + t.name, i = e.Utilities.CloneSkeletonPrefab(n.scene, t, r, r, h), o = 0, u = n.meshes; o < u.length; o++) {
                        var c = u[o];
                        if (c.skeleton === t && !c.isAnInstance) {
                            var d = s[l[c.uniqueId]];
                            if (d.skeleton = i, m.indexOf(i) !== -1) continue;
                            m.push(i);
                            for (var p = 0, g = i.bones; p < g.length; p++) {
                                var f = g[p];
                                f._linkedTransformNode && (f._linkedTransformNode = s[l[f._linkedTransformNode.uniqueId]])
                            }
                        }
                    }
                }), i === !0 && n.animationGroups.forEach(function(e) {
                    var n = e,
                        t = null != n.metadata && null != n.metadata.unity && null != n.metadata.unity.source && "" !== n.metadata.unity.source ? n.metadata.unity.source : null;
                    if (null != t && "" !== t && null != c && c.indexOf(t) >= 0) {
                        var a = e.clone(e.name, function(e) {
                                var n = s[l[e.uniqueId]];
                                return n || e
                            }),
                            r = u[t] || t;
                        null != n.metadata && (a.metadata = {}, a.metadata.unity = {}, a.metadata.unity.id = n.metadata.unity.id, a.metadata.unity.clip = n.metadata.unity.clip, a.metadata.unity.source = r, a.metadata.unity.legacy = n.metadata.unity.legacy, a.metadata.unity.length = n.metadata.unity.length, a.metadata.unity.looping = n.metadata.unity.looping, a.metadata.unity.settings = n.metadata.unity.settings, a.metadata.unity.behavior = n.metadata.unity.behavior, a.metadata.unity.wrapmode = n.metadata.unity.wrapmode, a.metadata.unity.framerate = n.metadata.unity.framerate, a.metadata.unity.humanmotion = n.metadata.unity.humanmotion, a.metadata.unity.averagespeed = n.metadata.unity.averagespeed, a.metadata.unity.averageduration = n.metadata.unity.averageduration, a.metadata.unity.averageangularspeed = n.metadata.unity.averageangularspeed)
                    }
                }), null != o && (o.parent = null), o
            }, n.InstantiateHierarchy = function(n, t, a) {
                if (void 0 === t && (t = null), n instanceof e.Mesh) {
                    var r = null != n.metadata && null != n.metadata.unity && null != n.metadata.unity.instance && n.metadata.unity.instance === !0;
                    return e.Utilities.InstantiateMeshHierarchy(n, t, r, a)
                }
                return e.Utilities.InstantiateNodeHierarchy(n, t, a)
            }, n.InstantiateNodeHierarchy = function(n, t, a) {
                void 0 === t && (t = null);
                var r = n.clone("Clone of " + (n.name || n.id), t || n.parent, !0);
                r && a && a(n, r);
                for (var i = 0, o = n.getChildTransformNodes(!0); i < o.length; i++) {
                    var l = o[i];
                    e.Utilities.InstantiateHierarchy(l, r, a)
                }
                return r
            }, n.InstantiateMeshHierarchy = function(n, t, a, r) {
                void 0 === t && (t = null);
                var i = n.getTotalVertices() > 0 && a === !0 ? n.createInstance("Instance of " + (n.name || n.id)) : n.clone("Clone of " + (n.name || n.id), t || n.parent, !0);
                i && (i.parent = t || n.parent, i.position = n.position.clone(), i.scaling = n.scaling.clone(), n.rotationQuaternion ? i.rotationQuaternion = n.rotationQuaternion.clone() : i.rotation = n.rotation.clone(), r && r(n, i));
                for (var o = 0, l = n.getChildTransformNodes(!0); o < l.length; o++) {
                    var s = l[o];
                    e.Utilities.InstantiateHierarchy(s, i, r)
                }
                return i
            }, n.ComputeBlendingSpeed = function(e, n, t) {
                void 0 === t && (t = !1);
                var a = 1 / (e * n);
                return t === !0 && (a *= .5), a
            }, n.CalculateCameraDistance = function(e, n, t) {
                void 0 === t && (t = 1);
                var a = 1;
                return Math.round(e * t * n * a)
            }, n.InstantiateClass = function(e) {
                for (var n = e.split("."), t = window || this, a = 0, r = n.length; a < r; a++) t = t[n[a]];
                return "function" == typeof t ? t : null
            }, n.GetSimpleClassName = function(e) {
                if (e && e.constructor && e.constructor.toString) {
                    var n = e.constructor.toString().match(/function\s*(\w+)/);
                    if (n && 2 == n.length) return n[1]
                }
            }, n.DisposeEntity = function(n) {
                if (null != n) {
                    if (null != n.metadata && n.metadata.unity) {
                        var t = n.metadata.unity;
                        null != t.components && t.components.length > 0 && t.components.forEach(function(n) {
                            if (null != n.instance) {
                                try {
                                    e.SceneManager.DestroyScriptComponent(n.instance)
                                } catch (t) {}
                                n.instance = null
                            }
                        }), delete n.metadata.unity
                    }
                    if (null != n.metadata && n.metadata.mixer && delete n.metadata.mixer, null != n.metadata && null != n.metadata.clone && delete n.metadata.clone, null != n.physicsImpostor) {
                        var a = n.physicsImpostor;
                        null != a.onCollideEvent && (a.onCollideEvent = null), null != a.tmpCollisionObjects && delete a.tmpCollisionObjects, null != n.physicsImpostor.physicsBody && (null != n.physicsImpostor.physicsBody.entity && delete n.physicsImpostor.physicsBody.entity, null != n.physicsImpostor.physicsBody.triangleMapInfo && delete n.physicsImpostor.physicsBody.triangleMapInfo), n.physicsImpostor.dispose(), n.physicsImpostor = null
                    }
                    null != n.skeleton && (null != n.skeleton._sockets && delete n.skeleton._sockets, null != n.skeleton.bones && n.skeleton.bones.length > 0 && n.skeleton.bones.forEach(function(e) {
                        null != e && null != e.metadata && (e.metadata = null)
                    })), null != n.cameraRig && (n.cameraRig.dispose && n.cameraRig.dispose(), delete n.cameraRig), null != n.lightRig && (n.lightRig.dispose && n.lightRig.dispose(), delete n.lightRig), null != n.shadowBox && (n.shadowBox.dispose && n.shadowBox.dispose(), delete n.shadowBox), null != n._debugCollider && (n._debugCollider.dispose && n._debugCollider.dispose(), delete n._debugCollider), null != n._meshCollider && (n._meshCollider = null), null != n._colliderType && delete n._colliderType
                }
            }, n.SearchTransformNodes = function(n, t, a) {
                void 0 === a && (a = e.SearchType.ExactMatch);
                var r = null,
                    i = null != a ? a : e.SearchType.ExactMatch;
                if (null != t && t.length > 0)
                    for (var o = 0; o < t.length; o++) {
                        var l = t[o];
                        if (i === e.SearchType.ExactMatch) {
                            if (l.name === n) {
                                r = l;
                                break
                            }
                        } else if (i === e.SearchType.StartsWith) {
                            if (e.Utilities.StartsWith(l.name, n)) {
                                r = l;
                                break
                            }
                        } else if (i === e.SearchType.EndsWith) {
                            if (e.Utilities.EndsWith(l.name, n)) {
                                r = l;
                                break
                            }
                        } else if (i === e.SearchType.IndexOf) {
                            if (l.name.indexOf(n) >= 0) {
                                r = l;
                                break
                            }
                        } else if (l.name === n) {
                            r = l;
                            break
                        }
                    }
                return r
            }, n.SearchTransformNodeForTags = function(n, t) {
                var a = null;
                if (null != t && t.length > 0)
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i instanceof e.TransformNode && e.Tags.MatchesQuery(i, n)) {
                            a = i;
                            break
                        }
                    }
                return a
            }, n.SearchAllTransformNodesForTags = function(n, t) {
                var a = null;
                if (null != t && t.length > 0)
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i instanceof e.TransformNode && e.Tags.MatchesQuery(i, n) && (null == a && (a = []), a.push(i))
                    }
                return a
            }, n.SearchTransformNodeForScript = function(n, t) {
                var a = null;
                if (null != t && t.length > 0)
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i instanceof e.TransformNode) {
                            var o = e.SceneManager.FindScriptComponent(i, n);
                            if (null != o) {
                                a = i;
                                break
                            }
                        }
                    }
                return a
            }, n.SearchAllTransformNodesForScript = function(n, t) {
                var a = null;
                if (null != t && t.length > 0)
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i instanceof e.TransformNode) {
                            var o = e.SceneManager.FindScriptComponent(i, n);
                            null != o && (null == a && (a = []), a.push(i))
                        }
                    }
                return a
            }, n.CreateGuid = function(n) {
                void 0 === n && (n = null);
                var t = e.Tools.RandomId();
                return e.Utilities.IsNullOrEmpty(n) || (t += "-" + n), t
            }, n.ValidateTransformGuid = function(e) {
                if (null != e && null != e.metadata && null != e.metadata.unity && null != e.metadata.unity.guid && "" !== e.metadata.unity.guid) {
                    var n = e.metadata.unity.guid;
                    e.id !== n && (e.id = n), delete e.metadata.unity.guid
                }
            }, n.AddShadowCastersToLight = function(n, t, a) {
                var r;
                void 0 === a && (a = !1);
                var i = n.getShadowGenerator();
                if (null != i) {
                    var o = i.getShadowMap();
                    if (null != o)
                        for (var l = 0; l < t.length; l++) {
                            var s = t[l];
                            if (s instanceof e.AbstractMesh && (null == o.renderList && (o.renderList = []), o.renderList.push(s)), a === !0) {
                                var u = s.getChildMeshes();
                                null != u && u.length > 0 && (null == o.renderList && (o.renderList = []), (r = o.renderList).push.apply(r, u))
                            }
                        }
                }
            }, n.RegisterInstancedMeshBuffers = function(n) {
                var t = null != n.metadata.unity.buffers ? n.metadata.unity.buffers : null;
                null != t && (null != t.floats && t.floats.length > 0 && t.floats.forEach(function(e) {
                    null != e.kind && "" !== e.kind && null != e.value && (n.registerInstancedBuffer(e.kind, 1), n.instancedBuffers[e.kind] = e.value)
                }), null != t.colors && t.colors.length > 0 && t.colors.forEach(function(t) {
                    null != t.kind && "" !== t.kind && null != t.value && (n.registerInstancedBuffer(t.kind, 4), n.instancedBuffers[t.kind] = new e.Color4(t.value.r || 0, t.value.g || 0, t.value.b || 0, t.value.a || 1).toLinearSpace())
                }), null != t.vector2 && t.vector2.length > 0 && t.vector2.forEach(function(t) {
                    null != t.kind && "" !== t.kind && null != t.value && (n.registerInstancedBuffer(t.kind, 2), n.instancedBuffers[t.kind] = new e.Vector2(t.value.x || 0, t.value.y || 0))
                }), null != t.vector3 && t.vector3.length > 0 && t.vector3.forEach(function(t) {
                    null != t.kind && "" !== t.kind && null != t.value && (n.registerInstancedBuffer(t.kind, 3), n.instancedBuffers[t.kind] = new e.Vector3(t.value.x || 0, t.value.y || 0, t.value.z || 0))
                }), null != t.vector4 && t.vector4.length > 0 && t.vector4.forEach(function(t) {
                    null != t.kind && "" !== t.kind && null != t.value && (n.registerInstancedBuffer(t.kind, 4), n.instancedBuffers[t.kind] = new e.Vector4(t.value.x || 0, t.value.y || 0, t.value.z || 0, t.value.w || 0))
                }))
            }, n.CloneValue = function(n, t) {
                return n ? n instanceof e.Mesh ? null : n instanceof e.SubMesh ? n.clone(t) : n.clone ? n.clone() : n : null
            }, n.CloneEntityMetadata = function(n) {
                var t = null;
                if (null != n) {
                    var a = null;
                    if (null != n.unity) {
                        var r = null != n.unity.instance && n.unity.instance,
                            i = null == n.unity.visible || n.unity.visible,
                            o = null != n.unity.visibility ? n.unity.visibility : 1,
                            l = null != n.unity.billboard ? n.unity.billboard : 0,
                            s = null != n.unity.tags ? n.unity.tags : "Untagged Layer0",
                            u = null != n.unity.skin && n.unity.skin,
                            c = null != n.unity.bone ? n.unity.bone : null,
                            d = null != n.unity.rootbone && n.unity.rootbone,
                            m = null != n.unity.rootpos ? n.unity.rootpos : null,
                            p = null != n.unity.rootrot ? n.unity.rootrot : null,
                            g = null != n.unity.group ? n.unity.group : "Untagged",
                            h = null != n.unity.layer ? n.unity.layer : 0,
                            f = null != n.unity.layername ? n.unity.layername : "Default",
                            S = null != n.unity.navigation ? n.unity.navigation : null,
                            M = null != n.unity.lightmapped && n.unity.lightmapped,
                            y = null != n.unity.lightmapuvs ? n.unity.lightmapuvs : null,
                            v = null != n.unity.animator ? n.unity.animator : null,
                            b = null,
                            T = null,
                            _ = null,
                            x = null;
                        n.unity.physics && (b = {}, e.Utilities.DeepCopyProperties(n.unity.physics, b)), n.unity.renderer && (T = {}, e.Utilities.DeepCopyProperties(n.unity.renderer, T)), n.unity.collision && (_ = {}, e.Utilities.DeepCopyProperties(n.unity.collision, _)), n.unity.properties && (x = {}, e.Utilities.DeepCopyProperties(n.unity.properties, x));
                        var C = null;
                        null != n.unity.wheels && n.unity.wheels.length > 0 && (C = [], n.unity.wheels.forEach(function(n) {
                            if (null != n) {
                                var t = {};
                                e.Utilities.DeepCopyProperties(n, t), C.push(t)
                            }
                        }));
                        var A = null;
                        null != n.unity.components && n.unity.components.length > 0 && (A = [], n.unity.components.forEach(function(n) {
                            if (null != n) {
                                var t = {},
                                    a = null != n.alias && "script" === n.alias;
                                e.Utilities.DeepCopyProperties(n, t, ["instance"]), a === !0 && (t.instance = null), A.push(t)
                            }
                        })), a = {}, a.parsed = !1, a.prefab = !1, a.buffers = null, a.lods = null, a.coverages = null, a.distances = null, a.handlers = null, a.instance = r, a.visible = i, a.visibility = o, a.billboard = l, a.tags = s, a.skin = u, a.bone = c, a.rootbone = d, a.rootpos = m, a.rootrot = p, a.group = g, a.layer = h, a.layername = f, a.navigation = S, a.lightmapped = M, a.lightmapuvs = y, a.animator = v, a.renderer = T, a.physics = b, a.wheels = C, a.collision = _, a.properties = x, a.components = A
                    }
                    null != a && (t = {
                        unity: a
                    })
                }
                return t
            }, n.DeepCopyProperties = function(n, t, a, r) {
                for (var i in n)
                    if (("_" !== i[0] || r && r.indexOf(i) !== -1) && (!a || a.indexOf(i) === -1)) {
                        var o = n[i],
                            l = typeof o;
                        if ("function" !== l)
                            if ("object" === l)
                                if (o instanceof Array) {
                                    if (t[i] = [], o.length > 0)
                                        if ("object" == typeof o[0])
                                            for (var s = 0; s < o.length; s++) {
                                                var u = e.Utilities.CloneValue(o[s], t);
                                                t[i].indexOf(u) === -1 && t[i].push(u)
                                            } else t[i] = o.slice(0)
                                } else t[i] = e.Utilities.CloneValue(o, t);
                        else t[i] = o
                    }
            }, n.ValidateTransformMetadata = function(n) {
                null == n.metadata && (n.metadata = {}), null == n.metadata.unity && (n.metadata.unity = {});
                var t = n.metadata.unity;
                e.Utilities.HasOwnProperty(t, "entity") || (n.metadata.unity.entity = !0), e.Utilities.HasOwnProperty(t, "parsed") || (n.metadata.unity.parsed = !1), e.Utilities.HasOwnProperty(t, "prefab") || (n.metadata.unity.prefab = !1), e.Utilities.HasOwnProperty(t, "instance") || (n.metadata.unity.instance = !1), e.Utilities.HasOwnProperty(t, "buffers") || (n.metadata.unity.buffers = null), e.Utilities.HasOwnProperty(t, "visible") || (n.metadata.unity.visible = !0), e.Utilities.HasOwnProperty(t, "visibility") || (n.metadata.unity.visibility = 1), e.Utilities.HasOwnProperty(t, "billboard") || (n.metadata.unity.billboard = 0), e.Utilities.HasOwnProperty(t, "tags") || (n.metadata.unity.tags = "Untagged Layer0"), e.Utilities.HasOwnProperty(t, "skin") || (n.metadata.unity.skin = !1), e.Utilities.HasOwnProperty(t, "bone") || (n.metadata.unity.bone = null), e.Utilities.HasOwnProperty(t, "rootbone") || (n.metadata.unity.rootbone = !1), e.Utilities.HasOwnProperty(t, "rootpos") || (n.metadata.unity.rootpos = null), e.Utilities.HasOwnProperty(t, "rootrot") || (n.metadata.unity.rootrot = null), e.Utilities.HasOwnProperty(t, "group") || (n.metadata.unity.group = "Untagged"), e.Utilities.HasOwnProperty(t, "layer") || (n.metadata.unity.layer = 0), e.Utilities.HasOwnProperty(t, "layername") || (n.metadata.unity.layername = "Default"), e.Utilities.HasOwnProperty(t, "navigation") || (n.metadata.unity.navigation = null), e.Utilities.HasOwnProperty(t, "lightmapped") || (n.metadata.unity.lightmapped = !1), e.Utilities.HasOwnProperty(t, "lightmapuvs") || (n.metadata.unity.lightmapuvs = !1), e.Utilities.HasOwnProperty(t, "animator") || (n.metadata.unity.animator = null), e.Utilities.HasOwnProperty(t, "lods") || (n.metadata.unity.lods = null), e.Utilities.HasOwnProperty(t, "coverages") || (n.metadata.unity.coverages = null), e.Utilities.HasOwnProperty(t, "distances") || (n.metadata.unity.distances = null), e.Utilities.HasOwnProperty(t, "handlers") || (n.metadata.unity.handlers = null), e.Utilities.HasOwnProperty(t, "physics") || (n.metadata.unity.physics = null), e.Utilities.HasOwnProperty(t, "wheels") || (n.metadata.unity.wheels = null), e.Utilities.HasOwnProperty(t, "renderer") || (n.metadata.unity.renderer = null), e.Utilities.HasOwnProperty(t, "collision") || (n.metadata.unity.collision = null), e.Utilities.HasOwnProperty(t, "properties") || (n.metadata.unity.properties = null), e.Utilities.HasOwnProperty(t, "components") || (n.metadata.unity.components = null)
            }, n.UpVector = e.Vector3.Up(), n.AuxVector = e.Vector3.Zero(), n.ZeroVector = e.Vector3.Zero(), n.TempMatrix = e.Matrix.Zero(), n.TempMatrix2 = e.Matrix.Zero(), n.TempVector2 = e.Vector2.Zero(), n.TempVector3 = e.Vector3.Zero(), n.TempQuaternion = e.Quaternion.Zero(), n.TempQuaternion2 = e.Quaternion.Zero(), n.TempQuaternion3 = e.Quaternion.Zero(), n.PrintElement = null, n.LoadingState = -1, n.OnPreloaderProgress = null, n.OnPreloaderComplete = null, n.TmpHullMatrix = null, n.TmpAmmoVectorA = null, n.TmpAmmoVectorB = null, n.TmpAmmoVectorC = null, n.TmpAmmoVectorD = null, n.TmpAmmoNormalA = null, n.TmpAmmoNormalB = null, n.TmpAmmoNormalC = null,
            n
    }();
    e.Utilities = w
}(BABYLON || (BABYLON = {}));
var UTIL = BABYLON.Utilities,
    __extends = this && this.__extends || function() {
        var e = function(n, t) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                })(n, t)
        };
        return function(n, t) {
            function a() {
                this.constructor = n
            }
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            e(n, t), n.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
        }
    }(),
    BABYLON;
! function(e) {
    var n = function() {
        function e() {
            this._defines = {}, this._defines = {}
        }
        return e.prototype.getDefines = function() {
            return this._defines
        }, e.prototype.defineBoolean = function(e) {
            this._defines[e] = !0
        }, e.prototype.defineNumeric = function(e, n) {
            this._defines[e] = n
        }, e.ShaderIndexer = 0, e
    }();
    e.UniversalShaderDefines = n;
    var t = function() {
        function e() {}
        return e
    }();
    e.UniversalAlbedoChunks = t;
    var a = function(n) {
        function t(t, a, r) {
            void 0 === r && (r = !1);
            var i = n.call(this, t, a) || this;
            i.universalMaterial = !0, i.locals = null, i.terrainInfo = null, i._defines = null, i._uniforms = [], i._samplers = [], i._attributes = [], i._textures = {}, i._vectors4 = {}, i._floats = {}, i._enableTime = !1, i._timeInitialized = !1, i.dumpEffect = !1, i.locals = new e.UniversalShaderDefines, i._defines = null, i._createdShaderName = null, i.enableShaderChunks = !1, i.materialShaderChunks = new e.UniversalAlbedoChunks, i.customShaderNameResolve = i._buildCustomShader, i.customShaderChunkResolve();
            var o = i;
            return o.awake && o.awake(), i
        }
        return __extends(t, n), t.prototype.updateShaderChunks = function() {}, t.prototype.getShaderName = function() {
            return "pbr"
        }, t.prototype.getShaderChunk = function() {
            return null
        }, t.prototype.getShaderDefines = function() {
            return this._defines
        }, t.prototype.getCustomAttributes = function() {
            return null
        }, Object.defineProperty(t.prototype, "enableTime", {
            get: function() {
                return this._enableTime
            },
            set: function(e) {
                this._enableTime = e, this.updateGlobalTime()
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.updateGlobalTime = function() {
            this._enableTime === !0 && (this._timeInitialized === !1 ? (this._timeInitialized = !0, this.setFloat("gameTime", e.SceneManager.GetGameTime(), !0), this.setFloat("deltaTime", e.SceneManager.GetDeltaSeconds(this.getScene()), !0)) : (this.setFloat("gameTime", e.SceneManager.GetGameTime(), !1), this.setFloat("deltaTime", e.SceneManager.GetDeltaSeconds(this.getScene()), !1)))
        }, t.prototype.getTexture = function(e) {
            return this._textures[e]
        }, t.prototype.getVector4 = function(e) {
            return this._vectors4[e]
        }, t.prototype.getFloat = function(e) {
            return this._floats[e]
        }, t.prototype.setTexture = function(e, n, t) {
            return void 0 === t && (t = !1), t === !0 && this.checkSampler(e), this._textures[e] = n, this
        }, t.prototype.setVector4 = function(e, n, t) {
            return void 0 === t && (t = !1), t === !0 && this.checkUniform(e), this._vectors4[e] = n, this
        }, t.prototype.setFloat = function(e, n, t) {
            return void 0 === t && (t = !1), t === !0 && this.checkUniform(e), this._floats[e] = n, this
        }, t.prototype.addAttribute = function(e) {
            this._attributes.indexOf(e) === -1 && this._attributes.push(e)
        }, t.prototype.checkUniform = function(e) {
            this._uniforms.indexOf(e) === -1 && (this._uniforms.push(e), this.locals.defineBoolean(e.toUpperCase()))
        }, t.prototype.checkSampler = function(e) {
            this._samplers.indexOf(e) === -1 && (this._samplers.push(e), this.locals.defineBoolean(e.toUpperCase()), this.checkUniform(e + "Infos"), this.checkUniform(e + "Matrix"))
        }, t.prototype.getAnimatables = function() {
            var e = n.prototype.getAnimatables.call(this);
            for (var t in this._textures) {
                var a = this._textures[t];
                a && a.animations && a.animations.length > 0 && e.push(a)
            }
            return e
        }, t.prototype.getActiveTextures = function() {
            var e = n.prototype.getActiveTextures.call(this);
            for (var t in this._textures) {
                var a = this._textures[t];
                a && e.push(a)
            }
            return e
        }, t.prototype.hasTexture = function(e) {
            if (n.prototype.hasTexture.call(this, e)) return !0;
            var t = !1;
            for (var a in this._textures) {
                var r = this._textures[a];
                if (r === r) {
                    t = !0;
                    break
                }
            }
            return t
        }, t.prototype.dispose = function(e, t) {
            if (t)
                for (var a in this._textures) {
                    var r = this._textures[a];
                    r && r.dispose(), this._textures[a] = null
                }
            this._textures = {}, n.prototype.dispose.call(this, e, t)
        }, t.prototype.clone = function(n) {
            var t, a = this,
                r = e.SerializationHelper.Clone(function() {
                    return new e.UniversalAlbedoMaterial(n, a.getScene())
                }, this);
            r._textures = {};
            for (t in this._textures) {
                var i = this._textures[t];
                i && r.setTexture(t, i.clone(), !0)
            }
            r._vectors4 = {};
            for (t in this._vectors4) r.setVector4(t, this._vectors4[t].clone(), !0);
            r._floats = {};
            for (t in this._floats) r.setFloat(t, this._floats[t], !0);
            return r
        }, t.prototype.serialize = function() {
            var n, t = e.SerializationHelper.Serialize(this);
            t.customType = "BABYLON.UniversalAlbedoMaterial", t.textures = {};
            for (n in this._textures) {
                var a = this._textures[n];
                a && (t.textures[n] = a.serialize())
            }
            t.vectors4 = {};
            for (n in this._vectors4) t.vectors4[n] = this._vectors4[n].asArray();
            t.floats = {};
            for (n in this._floats) t.floats[n] = this._floats[n];
            return t
        }, t.Parse = function(n, t, a) {
            var r, i = e.SerializationHelper.Parse(function() {
                return new e.UniversalAlbedoMaterial(n.name, t)
            }, n, t, a);
            for (r in n.textures) {
                var o = n.textures[r];
                o && i.setTexture(r, e.Texture.Parse(o, t, a), !0)
            }
            for (r in n.vectors4) i.setVector4(r, e.Vector4.FromArray(n.vectors4[r]), !0);
            for (r in n.floats) i.setFloat(r, n.floats[r], !0);
            return i
        }, t.prototype.customShaderChunkResolve = function() {
            var n = this.getShaderChunk();
            if (null != n && "" !== n) {
                var t = n + "ShaderChunks";
                if (null != e.Effect.ShadersStore[t]) {
                    var a = e.Effect.ShadersStore[t],
                        r = e.Utilities.HasOwnProperty(a, "VertexBegin") ? a.VertexBegin : null;
                    null != r && "" !== r && (this.materialShaderChunks.Vertex_Begin = r);
                    var i = e.Utilities.HasOwnProperty(a, "VertexDefinitions") ? a.VertexDefinitions : null;
                    null != i && "" !== i && (this.materialShaderChunks.Vertex_Definitions = i);
                    var o = e.Utilities.HasOwnProperty(a, "VertexMainBegin") ? a.VertexMainBegin : null;
                    null != o && "" !== o && (this.materialShaderChunks.Vertex_MainBegin = o);
                    var l = e.Utilities.HasOwnProperty(a, "VertexUpdatePosition") ? a.VertexUpdatePosition : null;
                    null != l && "" !== l && (this.materialShaderChunks.Vertex_Before_PositionUpdated = l.replace("result", "positionUpdated"));
                    var s = e.Utilities.HasOwnProperty(a, "VertexUpdateNormal") ? a.VertexUpdateNormal : null;
                    null != s && "" !== s && (this.materialShaderChunks.Vertex_Before_NormalUpdated = s.replace("result", "normalUpdated"));
                    var u = e.Utilities.HasOwnProperty(a, "VertexWorldPos") ? a.VertexWorldPos : null;
                    null != u && "" !== u && (this.materialShaderChunks.Vertex_After_WorldPosComputed = u);
                    var c = e.Utilities.HasOwnProperty(a, "VertexMainEnd") ? a.VertexMainEnd : null;
                    null != c && "" !== c && (this.materialShaderChunks.Vertex_MainEnd = c);
                    var d = e.Utilities.HasOwnProperty(a, "FragmentBegin") ? a.FragmentBegin : null;
                    null != d && "" !== d && (this.materialShaderChunks.Fragment_Begin = d);
                    var m = e.Utilities.HasOwnProperty(a, "FragmentDefinitions") ? a.FragmentDefinitions : null;
                    null != m && "" !== m && (this.materialShaderChunks.Fragment_Definitions = m);
                    var p = e.Utilities.HasOwnProperty(a, "FragmentMainBegin") ? a.FragmentMainBegin : null;
                    null != p && "" !== p && (this.materialShaderChunks.Fragment_MainBegin = p);
                    var g = e.Utilities.HasOwnProperty(a, "FragmentUpdateAlbedo") ? a.FragmentUpdateAlbedo : null;
                    null != g && "" !== g && (this.materialShaderChunks.Fragment_Custom_Albedo = g.replace("result", "surfaceAlbedo"));
                    var h = e.Utilities.HasOwnProperty(a, "FragmentUpdateAlpha") ? a.FragmentUpdateAlpha : null;
                    null != h && "" !== h && (this.materialShaderChunks.Fragment_Custom_Alpha = h.replace("result", "alpha"));
                    var f = e.Utilities.HasOwnProperty(a, "FragmentMetallicRoughness") ? a.FragmentMetallicRoughness : null;
                    null != f && "" !== f && (this.materialShaderChunks.Fragment_MetallicRoughness = f);
                    var S = e.Utilities.HasOwnProperty(a, "FragmentMicroSurface") ? a.FragmentMicroSurface : null;
                    null != S && "" !== S && (this.materialShaderChunks.Fragment_MicroSurface = S);
                    var M = e.Utilities.HasOwnProperty(a, "FragmentBeforeLights") ? a.FragmentBeforeLights : null;
                    null != M && "" !== M && (this.materialShaderChunks.Fragment_Before_Lights = M);
                    var y = e.Utilities.HasOwnProperty(a, "FragmentBeforeFog") ? a.FragmentBeforeFog : null;
                    null != y && "" !== y && (this.materialShaderChunks.Fragment_Before_Fog = y);
                    var v = e.Utilities.HasOwnProperty(a, "FragmentBeforeFragColor") ? a.FragmentBeforeFragColor : null;
                    null != v && "" !== v && (this.materialShaderChunks.Fragment_Before_FragColor = v.replace("result", "color"))
                } else e.Tools.Warn("Failed To Locate Shader Chunk Base: " + t)
            }
        }, t.prototype._buildCustomShader = function(n, t, a, r, i, o, l) {
            var s = this;
            null == l || null != l.processFinalCode && void 0 != l.processFinalCode || (l.processFinalCode = function(n, t) {
                if ("vertex" === n) return t;
                var a = new e.ShaderCodeInliner(t);
                return a.inlineToken = "#define pbr_inline", a.processCode(), a.code
            }), this._defines = i;
            var u = this.locals.getDefines();
            if (null != u && null != this._defines) {
                var c = Object.keys(u);
                if (null != c && c.length > 0) {
                    for (var d = this._defines, m = 0, p = c; m < p.length; m++) {
                        var g = p[m];
                        d[g] = u[g]
                    }
                    this._defines.rebuild()
                }
            }
            var h = 0;
            if (null != this._uniforms && this._uniforms.length > 0)
                for (h = 0; h < this._uniforms.length; h++) {
                    var f = this._uniforms[h];
                    t.indexOf(f) === -1 && t.push(f)
                }
            if (h = 0, null != this._samplers && this._samplers.length > 0)
                for (h = 0; h < this._samplers.length; h++) {
                    var S = this._samplers[h];
                    r.indexOf(S) === -1 && r.push(S)
                }
            if (h = 0, null != this._attributes && this._attributes.length > 0)
                for (h = 0; h < this._attributes.length; h++) {
                    var M = this._attributes[h];
                    o.indexOf(M) === -1 && o.push(M)
                }
            h = 0;
            var y = this.getCustomAttributes();
            if (null != y && y.length > 0)
                for (h = 0; h < y.length; h++) {
                    var v = y[h];
                    o.indexOf(v) === -1 && o.push(v)
                }
            if (null != this._createdShaderName && "" !== this._createdShaderName) return this._createdShaderName;
            var b = this.getShaderName();
            null != b && "" !== b || (b = n), null != b && "" !== b || (b = "pbr");
            var T = this._afterBind.bind(this);
            return this._afterBind = function(e, n) {
                if (n) {
                    s._attachAfterBind(e, n);
                    try {
                        T(e, n)
                    } catch (n) {}
                }
            }, this._createdShaderName = this.enableShaderChunks === !0 ? this._createShaderChunks(b) : b, this._createdShaderName
        }, t.prototype._createShaderChunks = function(n) {
            var t = this.getShaderChunk();
            null != t && "" !== t || (t = n), e.UniversalShaderDefines.ShaderIndexer++;
            var a = (t + "Custom" + e.UniversalShaderDefines.ShaderIndexer).trim(),
                r = e.Effect.ShadersStore[n + "VertexShader"],
                i = e.Effect.ShadersStore[n + "PixelShader"];
            i = i.replace(/#include<pbrBlockAlbedoOpacity>/g, e.Effect.IncludesShadersStore.pbrBlockAlbedoOpacity), i = i.replace(/#include<pbrBlockReflectivity>/g, e.Effect.IncludesShadersStore.pbrBlockReflectivity), i = i.replace(/#include<pbrBlockFinalColorComposition>/g, e.Effect.IncludesShadersStore.pbrBlockFinalColorComposition), this.updateShaderChunks();
            var o = a + "VertexShader";
            e.Effect.ShadersStore[o] = r.replace("#define CUSTOM_VERTEX_BEGIN", this.materialShaderChunks.Vertex_Begin ? this.materialShaderChunks.Vertex_Begin : "").replace("#define CUSTOM_VERTEX_DEFINITIONS", this.materialShaderChunks.Vertex_Definitions ? this.materialShaderChunks.Vertex_Definitions : "").replace("#define CUSTOM_VERTEX_MAIN_BEGIN", this.materialShaderChunks.Vertex_MainBegin ? this.materialShaderChunks.Vertex_MainBegin : "").replace("#define CUSTOM_VERTEX_UPDATE_POSITION", this.materialShaderChunks.Vertex_Before_PositionUpdated ? this.materialShaderChunks.Vertex_Before_PositionUpdated : "").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL", this.materialShaderChunks.Vertex_Before_NormalUpdated ? this.materialShaderChunks.Vertex_Before_NormalUpdated : "").replace("#define CUSTOM_VERTEX_MAIN_END", this.materialShaderChunks.Vertex_MainEnd ? this.materialShaderChunks.Vertex_MainEnd : ""), this.materialShaderChunks.Vertex_After_WorldPosComputed && (e.Effect.ShadersStore[o] = e.Effect.ShadersStore[o].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS", this.materialShaderChunks.Vertex_After_WorldPosComputed));
            var l = a + "PixelShader";
            return e.Effect.ShadersStore[l] = i.replace("#define CUSTOM_FRAGMENT_BEGIN", this.materialShaderChunks.Fragment_Begin ? this.materialShaderChunks.Fragment_Begin : "").replace("#define CUSTOM_FRAGMENT_DEFINITIONS", this.materialShaderChunks.Fragment_Definitions ? this.materialShaderChunks.Fragment_Definitions : "").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN", this.materialShaderChunks.Fragment_MainBegin ? this.materialShaderChunks.Fragment_MainBegin : "").replace("#define CUSTOM_FRAGMENT_UPDATE_ALBEDO", this.materialShaderChunks.Fragment_Custom_Albedo ? this.materialShaderChunks.Fragment_Custom_Albedo : "").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA", this.materialShaderChunks.Fragment_Custom_Alpha ? this.materialShaderChunks.Fragment_Custom_Alpha : "").replace("#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS", this.materialShaderChunks.Fragment_MetallicRoughness ? this.materialShaderChunks.Fragment_MetallicRoughness : "").replace("#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE", this.materialShaderChunks.Fragment_MicroSurface ? this.materialShaderChunks.Fragment_MicroSurface : "").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS", this.materialShaderChunks.Fragment_Before_Lights ? this.materialShaderChunks.Fragment_Before_Lights : "").replace("#define CUSTOM_FRAGMENT_BEFORE_FOG", this.materialShaderChunks.Fragment_Before_Fog ? this.materialShaderChunks.Fragment_Before_Fog : "").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR", this.materialShaderChunks.Fragment_Before_FragColor ? this.materialShaderChunks.Fragment_Before_FragColor : ""), this.materialShaderChunks.Fragment_Before_Fog && (e.Effect.ShadersStore[l] = e.Effect.ShadersStore[l].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG", this.materialShaderChunks.Fragment_Before_Fog)), a
        }, t.prototype._attachAfterBind = function(e, n) {
            this.updateGlobalTime();
            var t = this;
            t.after && t.after();
            var a, r = this.getScene();
            if (r.texturesEnabled)
                for (a in this._textures) {
                    var i = this._textures[a];
                    null != i && i.isReady && i.isReady() && (n.setTexture(a, i), n.setFloat2(a + "Infos", i.coordinatesIndex, i.level), n.setMatrix(a + "Matrix", i.getTextureMatrix()))
                }
            for (a in this._vectors4) n.setVector4(a, this._vectors4[a]);
            for (a in this._floats) n.setFloat(a, this._floats[a])
        }, t
    }(e.PBRMaterial);
    e.UniversalAlbedoMaterial = a, e.RegisterClass("BABYLON.UniversalAlbedoMaterial", a);
    var r = function(n) {
        function t(e, t, a) {
            var r = n.call(this, e, t, null, a) || this;
            return r._enableTime = !1, r
        }
        return __extends(t, n), Object.defineProperty(t.prototype, "enableTime", {
            get: function() {
                return this._enableTime
            },
            set: function(e) {
                this._enableTime = e, this.updateGlobalTime()
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.updateGlobalTime = function() {
            this._enableTime === !0 && (this.setFloat("gameTime", e.SceneManager.GetGameTime()), this.setFloat("deltaTime", e.SceneManager.GetDeltaSeconds(this.getScene())))
        }, t
    }(e.ShaderMaterial);
    e.UniversalShaderMaterial = r, e.RegisterClass("BABYLON.UniversalShaderMaterial", r);
    var i = function(n) {
        function t(e, t, a) {
            var r = n.call(this, e, t, a) || this;
            r._textures = {}, r._vectors4 = {}, r._floats = {}, r._enableTime = !1, r._timeInitialized = !1;
            var i = r;
            return i.awake && i.awake(), r.onBindObservable.add(function() {
                r.updateGlobalTime(), i.after && i.after()
            }), r
        }
        return __extends(t, n), t.prototype.compile = function() {}, Object.defineProperty(t.prototype, "enableTime", {
            get: function() {
                return this._enableTime
            },
            set: function(e) {
                this._enableTime = e, this.updateGlobalTime()
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.updateGlobalTime = function() {
            this._enableTime === !0 && (this._timeInitialized === !1 ? (this._timeInitialized = !0, this.setFloat("gameTime", e.SceneManager.GetGameTime(), !0), this.setFloat("deltaTime", e.SceneManager.GetDeltaSeconds(this.getScene()), !0)) : (this.setFloat("gameTime", e.SceneManager.GetGameTime(), !1), this.setFloat("deltaTime", e.SceneManager.GetDeltaSeconds(this.getScene()), !1)))
        }, t.prototype.getTexture = function(e) {
            return this._textures[e]
        }, t.prototype.getVector4 = function(e) {
            return this._vectors4[e]
        }, t.prototype.getFloat = function(e) {
            return this._floats[e]
        }, t.prototype.setTexture = function(e, n, t) {
            return void 0 === t && (t = !1), this._textures[e] = n, this
        }, t.prototype.setVector4 = function(e, n, t) {
            return void 0 === t && (t = !1), this._vectors4[e] = n, this
        }, t.prototype.setFloat = function(e, n, t) {
            return void 0 === t && (t = !1), this._floats[e] = n, this
        }, t.prototype.dispose = function(e, t) {
            if (t)
                for (var a in this._textures) {
                    var r = this._textures[a];
                    r && r.dispose(), this._textures[a] = null
                }
            this._textures = {}, n.prototype.dispose.call(this, e, t)
        }, t.prototype.clone = function(n) {
            var t, a = this,
                r = e.SerializationHelper.Clone(function() {
                    return new e.UniversalNodeMaterial(n, a.getScene())
                }, this);
            r._textures = {};
            for (t in this._textures) {
                var i = this._textures[t];
                i && r.setTexture(t, i.clone(), !0)
            }
            r._vectors4 = {};
            for (t in this._vectors4) r.setVector4(t, this._vectors4[t].clone(), !0);
            r._floats = {};
            for (t in this._floats) r.setFloat(t, this._floats[t], !0);
            return r
        }, t.prototype.serialize = function() {
            var n, t = e.SerializationHelper.Serialize(this);
            t.customType = "BABYLON.UniversalNodeMaterial", t.textures = {};
            for (n in this._textures) {
                var a = this._textures[n];
                a && (t.textures[n] = a.serialize())
            }
            t.vectors4 = {};
            for (n in this._vectors4) t.vectors4[n] = this._vectors4[n].asArray();
            t.floats = {};
            for (n in this._floats) t.floats[n] = this._floats[n];
            return t
        }, t.Parse = function(n, t, a) {
            var r, i = e.SerializationHelper.Parse(function() {
                return new e.UniversalNodeMaterial(n.name, t)
            }, n, t, a);
            for (r in n.textures) {
                var o = n.textures[r];
                o && i.setTexture(r, e.Texture.Parse(o, t, a), !0)
            }
            for (r in n.vectors4) i.setVector4(r, e.Vector4.FromArray(n.vectors4[r]), !0);
            for (r in n.floats) i.setFloat(r, n.floats[r], !0);
            return i
        }, t
    }(e.NodeMaterial);
    e.UniversalNodeMaterial = i, e.RegisterClass("BABYLON.UniversalNodeMaterial", i);
    var o = function(n) {
        function t(e, t) {
            var a = n.call(this, e, t) || this;
            a.enableShaderChunks = !0;
            var r = a;
            return r.awake && r.awake(), a.onBindObservable.add(function() {
                r.after && r.after()
            }), a
        }
        return __extends(t, n), t.prototype.getShaderName = function() {
            return "pbr"
        }, t.prototype.getShaderChunk = function() {
            return null
        }, t.prototype.updateShaderChunks = function() {
            var n = "surfaceAlbedo",
                t = "splatmapSampler",
                a = "detailsSampler",
                r = "normalsSampler",
                i = this.getScene().getEngine().getCaps().supportSRGBBuffers === !1 ? e.System.ToLinearSpace : 1;
            null != this.materialShaderChunks.Vertex_Definitions && "" !== this.materialShaderChunks.Vertex_Definitions ? this.materialShaderChunks.Vertex_Definitions = this.formatTerrainVertexDefintions() + this.materialShaderChunks.Vertex_Definitions : this.materialShaderChunks.Vertex_Definitions = this.formatTerrainVertexDefintions(), null != this.materialShaderChunks.Vertex_MainEnd && "" !== this.materialShaderChunks.Vertex_MainEnd ? this.materialShaderChunks.Vertex_MainEnd = this.formatTerrainVertexMainEnd() + this.materialShaderChunks.Vertex_MainEnd : this.materialShaderChunks.Vertex_MainEnd = this.formatTerrainVertexMainEnd(), null != this.materialShaderChunks.Fragment_Definitions && "" !== this.materialShaderChunks.Fragment_Definitions ? this.materialShaderChunks.Fragment_Definitions = this.formatTerrainFragmentDefintions(t, a, r) + this.materialShaderChunks.Fragment_Definitions : this.materialShaderChunks.Fragment_Definitions = this.formatTerrainFragmentDefintions(t, a, r), null != this.materialShaderChunks.Fragment_Custom_Albedo && "" !== this.materialShaderChunks.Fragment_Custom_Albedo ? this.materialShaderChunks.Fragment_Custom_Albedo = this.formatTerrainFragmentUpdateColor(this.terrainInfo, n, t, a, r, i) + this.materialShaderChunks.Fragment_Custom_Albedo : this.materialShaderChunks.Fragment_Custom_Albedo = this.formatTerrainFragmentUpdateColor(this.terrainInfo, n, t, a, r, i)
        }, t.prototype.formatTerrainVertexDefintions = function() {
            return "\r\n#define TERRAIN_VERTEX_DEFINITIONS\r\n\r\nvarying vec2 vSplatmapUV;\r\n\r\n"
        }, t.prototype.formatTerrainVertexMainEnd = function() {
            return "\r\n#define TERRAIN_VERTEX_MAIN_END\r\n\r\n#ifdef UV1\r\nvSplatmapUV = uv;\r\n#endif\r\n\r\n"
        }, t.prototype.formatTerrainFragmentDefintions = function(e, n, t) {
            return "\r\n#define TERRAIN_FRAGMENT_DEFNITIONS\r\n\r\nvarying vec2 vSplatmapUV;\r\nuniform sampler2D " + e + ";\r\nuniform sampler2D " + n + ";\r\nuniform sampler2D " + t + ";\r\n\r\nfloat calculateMipmapLevel(const in vec2 uvs, const in vec2 size)\r\n{\r\n    vec2 dx = dFdx(uvs * size.x);\r\n    vec2 dy = dFdy(uvs * size.y);\r\n    float d = max(dot(dx, dx), dot(dy, dy));\r\n    return 0.4 * log2(d);\r\n}\r\n\r\nvec4 sampleTextureAtlas2D(const in sampler2D atlas, const in float gamma, const in vec2 tile, const in vec4 rect, in vec2 uvs, in float lod)\r\n{\r\n    if (lod < 0.0) lod = clamp(calculateMipmapLevel(uvs, vec2(tile.x, tile.x)), 0.0, tile.y);   // Tile Info (tile.xy)\r\n    float size = pow(2.0, tile.y - lod);                                                        // Tile Bits (tile.y)\r\n    float sizex = size / rect.z;                                                                // Tile Width (rect.z)\r\n    float sizey = size / rect.w;                                                                // Tile Height (rect.w)\r\n    uvs = fract(uvs);                                                                           // Perfrom Tiling (fract)\r\n    uvs.x = uvs.x * ((sizex * rect.z - 1.0) / sizex) + 0.5 / sizex + rect.z * rect.x;           // Tile Position X (rect.x)\r\n    uvs.y = uvs.y * ((sizey * rect.w - 1.0) / sizey) + 0.5 / sizey + rect.w * rect.y;           // Tile Position Y (rect.y)\r\n    vec4 color = texture2DLodEXT(atlas, uvs, lod);\r\n    if (gamma != 1.0) {\r\n        color.r = pow(color.r, gamma);\r\n        color.g = pow(color.g, gamma);\r\n        color.b = pow(color.b, gamma);\r\n    }\r\n    return color;\r\n}\r\n\r\nvec4 sampleSplatmapAtlas2D(const in sampler2D atlas, const in vec2 tile, const in vec4 rect, in vec2 uvs)\r\n{\r\n    float size = pow(2.0, tile.y);                                                              // Tile Bits (tile.y)\r\n\t   float sizex = size / rect.z;                                                                // Tile Width (rect.z)\r\n\t   float sizey = size / rect.w;                                                                // Tile Height (rect.w)\r\n\t   uvs.x = uvs.x * ((sizex * rect.z - 1.0) / sizex) + 0.5 / sizex + rect.z * rect.x;           // Tile Position X (rect.x)\r\n\t   uvs.y = uvs.y * ((sizey * rect.w - 1.0) / sizey) + 0.5 / sizey + rect.w * rect.y;           // Tile Position Y (rect.y)\r\n    return texture2D(atlas, uvs);\r\n}\r\n\r\nvec3 blendSplatmapAtlasColors(const in vec4 splatmap, in vec4 color1, in vec4 color2, in vec4 color3, in vec4 color4, in vec3 mixbuffer)\r\n{\r\n    vec3 buffer1 = mix(mixbuffer, color1.rgb, splatmap.r);\r\n    vec3 buffer2 = mix(buffer1, color2.rgb, splatmap.g);\r\n    vec3 buffer3 = mix(buffer2, color3.rgb, splatmap.b);\r\n    return mix(buffer3, color4.rgb, splatmap.a);\r\n}\r\n\r\nvec3 perturbNormalSamplerColor(mat3 cotangentFrame, vec3 samplerColor, float scale)\r\n{\r\n    vec3 map = samplerColor.xyz;\r\n    map = map * 2.00787402 - 1.00787402;\r\n    #ifdef NORMALXYSCALE\r\n        map = normalize(map * vec3(scale, scale, 1.0));\r\n    #endif\r\n    return normalize(cotangentFrame * map);\r\n}\r\n\r\n\r\n"
        }, t.prototype.formatTerrainFragmentUpdateColor = function(e, n, t, a, r, i) {
            void 0 === i && (i = 1);
            var o = "";
            if (null != e && null != e.textureAtlas && null != e.splatmapAtlas && e.splatmapCount > 0) {
                o = "\r\n#define TERRAIN_FRAGMENT_UPDATE_COLOR\r\n\r\nvec3 normalsColor = vec3(0.5, 0.5, 1.0);\r\nvec3 normalsBuffer = normalW.rgb;\r\nvec3 splatmapBuffer = " + n + ".rgb;\r\nfloat autoMipMapLevel = -1.0;\r\nfloat normalCorrection = 1.0;\r\nfloat detailCorrection = " + i.toFixed(4) + ";\r\n\r\n#if defined(ALBEDO) && defined(" + t.toUpperCase() + ") && defined(" + a.toUpperCase() + ")\r\n\r\n// Reset Normal Values\r\n#if defined(BUMP) || defined(PARALLAX) || defined(ANISOTROPIC)\r\n    uvOffset = vec2(0.0, 0.0);\r\n    #ifdef NORMAL\r\n        normalW = normalize(vNormalW);\r\n    #else\r\n        normalW = normalize(cross(dFdx(vPositionW), dFdy(vPositionW))) * vEyePosition.w;\r\n    #endif\r\n    #ifdef CLEARCOAT\r\n        clearCoatNormalW = normalW;\r\n    #endif\r\n    #if defined(BUMP) || defined(PARALLAX)\r\n        #if defined(TANGENT) && defined(NORMAL)\r\n            TBN = vTBN;\r\n        #else\r\n            TBN = cotangent_frame(normalW, vPositionW, vSplatmapUV);\r\n        #endif\r\n    #elif defined(ANISOTROPIC)\r\n        #if defined(TANGENT) && defined(NORMAL)\r\n            TBN = vTBN;\r\n        #else\r\n            TBN = cotangent_frame(normalW, vPositionW, vSplatmapUV, vec2(1.0, 1.0));\r\n        #endif\r\n    #endif\r\n    #ifdef PARALLAX\r\n        invTBN = transposeMat3(TBN);\r\n    #endif\r\n    normalW = perturbNormalSamplerColor(TBN, normalsColor, 1.0);\r\n#endif\r\n\r\n// Global Atlas Values\r\nfloat splatTileSize = " + e.splatmapAtlas[2].toFixed(4) + ";\r\nfloat splatTileBits = " + e.splatmapAtlas[3].toFixed(4) + ";\r\nfloat detailTileSize = " + e.textureAtlas[2].toFixed(4) + ";\r\nfloat detailTileBits = " + e.textureAtlas[3].toFixed(4) + ";\r\n\r\n// Sample splatmap textures\r\n";
                for (var l = 0, s = 0; s < e.splatmapCount; s++) {
                    l = 4 * s;
                    var u = e["splatmapRect" + s];
                    if (o += "vec4 splatmapRect" + s + " = vec4(" + u[0].toFixed(4) + ", " + u[1].toFixed(4) + ", " + u[2].toFixed(4) + ", " + u[3].toFixed(4) + ");\r\n", o += "vec4 splatmapAlbedo" + s + " = sampleSplatmapAtlas2D(" + t + ", vec2(splatTileSize, splatTileBits), splatmapRect" + s + ", (vSplatmapUV + uvOffset));\r\n", o += "vec4 textureAlbedo" + (l + 0) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", o += "vec4 textureAlbedo" + (l + 1) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", o += "vec4 textureAlbedo" + (l + 2) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", o += "vec4 textureAlbedo" + (l + 3) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", e["textureRect" + (l + 0)]) {
                        var c = e["textureRect" + (l + 0)],
                            d = e["textureInfo" + (l + 0)];
                        o += "vec4 textureRect" + (l + 0) + " = vec4(" + c[0].toFixed(4) + ", " + c[1].toFixed(4) + ", " + c[2].toFixed(4) + ", " + c[3].toFixed(4) + ");\r\n", o += "vec2 textureScale" + (l + 0) + " = vec2(" + d[0].toFixed(4) + ", " + d[1].toFixed(4) + ");\r\n", o += "vec2 textureOffset" + (l + 0) + " = vec2(" + d[2].toFixed(4) + ", " + d[3].toFixed(4) + ");\r\n", o += "vec2 textureTileUV" + (l + 0) + " = ((vSplatmapUV + textureOffset" + (l + 0) + ") * textureScale" + (l + 0) + ");\r\n", o += "textureAlbedo" + (l + 0) + " = sampleTextureAtlas2D(" + a + ", detailCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 0) + ", textureTileUV" + (l + 0) + ", autoMipMapLevel);\r\n"
                    }
                    if (e["textureRect" + (l + 1)]) {
                        var c = e["textureRect" + (l + 1)],
                            d = e["textureInfo" + (l + 1)];
                        o += "vec4 textureRect" + (l + 1) + " = vec4(" + c[0].toFixed(4) + ", " + c[1].toFixed(4) + ", " + c[2].toFixed(4) + ", " + c[3].toFixed(4) + ");\r\n", o += "vec2 textureScale" + (l + 1) + " = vec2(" + d[0].toFixed(4) + ", " + d[1].toFixed(4) + ");\r\n", o += "vec2 textureOffset" + (l + 1) + " = vec2(" + d[2].toFixed(4) + ", " + d[3].toFixed(4) + ");\r\n", o += "vec2 textureTileUV" + (l + 1) + " = ((vSplatmapUV + textureOffset" + (l + 1) + ") * textureScale" + (l + 1) + ");\r\n", o += "textureAlbedo" + (l + 1) + " = sampleTextureAtlas2D(" + a + ", detailCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 1) + ", textureTileUV" + (l + 1) + ", autoMipMapLevel);\r\n"
                    }
                    if (e["textureRect" + (l + 2)]) {
                        var c = e["textureRect" + (l + 2)],
                            d = e["textureInfo" + (l + 2)];
                        o += "vec4 textureRect" + (l + 2) + " = vec4(" + c[0].toFixed(4) + ", " + c[1].toFixed(4) + ", " + c[2].toFixed(4) + ", " + c[3].toFixed(4) + ");\r\n", o += "vec2 textureScale" + (l + 2) + " = vec2(" + d[0].toFixed(4) + ", " + d[1].toFixed(4) + ");\r\n", o += "vec2 textureOffset" + (l + 2) + " = vec2(" + d[2].toFixed(4) + ", " + d[3].toFixed(4) + ");\r\n", o += "vec2 textureTileUV" + (l + 2) + " = ((vSplatmapUV + textureOffset" + (l + 2) + ") * textureScale" + (l + 2) + ");\r\n", o += "textureAlbedo" + (l + 2) + " = sampleTextureAtlas2D(" + a + ", detailCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 2) + ", textureTileUV" + (l + 2) + ", autoMipMapLevel);\r\n"
                    }
                    if (e["textureRect" + (l + 3)]) {
                        var c = e["textureRect" + (l + 3)],
                            d = e["textureInfo" + (l + 3)];
                        o += "vec4 textureRect" + (l + 3) + " = vec4(" + c[0].toFixed(4) + ", " + c[1].toFixed(4) + ", " + c[2].toFixed(4) + ", " + c[3].toFixed(4) + ");\r\n", o += "vec2 textureScale" + (l + 3) + " = vec2(" + d[0].toFixed(4) + ", " + d[1].toFixed(4) + ");\r\n", o += "vec2 textureOffset" + (l + 3) + " = vec2(" + d[2].toFixed(4) + ", " + d[3].toFixed(4) + ");\r\n", o += "vec2 textureTileUV" + (l + 3) + " = ((vSplatmapUV + textureOffset" + (l + 3) + ") * textureScale" + (l + 3) + ");\r\n", o += "textureAlbedo" + (l + 3) + " = sampleTextureAtlas2D(" + a + ", detailCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 3) + ", textureTileUV" + (l + 3) + ", autoMipMapLevel);\r\n"
                    }
                    if (o += "splatmapBuffer = blendSplatmapAtlasColors(splatmapAlbedo" + s + ", textureAlbedo" + (l + 0) + ", textureAlbedo" + (l + 1) + ", textureAlbedo" + (l + 2) + ", textureAlbedo" + (l + 3) + ", splatmapBuffer);\r\n", o += "#if defined(BUMP) || defined(PARALLAX) || defined(ANISOTROPIC)\r\n", o += "    #if defined(" + r.toUpperCase() + ")\r\n", o += "        vec4 normalColor" + (l + 0) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", o += "        vec4 normalColor" + (l + 1) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", o += "        vec4 normalColor" + (l + 2) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", o += "        vec4 normalColor" + (l + 3) + " = vec4(0.0, 0.0, 0.0, 1.0);\r\n", e["textureRect" + (l + 0)]) {
                        var m = e["normalsScale" + (l + 0)];
                        o += "        float normalScale" + (l + 0) + " = " + m.toFixed(4) + ";\r\n", o += "        normalColor" + (l + 0) + " = sampleTextureAtlas2D(" + r + ", normalCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 0) + ", textureTileUV" + (l + 0) + ", autoMipMapLevel);\r\n", o += "        normalColor" + (l + 0) + ".rgb = perturbNormalSamplerColor(TBN, normalColor" + (l + 0) + ".rgb, normalScale" + (l + 0) + ");\r\n"
                    }
                    if (e["textureRect" + (l + 1)]) {
                        var m = e["normalsScale" + (l + 1)];
                        o += "        float normalScale" + (l + 1) + " = " + m.toFixed(4) + ";\r\n", o += "        normalColor" + (l + 1) + " = sampleTextureAtlas2D(" + r + ", normalCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 1) + ", textureTileUV" + (l + 1) + ", autoMipMapLevel);\r\n", o += "        normalColor" + (l + 1) + ".rgb = perturbNormalSamplerColor(TBN, normalColor" + (l + 1) + ".rgb, normalScale" + (l + 1) + ");\r\n"
                    }
                    if (e["textureRect" + (l + 2)]) {
                        var m = e["normalsScale" + (l + 2)];
                        o += "        float normalScale" + (l + 2) + " = " + m.toFixed(4) + ";\r\n", o += "        normalColor" + (l + 2) + " = sampleTextureAtlas2D(" + r + ", normalCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 2) + ", textureTileUV" + (l + 2) + ", autoMipMapLevel);\r\n", o += "        normalColor" + (l + 2) + ".rgb = perturbNormalSamplerColor(TBN, normalColor" + (l + 2) + ".rgb, normalScale" + (l + 2) + ");\r\n"
                    }
                    if (e["textureRect" + (l + 3)]) {
                        var m = e["normalsScale" + (l + 3)];
                        o += "        float normalScale" + (l + 3) + " = " + m.toFixed(4) + ";\r\n", o += "        normalColor" + (l + 3) + " = sampleTextureAtlas2D(" + r + ", normalCorrection, vec2(detailTileSize, detailTileBits), textureRect" + (l + 3) + ", textureTileUV" + (l + 3) + ", autoMipMapLevel);\r\n", o += "        normalColor" + (l + 3) + ".rgb = perturbNormalSamplerColor(TBN, normalColor" + (l + 3) + ".rgb, normalScale" + (l + 3) + ");\r\n"
                    }
                    o += "        normalsBuffer = blendSplatmapAtlasColors(splatmapAlbedo" + s + ", normalColor" + (l + 0) + ", normalColor" + (l + 1) + ", normalColor" + (l + 2) + ", normalColor" + (l + 3) + ", normalsBuffer);\r\n", o += "    #endif\r\n", o += "#endif\r\n", o += "\r\n"
                }
                o += "// Update Color Values\r\n" + n + ".rgb = splatmapBuffer.rgb;\r\n#if defined(BUMP) || defined(PARALLAX) || defined(ANISOTROPIC)\r\n    #if defined(" + r.toUpperCase() + ")\r\n        normalW.rgb = normalsBuffer.rgb;\r\n    #endif\r\n    #if defined(FORCENORMALFORWARD) && defined(NORMAL)\r\n        vec3 faceNormal = normalize(cross(dFdx(vPositionW), dFdy(vPositionW))) * vEyePosition.w;\r\n        #if defined(TWOSIDEDLIGHTING)\r\n            faceNormal = gl_FrontFacing ? faceNormal : -faceNormal;\r\n        #endif\r\n        normalW *= sign(dot(normalW, faceNormal));\r\n    #endif\r\n    #if defined(TWOSIDEDLIGHTING) && defined(NORMAL)\r\n        normalW = gl_FrontFacing ? normalW : -normalW;\r\n    #endif\r\n#endif\r\n\r\n#endif\r\n\r\n"
            }
            return o
        }, t
    }(e.UniversalAlbedoMaterial);
    e.UniversalTerrainMaterial = o, e.RegisterClass("BABYLON.UniversalTerrainMaterial", o)
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(e) {
    var n = function() {
        function n(n, t, a) {
            if (void 0 === a && (a = {}), this._update = null, this._late = null, this._after = null, this._fixed = null, this._ready = null, this._lateUpdate = !1, this._properties = null, this._awoken = !1, this._started = !1, this._scene = null, this._transform = null, this._scriptReady = !1, this._registeredClassname = null, this._lateUpdateObserver = null, this._fixedUpdateObserver = null, this.onTriggerEnterObservable = new e.Observable, this.onTriggerStayObservable = new e.Observable, this.onTriggerExitObservable = new e.Observable, this.intersectMesh = null, this.triggerVolumeList = null, this.useTriggerVolumePrecision = !1, this.includeTriggerVolumeDescendants = !1, null == n) throw new Error("Null transform object specified.");
            if (null == t) throw new Error("Null host scene object specified.");
            this._scene = t, this._transform = n, this._properties = a || {}, this._registeredClassname = null;
            var r = this;
            r._update = function() {
                e.ScriptComponent.UpdateInstance(r)
            }, r._late = function() {
                e.ScriptComponent.LateInstance(r)
            }, r._after = function() {
                e.ScriptComponent.AfterInstance(r)
            }, r._fixed = function() {
                e.ScriptComponent.FixedInstance(r);
            }, r._ready = function() {
                e.ScriptComponent.ReadyInstance(r)
            }, r.registerComponentInstance && r.destroyComponentInstance || e.Tools.Warn("Invalid component registration handlers for: " + this._transform.name)
        }
        return Object.defineProperty(n.prototype, "scene", {
            get: function() {
                return this._scene
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "transform", {
            get: function() {
                return this._transform
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.setProperty = function(e, n) {
            null == this._properties && (this._properties = {}), this._properties[e] = n
        }, n.prototype.getProperty = function(e, n) {
            void 0 === n && (n = null);
            var t = null;
            return null != this._properties && (t = this._properties[e], null == t && (t = this._properties["auto__" + e])), null == t && (t = n), null != t ? t : null
        }, n.prototype.getClassName = function() {
            return this._registeredClassname
        }, n.prototype.getReadyState = function() {
            return this._scriptReady
        }, n.prototype.getTime = function() {
            return e.SceneManager.GetTime()
        }, n.prototype.getGameTime = function() {
            return e.SceneManager.GetGameTime()
        }, n.prototype.getDeltaSeconds = function() {
            return e.SceneManager.GetDeltaSeconds(this.scene)
        }, n.prototype.getAnimationRatio = function() {
            return e.SceneManager.GetAnimationRatio(this.scene)
        }, n.prototype.getTransformMesh = function() {
            return this._transform instanceof e.Mesh ? this._transform : null
        }, n.prototype.getAbstractMesh = function() {
            return this._transform instanceof e.AbstractMesh ? this._transform : null
        }, n.prototype.getInstancedMesh = function() {
            return this._transform instanceof e.InstancedMesh ? this._transform : null
        }, n.prototype.getPrimitiveMeshes = function() {
            return e.SceneManager.GetPrimitiveMeshes(this.transform)
        }, n.prototype.getMetadata = function() {
            return e.SceneManager.FindSceneMetadata(this._transform)
        }, n.prototype.getComponent = function(n) {
            var t = e.SceneManager.FindScriptComponent(this._transform, n);
            return null != t ? t : null
        }, n.prototype.getComponents = function(n) {
            var t = e.SceneManager.FindAllScriptComponents(this._transform, n);
            return null != t ? t : null
        }, n.prototype.getLightRig = function() {
            return e.SceneManager.FindSceneLightRig(this._transform)
        }, n.prototype.getCameraRig = function() {
            return e.SceneManager.FindSceneCameraRig(this._transform)
        }, n.prototype.getTransformTag = function() {
            return e.SceneManager.GetTransformTag(this.transform)
        }, n.prototype.hasTransformTags = function(n) {
            return e.SceneManager.HasTransformTags(this._transform, n)
        }, n.prototype.getChildNode = function(n, t, a, r) {
            return void 0 === t && (t = e.SearchType.ExactMatch), void 0 === a && (a = !0), void 0 === r && (r = null), e.SceneManager.FindChildTransformNode(this._transform, n, t, a, r)
        }, n.prototype.getChildWithTags = function(n, t, a) {
            return void 0 === t && (t = !0), void 0 === a && (a = null), e.SceneManager.FindChildTransformWithTags(this._transform, n, t, a)
        }, n.prototype.getChildrenWithTags = function(n, t, a) {
            return void 0 === t && (t = !0), void 0 === a && (a = null), e.SceneManager.FindAllChildTransformsWithTags(this._transform, n, t, a)
        }, n.prototype.getChildWithScript = function(n, t, a) {
            return void 0 === t && (t = !0), void 0 === a && (a = null), e.SceneManager.FindChildTransformWithScript(this._transform, n, t, a)
        }, n.prototype.getChildrenWithScript = function(n, t, a) {
            return void 0 === t && (t = !0), void 0 === a && (a = null), e.SceneManager.FindAllChildTransformsWithScript(this._transform, n, t, a)
        }, n.prototype.registerOnClickAction = function(n) {
            var t = null;
            return this.transform instanceof e.AbstractMesh && (t = e.SceneManager.RegisterClickAction(this.scene, this.transform, n)), t
        }, n.prototype.unregisterOnClickAction = function(n) {
            var t = !1;
            return this.transform instanceof e.AbstractMesh && (t = e.SceneManager.UnregisterClickAction(this.transform, n)), t
        }, n.prototype.setTriggerIntersectMesh = function(e) {
            this.intersectMesh = e
        }, n.prototype.getTriggerVolumeList = function() {
            return this.triggerVolumeList
        }, n.prototype.resetTriggerVolumeList = function() {
            this.triggerVolumeList = null
        }, n.prototype.registerTriggerVolume = function(n) {
            var t = new e.TriggerVolume;
            t.mesh = n, t.state = 0, null == this.triggerVolumeList && (this.triggerVolumeList = []), this.triggerVolumeList.push(t)
        }, n.prototype.unregisterTriggerVolume = function(e) {
            if (null != this.triggerVolumeList && this.triggerVolumeList.length > 0)
                for (var n = 0; n < this.triggerVolumeList.length; n++) {
                    var t = this.triggerVolumeList[n];
                    if (t.mesh === e) {
                        this.triggerVolumeList.splice(n);
                        break
                    }
                    t = null
                }
        }, n.prototype.registerComponentInstance = function(n, t, a) {
            if (void 0 === a && (a = !0), a === !0) {
                e.Utilities.ValidateTransformMetadata(this._transform);
                var r = {
                    alias: "script",
                    order: 0,
                    klass: t,
                    properties: null,
                    instance: n
                };
                null == this._transform.metadata.unity.components && (this._transform.metadata.unity.components = []), this._transform.metadata.unity.components.push(r)
            }
            n._registeredClassname = t, e.ScriptComponent.RegisterInstance(n), a === !0 && n.scene.onAfterRenderObservable.addOnce(function() {
                n.delayComponentInstance(n)
            })
        }, n.prototype.delayComponentInstance = function(n) {
            var t = n._started === !0 ? 100 : 200;
            e.SceneManager.SetTimeout(t, function() {
                n._ready()
            })
        }, n.prototype.destroyComponentInstance = function(n) {
            e.ScriptComponent.DestroyInstance(n)
        }, n.RegisterInstance = function(e) {
            null != e && (null != e._update && e.scene.registerBeforeRender(e._update), e.late && null != e._late && null != e.scene.onBeforeRenderTargetsRenderObservable && (e._lateUpdateObserver = e.scene.onBeforeRenderTargetsRenderObservable.add(e._late)), e.after && null != e._after && e.scene.registerAfterRender(e._after), e.fixed && null != e._fixed && null != e.scene.onAfterPhysicsObservable && (e._fixedUpdateObserver = e.scene.onAfterPhysicsObservable.add(e._fixed)))
        }, n.UpdateInstance = function(n) {
            null != n && null != n.transform && n.transform.isEnabled(!1) && (n._awoken === !1 ? (n._awoken = !0, e.ScriptComponent.ParseAutoProperties(n), n.awake && n.awake()) : n._started === !1 ? (n._started = !0, n.start && n.start()) : n._awoken === !0 && n._started === !0 && (n.update && n.update(), n._lateUpdate = !0))
        }, n.LateInstance = function(e) {
            null != e && null != e.transform && e.transform.isEnabled(!1) && e._lateUpdate === !0 && (e._lateUpdate = !1, e._started && e.late && e.late())
        }, n.AfterInstance = function(e) {
            if (null != e && null != e.transform && e.transform.isEnabled(!1) && (e._started && e.after && e.after(), null != e.triggerVolumeList && e.triggerVolumeList.length > 0)) {
                var n = e.intersectMesh || e.getAbstractMesh();
                null != n && e.triggerVolumeList.forEach(function(t) {
                    if (null != t.mesh) {
                        var a = n.intersectsMesh(t.mesh, e.useTriggerVolumePrecision, e.includeTriggerVolumeDescendants);
                        a === !0 ? 0 === t.state ? (t.state = 1, e.onTriggerEnterObservable.hasObservers() && e.onTriggerEnterObservable.notifyObservers(t.mesh)) : 1 === t.state && e.onTriggerStayObservable.hasObservers() && e.onTriggerStayObservable.notifyObservers(t.mesh) : 0 !== t.state && (t.state = 0, e.onTriggerExitObservable.hasObservers() && e.onTriggerExitObservable.notifyObservers(t.mesh))
                    }
                })
            }
        }, n.FixedInstance = function(e) {
            null != e && null != e.transform && e.transform.isEnabled(!1) && e._started && e.fixed && e.fixed()
        }, n.ReadyInstance = function(e) {
            null != e && null != e.transform && e.transform.isEnabled(!1) && e._scriptReady === !1 && (e._scriptReady = !0, e.ready && e.ready())
        }, n.DestroyInstance = function(e) {
            if (null != e) {
                e.scene.unregisterBeforeRender(e._update), null != e._lateUpdateObserver && null != e.scene.onBeforeRenderTargetsRenderObservable && e.scene.onBeforeRenderTargetsRenderObservable.remove(e._lateUpdateObserver), e.after && null != e._after && e.scene.unregisterAfterRender(e._after), null != e._fixedUpdateObserver && null != e.scene.onAfterPhysicsObservable && e.scene.onAfterPhysicsObservable.remove(e._fixedUpdateObserver);
                try {
                    e.destroy && e.destroy()
                } catch (n) {}
                e.onTriggerEnterObservable.clear(), e.onTriggerEnterObservable = null, e.onTriggerStayObservable.clear(), e.onTriggerStayObservable = null, e.onTriggerExitObservable.clear(), e.onTriggerExitObservable = null, e._scriptReady = !1, e._transform = null, e._properties = null, e._started = !1, e._update = null, e._late = null, e._after = null, e._fixed = null, e._ready = null, e._scene = null
            }
        }, n.ParseAutoProperties = function(n) {
            var t = Object.keys(n._properties);
            if (null != t && t.length > 0)
                for (var a = function(a) {
                        var r = t[a];
                        if (e.Utilities.StartsWith(r, "auto__")) {
                            var i = r.replace("auto__", "");
                            if (e.Utilities.HasOwnProperty(n, i)) {
                                var o = n.getProperty(r);
                                if (null != o) {
                                    var l = typeof o;
                                    if (null != l && "" !== l)
                                        if ("object" === l)
                                            if (Array.isArray(o)) {
                                                var s = [],
                                                    u = o;
                                                u.forEach(function(t) {
                                                    if (null != t) {
                                                        var a = typeof t;
                                                        "object" === a ? s.push(e.ScriptComponent.UnpackObjectProperty(t, n.scene)) : s.push(t)
                                                    }
                                                }), n[i] = s
                                            } else {
                                                var c = n[i],
                                                    d = e.ScriptComponent.UnpackObjectProperty(o, n.scene);
                                                c instanceof e.Color3 && d instanceof e.Color4 ? n[i] = new e.Color3(d.r, d.g, d.b) : n[i] = d
                                            }
                                    else n[i] = o;
                                    else n[i] = o
                                } else n[i] = o
                            } else e.Tools.Warn(n.getClassName() || "Unregistered Class: Auto property '" + i + "' not found for transform '" + n.transform.name + "'")
                        }
                    }, r = 0; r < t.length; r++) a(r)
        }, n.UnpackObjectProperty = function(n, t) {
            var a = null;
            if (null != n)
                if (void 0 !== n.x && void 0 !== n.y) a = void 0 !== n.z ? void 0 !== n.w ? new e.Vector4(n.x, n.y, n.z, n.w) : new e.Vector3(n.x, n.y, n.z) : new e.Vector2(n.x, n.y);
                else if (void 0 !== n.r && void 0 !== n.g && void 0 !== n.b) {
                var r = 1;
                void 0 !== n.a && (r = n.a), a = new e.Color4(n.r, n.g, n.b, r)
            } else if (void 0 !== n.type) switch (n.type) {
                case "UnityEngine.AnimationCurve":
                    var i = n;
                    a = e.Animation.Parse(i.animation);
                    break;
                case "UnityEngine.Transform":
                    var o = n;
                    a = e.Utilities.ParseTransformByID(o, t);
                    break;
                case "UnityEngine.Material":
                    var l = n;
                    a = t.getMaterialByName(l.name);
                    break;
                case "UnityEngine.Texture2D":
                    var s = n;
                    a = e.Utilities.ParseTexture(s, t);
                    break;
                case "UnityEngine.Cubemap":
                    var u = n;
                    a = e.Utilities.ParseCubemap(u, t);
                    break;
                case "UnityEngine.AudioClip":
                    var c = n;
                    a = c;
                    break;
                case "UnityEngine.Video.VideoClip":
                    var d = n;
                    a = d;
                    break;
                case "UnityEngine.Font":
                    var m = n;
                    a = m;
                    break;
                case "UnityEngine.TextAsset":
                    var p = n;
                    a = null != p.base64 ? p.json === !0 ? JSON.parse(window.atob(p.base64)) : window.atob(p.base64) : p;
                    break;
                case "UnityEditor.DefaultAsset":
                    var g = n;
                    a = null != g.base64 ? g.json === !0 ? JSON.parse(window.atob(g.base64)) : window.atob(g.base64) : g;
                    break;
                default:
                    a = n
            } else a = n;
            return a
        }, n
    }();
    e.ScriptComponent = n
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(e) {
    var n = function() {
        function n(e) {
            this._babylonScene = e, this._physicList = [], this._shadowList = [], this._scriptList = [], this._freezeList = []
        }
        return n.prototype.parseSceneComponents = function(n) {
            e.MetadataParser.DoParseSceneComponents(this._babylonScene, n, this._physicList, this._shadowList, this._scriptList, this._freezeList)
        }, n.prototype.postProcessSceneComponents = function(n, t) {
            e.MetadataParser.DoProcessPendingPhysics(this._babylonScene, this._physicList), e.MetadataParser.DoProcessPendingShadows(this._babylonScene, this._shadowList), e.MetadataParser.DoProcessPendingScripts(this._babylonScene, this._scriptList, n, t), e.MetadataParser.DoProcessPendingFreezes(this._freezeList), this._babylonScene = null, this._physicList = null, this._shadowList = null, this._scriptList = null, this._freezeList = null
        }, n.DoParseSceneComponents = function(n, t, a, r, i, o) {
            if (null != t && null != t.metadata && null != t.metadata.unity && null != t.metadata.unity.parsed && t.metadata.unity.parsed === !1) {
                t.setEnabled(!0), t.metadata.unity.parsed = !0, t.metadata.unity.prefab = !1;
                var l = t.metadata.unity;
                t.isVisible = null == t.metadata.unity.visible || t.metadata.unity.visible, t.visibility = null != t.metadata.unity.visibility ? t.metadata.unity.visibility : 1, t.billboardMode = null != t.metadata.unity.billboard ? t.metadata.unity.billboard : 0, t.onDisposeObservable.addOnce(function() {
                    e.Utilities.DisposeEntity(t)
                });
                var s = t instanceof e.AbstractMesh,
                    u = (null != t.metadata.unity.lightmapped && t.metadata.unity.lightmapped, l.tags);
                if (null != u && "" !== u && (e.Tags.AddTagsTo(t, u), u.indexOf("NavigationMesh") >= 0 && (t.isVisible = !1, t.isPickable = !1, t.useVertexColors = !1)), null != l.physics && null != a && a.push(t), t.renderingGroupId, null != l.renderer)
                    if (s === !0) t.isPickable = !0, t.useVertexColors = !1, t.cullingStrategy = e.AbstractMesh.CULLINGSTRATEGY_STANDARD, null != l.renderer.cullingstrategy && l.renderer.cullingstrategy !== e.AbstractMesh.CULLINGSTRATEGY_STANDARD && (t.cullingStrategy = l.renderer.cullingstrategy), null != l.renderer.layermask && (t.layerMask = l.renderer.layermask), null != l.renderer.castshadows && l.renderer.castshadows === !0 && null != r && r.push(t), null != l.renderer.receiveshadows && l.renderer.receiveshadows === !0 && (t.receiveShadows = !0), null != l.renderer.checkcollisions && l.renderer.checkcollisions === !0 && (t.checkCollisions = !0), null != l.renderer.istriggervolume && l.renderer.istriggervolume === !0 && (t.collisionResponse = !1), null != l.renderer.usevertexcolors && (t.useVertexColors = l.renderer.usevertexcolors), null != l.renderer.setmeshpickable && (t.isPickable = l.renderer.setmeshpickable), null != l.renderer.showboundingbox && (t.showBoundingBox = l.renderer.showboundingbox), null != l.renderer.defaultellipsoid && (t.ellipsoid = e.Utilities.ParseVector3(l.renderer.defaultellipsoid)), null != l.renderer.ellipsoidoffset && (t.ellipsoidOffset = e.Utilities.ParseVector3(l.renderer.ellipsoidoffset)), null != l.renderer.rendergroupid && (t.renderingGroupId = l.renderer.rendergroupid), null != l.renderer.freezeworldmatrix && l.renderer.freezeworldmatrix === !0 && null != o && o.push(t);
                    else {
                        var c = e.SceneManager.GetPrimitiveMeshes(t);
                        null != c && c.length > 0 && c.forEach(function(n) {
                            n.isPickable = !0, n.useVertexColors = !1, n.cullingStrategy = e.AbstractMesh.CULLINGSTRATEGY_STANDARD, null != l.renderer.cullingstrategy && l.renderer.cullingstrategy !== e.AbstractMesh.CULLINGSTRATEGY_STANDARD && (n.cullingStrategy = l.renderer.cullingstrategy), null != l.renderer.layermask && (n.layerMask = l.renderer.layermask), null != l.renderer.castshadows && l.renderer.castshadows === !0 && null != r && r.push(n), null != l.renderer.receiveshadows && l.renderer.receiveshadows === !0 && (n.receiveShadows = !0), null != l.renderer.checkcollisions && l.renderer.checkcollisions === !0 && (n.checkCollisions = !0), null != l.renderer.istriggervolume && l.renderer.istriggervolume === !0 && (n.collisionResponse = !1), null != l.renderer.usevertexcolors && (n.useVertexColors = l.renderer.usevertexcolors), null != l.renderer.setmeshpickable && (n.isPickable = l.renderer.setmeshpickable), null != l.renderer.showboundingbox && (n.showBoundingBox = l.renderer.showboundingbox), null != l.renderer.defaultellipsoid && (n.ellipsoid = e.Utilities.ParseVector3(l.renderer.defaultellipsoid)), null != l.renderer.ellipsoidoffset && (n.ellipsoidOffset = e.Utilities.ParseVector3(l.renderer.ellipsoidoffset)), null != l.renderer.rendergroupid && (n.renderingGroupId = l.renderer.rendergroupid), null != l.renderer.freezeworldmatrix && l.renderer.freezeworldmatrix === !0 && null != o && o.push(n)
                        })
                    } if (null != l.components) {
                    var d = l.components;
                    null != d && d.length > 0 && d.forEach(function(a) {
                        if (null != a) switch (a.alias) {
                            case "camera":
                                e.MetadataParser.SetupCameraComponent(n, t, a);
                                break;
                            case "light":
                                e.MetadataParser.SetupLightComponent(n, t, a);
                                break;
                            case "script":
                                null != i && i.push({
                                    mesh: t,
                                    comp: a
                                })
                        }
                    })
                }
            }
        }, n.DoProcessPendingScripts = function(n, t, a, r) {
            null != t && t.length > 0 && (t.sort(function(e, n) {
                return e.comp.order < n.comp.order ? -1 : e.comp.order > n.comp.order ? 1 : 0
            }), t.forEach(function(t) {
                if (null != t.comp.klass && "" !== t.comp.klass && "BABYLON.ScriptComponent" !== t.comp.klass) {
                    var i = e.Utilities.InstantiateClass(t.comp.klass);
                    if (null != i) {
                        var o = new i(t.mesh, n, t.comp.properties);
                        if (null != o) {
                            var l = o instanceof e.ScriptComponent;
                            l === !0 ? (t.comp.instance = o, null != r && r.push(t.comp.instance), t.comp.instance.addPreloaderTasks && null != a && a.push(t.comp.instance), e.SceneManager.RegisterScriptComponent(t.comp.instance, t.comp.klass, !1)) : e.Tools.Warn("Non script component instantiated class: " + t.comp.klass)
                        } else e.Tools.Warn("Failed to instantiate script class: " + t.comp.klass)
                    } else e.Tools.Warn("Failed to locate script class: " + t.comp.klass)
                }
            }))
        }, n.DoProcessPendingShadows = function(e, n) {
            null != n && n.length > 0 && null != e.lights && e.lights.length > 0 && e.lights.forEach(function(e) {
                if (null != e._shadowGenerator && null != e.metadata && null != e.metadata.unity && e.metadata.unity.autorender === !0) {
                    var t = e._shadowGenerator,
                        a = t.getShadowMap();
                    null != a && (null == a.renderList && (a.renderList = []), n.forEach(function(e) {
                        a.renderList.push(e)
                    }))
                }
            })
        }, n.DoProcessPendingPhysics = function(n, t) {
            if (null != t && t.length > 0) {
                var a = n.isPhysicsEnabled(),
                    r = a === !0 ? n.getPhysicsEngine() : null,
                    i = a === !0 && null != r && "AmmoJSPlugin" === r.getPhysicsPluginName();
                i === !0 ? t.forEach(function(t) {
                    e.RigidbodyPhysics ? e.RigidbodyPhysics.SetupPhysicsComponent(n, t) : e.Tools.Warn("Ammo.js rigidbody physics system not loaded. Physics impostors will not be created for: " + t.name)
                }) : e.Tools.Warn("Ammo.js physics engine not loaded. Physics impostors will not be created.")
            }
        }, n.DoProcessPendingFreezes = function(e) {
            null != e && e.length > 0 && e.forEach(function(e) {
                e.freezeWorldMatrix()
            })
        }, n.SetupCameraComponent = function(n, t, a) {
            t.checkCollisions = !1;
            var r = t.name + ".Rig",
                i = e.SceneManager.GetRightHanded(n) === !0 ? Math.PI : 0,
                o = null != a.culling && a.culling,
                l = null != a.camerabase ? a.camerabase : 0,
                s = (null != a.clearflags ? a.clearflags : 0, null != a.renderlist ? a.renderlist : null),
                u = null != a.maincamera && a.maincamera,
                c = 4 === l ? new e.FreeCamera(r, e.Vector3.Zero(), n) : new e.UniversalCamera(r, e.Vector3.Zero(), n);
            c.checkCollisions = !1, c.rotationQuaternion = e.Quaternion.FromEulerAngles(0, i, 0), c.parent = t, u === !0 && (n.activeCamera = c);
            var d = null != a.type ? a.type : 0;
            switch (d) {
                case 0:
                    c.mode = e.Camera.PERSPECTIVE_CAMERA, null != a.perspectiveyfov && (c.fov = a.perspectiveyfov), null != a.perspectiveznear && (c.minZ = a.perspectiveznear), null != a.perspectivezfar && (c.maxZ = a.perspectivezfar);
                    break;
                case 1:
                    c.mode = e.Camera.ORTHOGRAPHIC_CAMERA, null != a.orthoxmag && (c.orthoLeft = -a.orthoxmag, c.orthoRight = a.orthoxmag), null != a.orthoymag && (c.orthoBottom = -a.orthoymag, c.orthoTop = a.orthoymag), null != a.orthoznear && (c.minZ = a.orthoznear), null != a.orthozfar && (c.maxZ = a.orthozfar)
            }
            if (0 === o);
            else if (o === -1);
            else {
                var m = 0,
                    p = s;
                if (null != p && p.length > 0) {
                    var g = function() {
                        var t = p[m],
                            a = e.SceneManager.GetMeshByID(n, t);
                        if (null != a) {
                            var r = a.name + ".Detail",
                                i = a.getChildren(function(e) {
                                    return e.name === r
                                }, !0);
                            null != i && i.length > 0
                        }
                    };
                    for (m = 0; m < p.length; m++) g()
                }
            }
            t.cameraRig = c
        }, n.SetupLightComponent = function(n, t, a) {
            t.checkCollisions = !1;
            var r, i = t.name + ".Rig",
                o = 0,
                l = 1,
                s = null != a.culling && a.culling,
                u = (null != a.clearflags ? a.clearflags : 0, null != a.renderlist ? a.renderlist : null),
                c = null != a.type ? a.type : 0,
                d = e.SceneManager.GetRenderQuality(),
                m = null != a.exponentdecayspeed ? a.exponentdecayspeed : 1,
                p = !1;
            switch (c) {
                case 0:
                    var g = e.SceneManager.GetRightHanded(n) === !0 ? e.Vector3.Backward() : e.Vector3.Forward(),
                        h = null != a.orthoscale ? a.orthoscale : .1,
                        f = null != a.ortholeft ? a.ortholeft : Number.MAX_VALUE,
                        S = null != a.orthoright ? a.orthoright : Number.MAX_VALUE,
                        M = null != a.orthotop ? a.orthotop : Number.MAX_VALUE,
                        y = null != a.orthobottom ? a.orthobottom : Number.MAX_VALUE,
                        v = null != a.calczbounds && a.calczbounds,
                        b = null != a.updateextends && a.updateextends,
                        T = null != a.shadowfrustumsize ? a.shadowfrustumsize : 0,
                        _ = new e.DirectionalLight(i, g, n);
                    _.shadowFrustumSize = T, _.shadowOrthoScale = h, _.autoCalcShadowZBounds = v, _.autoUpdateExtends = b, _.orthoLeft = f, _.orthoRight = S, _.orthoTop = M, _.orthoBottom = y, r = _, r.falloffType = e.Light.FALLOFF_STANDARD, p = d === e.RenderQuality.High || d === e.RenderQuality.Medium, l = 1;
                    break;
                case 1:
                    var x = r = new e.PointLight(i, e.Vector3.Zero(), n);
                    r = x, r.falloffType = e.Light.FALLOFF_STANDARD, p = d === e.RenderQuality.High || d === e.RenderQuality.Medium, l = 1;
                    break;
                case 2:
                    var g = e.SceneManager.GetRightHanded(n) === !0 ? e.Vector3.Backward() : e.Vector3.Forward(),
                        C = null != a.spotangle ? a.spotangle : Math.PI / 4,
                        A = new e.SpotLight(i, e.Vector3.Zero(), g, 0, m, n);
                    A.angle = .966 * e.Tools.ToRadians(C), A.innerAngle = .8 * A.angle, r = A, r.falloffType = e.Light.FALLOFF_GLTF, p = d === e.RenderQuality.High || d === e.RenderQuality.Medium, l = 10
            }
            if (null != r) {
                var w = null != a.range ? a.range : Number.MAX_VALUE,
                    P = null != a.color ? e.Utilities.ParseColor3(a.color, e.Color3.White()) : e.Color3.White(),
                    O = null != a.specular ? e.Utilities.ParseColor3(a.specular, e.Color3.White()) : e.Color3.White();
                r.parent = t, r.range = w, r.diffuse = P, r.specular = O, r.intensity = (null != a.intensity ? a.intensity : 1) * l, r.lightmapMode = e.Light.LIGHTMAP_DEFAULT, r.intensityMode = e.Light.INTENSITYMODE_AUTOMATIC, r.shadowEnabled = !1;
                var B = null == a.autorender || a.autorender,
                    k = null != a.softshadows && a.softshadows,
                    L = null != a.numcascades ? a.numcascades : 0,
                    U = null != a.cascadelambda ? a.cascadelambda : 1,
                    R = null != a.setdepthclamp && a.setdepthclamp,
                    N = null != a.blendpertecntage ? a.blendpertecntage : 1e-8,
                    I = null != a.boundsrefreshrate ? a.boundsrefreshrate : 1,
                    D = null != a.lightcontactratio ? a.lightcontactratio : .1,
                    F = null != a.stabilizecascades && a.stabilizecascades,
                    E = null != a.penumbradarkness ? a.penumbradarkness : 1,
                    V = null != a.softshadowsfilter ? a.softshadowsfilter : 99,
                    G = null != a.freezeshadows && a.freezeshadows,
                    H = null != a.calcdepths && a.calcdepths,
                    z = null != a.depthscaling ? a.depthscaling : 50,
                    Y = null != a.blurscaling ? a.blurscaling : 2,
                    W = null == a.kernelblur || a.kernelblur,
                    X = null != a.blurkernelsize ? a.blurkernelsize : 1,
                    Q = null != a.blurboxoffset ? a.blurboxoffset : 1,
                    j = null != a.shadowmapsize ? a.shadowmapsize : 1024,
                    q = null != a.generateshadows && a.generateshadows,
                    K = null != a.shadowbiasfactor ? a.shadowbiasfactor : .01,
                    Z = null != a.normalbiasfactor ? a.normalbiasfactor : .01,
                    J = null != a.shadowmapbias ? a.shadowmapbias : .05,
                    $ = null != a.normalmapbias ? a.normalmapbias : .4,
                    ee = null != a.shadowstrength ? a.shadowstrength : 1,
                    ne = null != a.shadowdistance ? a.shadowdistance : 150,
                    te = null != a.shadownearplane ? a.shadownearplane : .2,
                    ae = null != a.shadowfilterquality ? a.shadowfilterquality : "Medium",
                    re = null != a.transparencyshadow && a.transparencyshadow,
                    ie = null != a.softtransparency && a.softtransparency,
                    oe = null == a.forcebackfacesonly || a.forcebackfacesonly,
                    le = null != a.frustumedgefalloff ? a.frustumedgefalloff : 0,
                    se = null != a.usefullfloatfirst && a.usefullfloatfirst;
                if (p === !0 && q === !0) {
                    var ue = r,
                        ce = e.SceneManager.GetWebGLVersionNumber(n),
                        de = 0 === c && L >= 2 && ce >= 2,
                        me = de === !0 ? new e.CascadedShadowGenerator(j, r, se) : new e.ShadowGenerator(j, ue, se);
                    if (me.bias = J * K, me.normalBias = $ * Z, me.depthScale = z, me.useKernelBlur = W, me.blurKernel = X, me.blurScale = Y, me.blurBoxOffset = Q, me.frustumEdgeFalloff = le, me.forceBackFacesOnly = oe, me.transparencyShadow = re, me.enableSoftTransparentShadow = ie, me.contactHardeningLightSizeUVRatio = D, k === !0)
                        if (ce <= 1) me.usePoissonSampling = !0;
                        else if (de === !0) me.usePercentageCloserFiltering = !0;
                    else switch (V) {
                        case 0:
                            me.usePoissonSampling = !0;
                            break;
                        case 1:
                            me.useExponentialShadowMap = !0;
                            break;
                        case 2:
                            me.useBlurExponentialShadowMap = !0;
                            break;
                        case 3:
                            me.useCloseExponentialShadowMap = !0;
                            break;
                        case 4:
                            me.useBlurCloseExponentialShadowMap = !0;
                            break;
                        case 5:
                            me.useContactHardeningShadow = !0;
                            break;
                        case 99:
                            me.usePercentageCloserFiltering = !0;
                            break;
                        default:
                            me.usePoissonSampling = !0
                    }
                    switch (ae) {
                        case "High":
                            me.filteringQuality = e.ShadowGenerator.QUALITY_HIGH;
                            break;
                        case "Medium":
                            me.filteringQuality = e.ShadowGenerator.QUALITY_MEDIUM;
                            break;
                        case "Low":
                            me.filteringQuality = e.ShadowGenerator.QUALITY_LOW
                    }
                    if (de === !0) {
                        var pe = me;
                        pe.lambda = U, pe.depthClamp = R, pe.shadowMaxZ = ne, pe.numCascades = L, pe.penumbraDarkness = E, pe.autoCalcDepthBounds = H, pe.stabilizeCascades = F, pe.cascadeBlendPercentage = N, pe.autoCalcDepthBoundsRefreshRate = I, pe.freezeShadowCastersBoundingInfo = G, pe.setDarkness(1 - e.Scalar.Clamp(ee)), ue.shadowEnabled = !0, pe.splitFrustum()
                    } else {
                        var ge = me;
                        ge.setDarkness(1 - e.Scalar.Clamp(ee)), ue.shadowEnabled = !0, ue.shadowMinZ = te, ue.shadowMaxZ = ne
                    }
                    null == r.metadata && (r.metadata = {}), null == r.metadata.unity && (r.metadata.unity = {}), r.metadata.unity.autorender = B
                }
                if (0 === s) {
                    var he = t.name + ".Holder";
                    r.includedOnlyMeshes = [new e.Mesh(he, n)]
                } else if (s === -1) r.includedOnlyMeshes = [];
                else {
                    r.includedOnlyMeshes = [];
                    var fe = u;
                    if (null != fe && fe.length > 0) {
                        var Se = function() {
                            var t = fe[o],
                                a = e.SceneManager.GetMeshByID(n, t);
                            if (null != a) {
                                var i = a.name + ".Detail",
                                    l = a.getChildren(function(e) {
                                        return e.name === i
                                    }, !0);
                                null != l && l.length > 0 ? r.includedOnlyMeshes.push(l[0]) : r.includedOnlyMeshes.push(a)
                            }
                        };
                        for (o = 0; o < fe.length; o++) Se()
                    }
                }
                t.lightRig = r
            }
        }, n
    }();
    e.MetadataParser = n
}(BABYLON || (BABYLON = {}));
var CVTOOLS_NAME = "CVTOOLS_unity_metadata",
    CVTOOLS_MESH = "CVTOOLS_babylon_mesh",
    CVTOOLS_HAND = "CVTOOLS_left_handed",
    CubeTextureLoader = function() {
        function e() {}
        return e
    }(),
    CVTOOLS_unity_metadata = function() {
        function e(e) {
            this.name = CVTOOLS_NAME, this.enabled = !1, this._babylonScene = null, this._loaderScene = null, this._assetsManager = null, this._materialMap = null, this._lightmapMap = null, this._reflectionMap = null, this._reflectionCache = null, this._assetContainer = !1, this._activeMeshes = !1, this._parseScene = !1, this._leftHanded = !1, this._disposeRoot = !1, this._sceneParsed = !1, this._preWarmTime = 1, this._hideLoader = !1, this._fileName = "Unknown", this._rootUrl = null, this._loader = e, this.enabled = this._loader.isExtensionUsed(CVTOOLS_NAME), this._parseScene = this._leftHanded = this._disposeRoot = this._sceneParsed = !1, this._rootUrl = null, this._masterList = null, this._detailList = null, this._parserList = null, this._shaderList = null, this._readyList = null, this._preloadList = null, this._materialMap = null, this._lightmapMap = null, this._preWarmTime = 1, this._hideLoader = !1, this._loaderScene = null, this._assetsManager = null, this._reflectionMap = null, this._reflectionCache = null, this._babylonScene = null, this.order = 100
        }
        return e.prototype.dispose = function() {
            delete this._loader
        }, e.prototype.onLoading = function() {
            var e = this;
            BABYLON.Utilities.LoadingState = 0, this._assetContainer = null != this._loader._assetContainer, this._babylonScene = this._loader.babylonScene, this._loaderScene = null, this._assetsManager = null, this._fileName = this._loader._fileName ? this._loader._fileName : "Unknown", this._rootUrl = this._loader._uniqueRootUrl ? this._loader._uniqueRootUrl : "/", this._loader.parent.onCompleteObservable.addOnce(function() {
                e.onComplete()
            }), this._loader.parent.onValidatedObservable.addOnce(function() {
                e.onValidate()
            }), this._parseScene = this._loader.isExtensionUsed(CVTOOLS_NAME) && BABYLON.SceneManager.IsSceneParsingEnabled() === !0, this._leftHanded = this._loader.isExtensionUsed(CVTOOLS_HAND), this._disposeRoot = this._sceneParsed = !1, this._masterList = [], this._detailList = [], this._parserList = [], this._shaderList = [], this._readyList = [], this._preloadList = [], this._materialMap = new Map, this._lightmapMap = new Map, this._preWarmTime = 1, this._hideLoader = !1, this._reflectionMap = {}, this._reflectionCache = {}, this._babylonScene.getEngine().getCaps().supportSRGBBuffers = BABYLON.SceneManager.SupportSRGBBuffers, this._leftHanded === !0 && null != this._loader.rootBabylonMesh && (this._loader.rootBabylonMesh.rotationQuaternion = BABYLON.Quaternion.Identity(), this._loader.rootBabylonMesh.scaling = BABYLON.Vector3.One()), this._parseScene === !0 && (BABYLON.SceneManager.RenderLoopReady = !1, null != this._loader.rootBabylonMesh && (this._loader.rootBabylonMesh.name = "Root." + this._fileName.replace(".gltf", "").replace(".glb", "")), this.setupLoader())
        }, e.prototype.onReady = function() {
            this._parseScene === !0 && this._disposeRoot === !0 && null != this._loader.rootBabylonMesh && this._loader.rootBabylonMesh.dispose(!0)
        }, e.prototype.onComplete = function() {
            var e = this;
            this._parseScene === !0 && (this.startParsing(), BABYLON.SceneManager.RenderLoopReady = !0, this._babylonScene.onAfterRenderObservable.addOnce(function() {
                BABYLON.Utilities.LoadingState = 3, e._processPreloadTimeout()
            }))
        }, e.prototype.onValidate = function() {
            this._parseScene === !0
        }, e.prototype.onCleanup = function() {
            this._rootUrl = null, this._fileName = null, this._parseScene = this._leftHanded = this._disposeRoot = this._sceneParsed = !1, this._masterList = null, this._detailList = null, this._parserList = null, this._shaderList = null, this._preWarmTime = 1, this._readyList = null, this._preloadList = null, this._hideLoader = !1, null != this._materialMap && (this._materialMap.clear(), this._materialMap = null), null != this._lightmapMap && (this._lightmapMap.clear(), this._lightmapMap = null), this._loaderScene = null, this._assetsManager = null, this._reflectionMap = null, this._reflectionCache = null, this._babylonScene = null
        }, e.prototype.setupLoader = function() {
            var e = this;
            this._parseScene === !0 && (this._assetsManager = new BABYLON.PreloadAssetsManager(this._babylonScene), this._assetsManager.onProgress = function(e, n, t) {
                if (BABYLON.SceneManager.AutoUpdateProgress === !0) {
                    var a = "Preloading asset " + (n - e) + " of " + n;
                    BABYLON.SceneManager.UpdateLoaderDetails(a, BABYLON.Utilities.LoadingState)
                } else null != BABYLON.Utilities.OnPreloaderProgress && BABYLON.Utilities.OnPreloaderProgress(e, n, t)
            }, this._assetsManager.onFinish = function(n) {
                BABYLON.SceneManager.SetTimeout(1e3, function() {
                    BABYLON.Utilities.LoadingState = 4, BABYLON.SceneManager.AutoUpdateProgress === !0 && BABYLON.SceneManager.UpdateLoaderStatus("Please wait", "Preparing render viewport", BABYLON.Utilities.LoadingState);
                    var t = e._preWarmTime > 0 ? 1e3 * (e._preWarmTime + 1) : 1e3;
                    BABYLON.SceneManager.SetTimeout(t, function() {
                        if (null != BABYLON.Utilities.OnPreloaderComplete && BABYLON.Utilities.OnPreloaderComplete(n), e._processShaderMaterials(e._babylonScene, e._shaderList), null != e._readyList && e._readyList.length > 0)
                            for (var t = 0; t < e._readyList.length; t++) {
                                var a = e._readyList[t];
                                null != a && a._ready && a._ready()
                            }
                        e._babylonScene.onAfterRenderObservable.addOnce(function() {
                            1 == e._hideLoader && BABYLON.SceneManager.HideSceneLoader(), e.onCleanup()
                        })
                    })
                })
            })
        }, e.prototype.startParsing = function() {
            this._parseScene === !0 && (BABYLON.Utilities.LoadingState = 2, this._processLevelOfDetail(this._babylonScene, this._detailList), this._processActiveMeshes(this._babylonScene, this._activeMeshes), this._processUnityMeshes(this._masterList), null != this._loaderScene && (this.preProcessSceneProperties(this._loaderScene, this._babylonScene), this.postProcessSceneProperties(this._rootUrl, this._loaderScene, this._babylonScene)), this._assetContainer === !1 && null != this._parserList && this._parserList.length > 0 && BABYLON.Utilities.PostParseSceneComponents(this._babylonScene, this._parserList, this._preloadList, this._readyList))
        }, e.prototype.loadSceneAsync = function(e, n) {
            if (this._parseScene === !0 && (this._loaderScene = n), this._parseScene === !0 && null != n.extras && null != n.extras.metadata) {
                if (null != n.extras.metadata.rawmaterials) {
                    var t = this._loader,
                        a = n.extras.metadata.rawmaterials;
                    this._preloadRawMaterialsAsync(e, t._gltf.materials, a)
                }
                BABYLON.Utilities.LoadingState = 1;
                var r = this._loader.loadSceneAsync(e, n);
                return this.loadSceneExAsync(e, n), r
            }
            return BABYLON.Utilities.LoadingState = 1, null
        }, e.prototype.loadSceneExAsync = function(e, n) {
            var t = this,
                a = this._loader,
                r = new Array;
            if (a._gltf.nodes)
                for (var i = 0, o = a._gltf.nodes; i < o.length; i++) {
                    var l = o[i];
                    if (l._babylonTransformNode && l._babylonBones)
                        for (var s = 0, u = l._babylonBones; s < u.length; s++) {
                            var c = u[s];
                            l._babylonTransformNode._linkedBone = c
                        }
                }
            if (null != this._reflectionMap && null != this._reflectionCache) {
                var d = 0,
                    m = function(e) {
                        if (d++, p._reflectionMap.hasOwnProperty(e)) {
                            var n = e;
                            if (null != p._assetsManager) {
                                var a = p._assetsManager.addBinaryFileTask("Material.ReflectionTextureTask" + d.toFixed(0), n);
                                a.onSuccess = function(e) {
                                    if (null != e.data) {
                                        var a = new Blob([e.data]),
                                            r = t._reflectionMap[n];
                                        null != r && r.forEach(function(e) {
                                            if (null != e && null != e.mapkey) {
                                                var n = t._reflectionCache[e.mapkey];
                                                if (null != n) null != e.material && BABYLON.Utilities.HasOwnProperty(e.material, "reflectionTexture") && (e.material.reflectionTexture = n);
                                                else {
                                                    var r = t._babylonScene,
                                                        i = URL.createObjectURL(a),
                                                        o = function() {
                                                            URL.revokeObjectURL(i)
                                                        },
                                                        l = new BABYLON.CubeTexture(i, r, null, null, null, o, o, null, e.prefiltered, e.extension);
                                                    l.name = e.name, null != e.boundingBoxSize && (l.boundingBoxSize = e.boundingBoxSize), null != e.boundingBoxPosition && (l.boundingBoxPosition = e.boundingBoxPosition), t._reflectionCache[e.mapkey] = l, null != e.material && BABYLON.Utilities.HasOwnProperty(e.material, "reflectionTexture") && (e.material.reflectionTexture = l)
                                                }
                                            }
                                        })
                                    } else console.error("Failed to load reflection texture task: " + n)
                                }, a.onError = function(e, n, t) {
                                    console.error(n, t)
                                }
                            }
                        }
                    },
                    p = this;
                for (var g in this._reflectionMap) m(g)
            }
            return a.logClose(), Promise.all(r).then(function() {})
        }, e.prototype._processActiveMeshes = function(e, n) {
            n === !0 && e.freeActiveMeshes()
        }, e.prototype._processUnityMeshes = function(e) {
            null != e && e.length > 0 && e.forEach(function(e) {
                BABYLON.Utilities.RegisterInstancedMeshBuffers(e)
            })
        }, e.prototype._processPreloadTimeout = function() {
            if (null != this._assetsManager) {
                if (null != this._preloadList && this._preloadList.length > 0)
                    for (var e = 0; e < this._preloadList.length; e++) {
                        var n = this._preloadList[e];
                        null != n && n.addPreloaderTasks && n.addPreloaderTasks(this._assetsManager)
                    }
                this._assetsManager.load()
            }
        }, e.prototype.loadNodeAsync = function(e, n, t) {
            var a = this;
            return this._parseScene === !0 && null != n.extras && null != n.extras.metadata ? this._loader.loadNodeAsync(e, n, function(e) {
                var r = e,
                    i = n.extras.metadata;
                null == r.metadata && (r.metadata = {}), r.metadata.unity = i, BABYLON.Utilities.ValidateTransformGuid(r), BABYLON.Utilities.ValidateTransformMetadata(r), BABYLON.Utilities.ValidateTransformQuaternion(r), a._leftHanded === !0 || a._loader.babylonScene.useRightHandedSystem === !0 ? r.overrideMaterialSideOrientation = BABYLON.Material.CounterClockWiseSideOrientation : r.overrideMaterialSideOrientation = BABYLON.Material.ClockWiseSideOrientation, r.isVisible = null == r.metadata.unity.visible || r.metadata.unity.visible, r.visibility = null != r.metadata.unity.visibility ? r.metadata.unity.visibility : 1, r.billboardMode = null != r.metadata.unity.billboard ? r.metadata.unity.billboard : 0,
                    a._assetContainer === !0 && (r.metadata.unity.prefab = !0), r.metadata.unity.prefab === !0 ? r.setEnabled(!1) : a._parserList.push(r), a._masterList.push(r), t(r)
            }) : null
        }, e.prototype.loadMaterialPropertiesAsync = function(e, n, t) {
            if (this._parseScene === !0) {
                var a = -1;
                n.index && (a = n.index, a >= 0 && null != this._materialMap && (this._materialMap.has(a) || this._materialMap.set(a, t))), t.gltfIndex = a;
                var r = this._loader,
                    i = new Array;
                if (t instanceof BABYLON.NodeMaterial) i.push(this._parseNodeMaterialPropertiesAsync(e + "/nodeMaterial", n, t));
                else if (t instanceof BABYLON.ShaderMaterial) i.push(this._parseShaderMaterialPropertiesAsync(e + "/shaderMaterial", n, t));
                else if (t instanceof BABYLON.StandardMaterial) i.push(this._parseDiffuseMaterialPropertiesAsync(e + "/standardMaterial", n, t));
                else {
                    var o = r._extensionsLoadMaterialPropertiesAsync(e, n, t);
                    o ? this._parseCommonConstantProperties(i, e + "/commonConstant", n, t) : (i.push(r.loadMaterialBasePropertiesAsync(e, n, t)), n.pbrMetallicRoughness && i.push(r._loadMaterialMetallicRoughnessPropertiesAsync(e + "/pbrMetallicRoughness", n.pbrMetallicRoughness, t)), r.loadMaterialAlphaProperties(e, n, t), this._parseCommonConstantProperties(i, e + "/commonConstant", n, t))
                }
                return Promise.all(i).then(function() {})
            }
            return null
        }, e.prototype._getCachedMaterialByIndex = function(e) {
            var n = null;
            return e >= 0 && null != this._materialMap && (n = this._materialMap.get(e) || null), n
        }, e.prototype._getCachedLightmapByIndex = function(e) {
            var n = null;
            return e >= 0 && null != this._lightmapMap && (n = this._lightmapMap.get(e) || null), n
        }, e.prototype.createMaterial = function(e, n, t) {
            if (this._parseScene === !0 && n.index) {
                var a = n.index;
                if (a >= 0) {
                    var r = this._getCachedMaterialByIndex(a);
                    if (null != r) return r
                }
            }
            if (this._parseScene === !0) {
                var i = null,
                    o = n.name || "No Name";
                if (null != n.extras && null != n.extras.metadata && null != n.extras.metadata.customMaterial) {
                    var l = n.extras.metadata,
                        s = l.customMaterial,
                        u = (l.customShader, BABYLON.Utilities.InstantiateClass(s));
                    if (null != u) {
                        var c = new u(o, this._loader.babylonScene);
                        if (null != c) {
                            var d = c instanceof BABYLON.Material;
                            d === !0 ? (i = c, i.fillMode = t, i instanceof BABYLON.ShaderMaterial && BABYLON.Utilities.InitializeShaderMaterial(i)) : BABYLON.Tools.Warn("Non material instantiated class: " + s)
                        } else BABYLON.Tools.Warn("Failed to instantiate material class: " + s)
                    } else BABYLON.Tools.Warn("Failed to locate material class: " + s)
                }
                return i
            }
            return null
        }, e.prototype._loadSkinAsync = function(e, n, t) {
            if (this._parseScene === !0) {
                var a = this._loader,
                    r = t,
                    i = function(e) {
                        a._forEachPrimitive(n, function(n) {
                            n.skeleton = e, n instanceof BABYLON.AbstractMesh && null != s._offscreen && s._offscreen === !0 && (n.alwaysSelectAsActiveMesh = !0)
                        })
                    };
                if (r._data) return i(r._data.babylonSkeleton), r._data.promise;
                var o = null != t.extras && null != t.extras.metadata && null != t.extras.metadata.name && "" !== t.extras.metadata.name ? t.extras.metadata.name : "Skeleton" + r.index,
                    l = this._fileName.replace(".gltf", "").replace(".glb", "") + "." + o;
                a._babylonScene._blockEntityCollection = this._assetContainer;
                var s = new BABYLON.Skeleton(t.name || l, l, a._babylonScene);
                a._babylonScene._blockEntityCollection = !1, s.overrideMesh = a._rootBabylonMesh, null != t.extras && null != t.extras.metadata && null != t.extras.metadata.offscreen && t.extras.metadata.offscreen === !0 && (s._offscreen = !0), a._loadBones(e, t, s), i(s);
                var u = a._loadSkinInverseBindMatricesDataAsync(e, t).then(function(e) {
                    a._updateBoneMatrices(s, e)
                });
                return r._data = {
                    babylonSkeleton: s,
                    promise: u
                }, u
            }
            return null
        }, e.prototype.loadAnimationAsync = function(e, n) {
            if (this._parseScene === !0 && null != n.extras && null != n.extras.metadata) {
                var t = this._loader,
                    a = n;
                t._babylonScene._blockEntityCollection = this._assetContainer;
                var r = new BABYLON.AnimationGroup(n.name || "animation" + a.index, t._babylonScene);
                t._babylonScene._blockEntityCollection = !1, a._babylonAnimationGroup = r;
                var i = new Array;
                BABYLON.GLTF2.ArrayItem.Assign(a.channels), BABYLON.GLTF2.ArrayItem.Assign(a.samplers);
                for (var o = 0, l = n.channels; o < l.length; o++) {
                    var s = l[o],
                        u = s;
                    i.push(t._loadAnimationChannelAsync(e + "/channels/" + u.index, e, n, s, function(a, b) {
                        r.addTargetedAnimation(b, a);
                    }))
                }
                return Promise.all(i).then(function() {
                    var e = {};
                    return e.unity = n.extras.metadata, r.metadata = e, r.normalize(0), r
                })
            }
            return null
        }, e.prototype._loadMeshPrimitiveAsync = function(e, n, t, a, r, i) {
            var o = this;
            if (this._parseScene === !0) {
                var l = this._loader;
                l.logOpen("" + e);
                var s, u = void 0 == t.skin && !a.primitives[0].targets,
                    c = void 0,
                    d = r._instanceData;
                if (u && d) s = d.babylonSourceMesh.createInstance(n), c = d.promise;
                else {
                    var m = new Array,
                        p = new BABYLON.Mesh(n, l._babylonScene);
                    l._createMorphTargets(e, t, a, r, p), m.push(l._loadVertexDataAsync(e, r, p).then(function(n) {
                        return l._loadMorphTargetsAsync(e, r, p, n).then(function() {
                            n.applyToMesh(p), o._setupBabylonMesh(p, t, a, r)
                        })
                    }));
                    var g = BABYLON.GLTF2.GLTFLoader._GetDrawMode(e, r.mode);
                    if (null != r.extras && null != r.extras.metadata && null != r.extras.metadata.multimaterial && null != r.extras.metadata.submeshes) this._setupBabylonMaterials(e, m, g, p, a, r);
                    else if (void 0 == r.material) {
                        var h = l._defaultBabylonMaterialData[g];
                        h || (h = l._createDefaultMaterial("__GLTFLoader._default", g), l._parent.onMaterialLoadedObservable.notifyObservers(h), l._defaultBabylonMaterialData[g] = h), p.material = h
                    } else {
                        var f = BABYLON.GLTF2.ArrayItem.Get(e + "/material", l._gltf.materials, r.material);
                        m.push(l._loadMaterialAsync("/materials/" + f.index, f, p, g, function(e) {
                            p.material = e
                        }))
                    }
                    c = Promise.all(m), u && (r._instanceData = {
                        babylonSourceMesh: p,
                        promise: c
                    }), s = p
                }
                return BABYLON.GLTF2.GLTFLoader.AddPointerMetadata(s, e), l._parent.onMeshLoadedObservable.notifyObservers(s), i(s), l.logClose(), c.then(function() {
                    return s
                })
            }
            return null
        }, e.prototype._setupBabylonMesh = function(e, n, t, a) {
            if (this._parseScene === !0) {
                this._loader;
                if (null != a.extras && null != a.extras.metadata && null != a.extras.metadata.multimaterial && null != a.extras.metadata.submeshes) {
                    var r = a.extras.metadata.submeshes;
                    e.subMeshes = [];
                    for (var i = 0; i < r.length; i++) {
                        var o = r[i];
                        BABYLON.SubMesh.AddToMesh(o.materialIndex, o.verticesStart, o.verticesCount, o.indexStart, o.indexCount, e)
                    }
                }
                null != n.extras && null != n.extras.metadata && null != n.extras.metadata.lods && null != n.extras.metadata.distances && null != this._detailList && this._detailList.push(e), e.computeWorldMatrix(!0)
            }
        }, e.prototype._processLevelOfDetail = function(e, n) {
            null != n && n.length > 0 && n.forEach(function(n) {
                if (null != n.metadata && null != n.metadata.unity && null != n.metadata.unity.lods) {
                    var t = n.metadata.unity.lods,
                        a = n;
                    if (null != n.metadata.unity.distances) {
                        var r = n.metadata.unity.distances;
                        if (r.length >= t.length) {
                            var i = r.length > 0 && r.length > t.length ? r[r.length - 1] : 0;
                            i >= 1 / 0 && (i = -1);
                            for (var o = 0; o < t.length; o++) {
                                var l = t[o],
                                    s = e.getMeshById(l);
                                null != s ? s instanceof BABYLON.Mesh && a.addLODLevel(r[o], s) : BABYLON.Tools.Warn("Failed to locate lod mesh with id " + l + " for " + n.name)
                            }
                            i > 0 && a.addLODLevel(i, null)
                        } else BABYLON.Tools.Warn("Invalid level of detail distances for " + n.name)
                    }
                }
            })
        }, e.prototype._setupBabylonMaterials = function(e, n, t, a, r, i) {
            if (this._parseScene === !0) {
                var o = this._loader,
                    l = i.extras.metadata.multimaterial,
                    s = l.materials,
                    u = [],
                    c = l.id || "MM_" + r.name,
                    d = l.name || "MM_" + r.name,
                    m = new BABYLON.MultiMaterial("[" + d + "]", o._babylonScene);
                m.id = c, s.forEach(function(n) {
                    if (null != n) {
                        var t = parseInt(n);
                        if (t >= 0) {
                            var r = BABYLON.GLTF2.ArrayItem.Get(e + "/material", o._gltf.materials, t);
                            u.push(r)
                        } else console.warn("Invalid Submesh Material Index Encountered For: " + a.name)
                    } else console.warn("Null Submesh Material Encountered For: " + a.name)
                }), n.push(this._parseMultiMaterialAsync("/materials/" + d, u, a, t, function(e) {
                    m.subMaterials = e, a.material = m
                }))
            }
        }, e.prototype._processShaderMaterials = function(e, n) {
            null != n && n.length > 0 && n.forEach(function(e) {
                e.freeze()
            })
        }, e.prototype.preProcessSceneProperties = function(e, n) {
            if (this._assetContainer !== !0 && this._sceneParsed === !1 && null != e.extras && null != e.extras.metadata && null != e.extras.metadata.properties && e.extras.metadata.properties === !0) {
                this._sceneParsed = !0;
                var t = null != this._rootUrl ? this._rootUrl : "/",
                    a = e.extras.metadata;
                if (null == n.metadata && (n.metadata = {}), null == n.metadata.unity && (n.metadata.unity = {}), n.metadata.unity = a, this._disposeRoot = null != a.disposeroot && a.disposeroot === !0, this._hideLoader = null != a.hideloader && a.hideloader === !0, this._preWarmTime = null != a.prewarmup ? a.prewarmup : 0, BABYLON.SceneManager.SetRootUrl(n, t), BABYLON.SceneManager.SetSceneFile(n, this._fileName), BABYLON.SceneManager.SetRightHanded(n, !this._leftHanded), BABYLON.SceneManager.EnableUserInput = !0, window.ktxtextures = null != a.ktxtextures && a.ktxtextures, window.ktxlightmaps = null != a.ktxlightmaps && a.ktxlightmaps, window.intensityFactor = null != a.intensity ? a.intensity : 2, window.debugModeEnabled = null != a.debugging && a.debugging, window.showDebugColliders = null != a.showdebugcolliders && a.showdebugcolliders, window.colliderVisibility = null != a.collidervisibility ? a.collidervisibility : 0, window.colliderRenderGroup = null != a.colliderrendergroup ? a.colliderrendergroup : 0, window.collisionWireframe = null != a.collisionwireframe && a.collisionwireframe, window.useTriangleNormals = null == a.trianglenormals || a.trianglenormals, null != a.clearcolor && (n.clearColor = BABYLON.Utilities.ParseColor4(a.clearcolor)), null != a.autoclear && a.autoclear === !0 && (n.autoClear = !0, n.autoClearDepthAndStencil = !0), null != a.rendergroups && (BABYLON.RenderingManager.MAX_RENDERINGGROUPS = a.rendergroups), null != a.imageprocessing) {
                    var r = a.imageprocessing,
                        i = null != r.contrast ? r.contrast : 1,
                        o = null != r.exposure ? r.exposure : 1;
                    null != n.imageProcessingConfiguration && (n.imageProcessingConfiguration.contrast = i, n.imageProcessingConfiguration.exposure = o)
                }
                if (null != a.ambientcoloring && (n.ambientColor = BABYLON.Utilities.ParseColor3(a.ambientcoloring)), null != a.ambientlighting && a.ambientlighting > 0) {
                    var l = n;
                    null == l._AmbientLight && (l._AmbientLight = new BABYLON.HemisphericLight("Ambient Lighting", new BABYLON.Vector3(0, 1, 0), n), l._AmbientLight.falloffType = BABYLON.Light.FALLOFF_STANDARD, l._AmbientLight.lightmapMode = BABYLON.Light.LIGHTMAP_DEFAULT), null != l._AmbientLight && (null != a.ambientskycolor && (l._AmbientLight.diffuse = BABYLON.Utilities.ParseColor3(a.ambientskycolor, BABYLON.Color3.Gray())), null != a.ambientspecularcolor && (l._AmbientLight.specular = BABYLON.Utilities.ParseColor3(a.ambientspecularcolor, BABYLON.Color3.White())), null != a.ambientgroundcolor && (l._AmbientLight.groundColor = BABYLON.Utilities.ParseColor3(a.ambientgroundcolor, BABYLON.Color3.Gray())), null != a.ambientlightintensity && (l._AmbientLight.intensity = a.ambientlightintensity))
                }
                if (null != a.fogmode) {
                    var s = a.fogmode;
                    if (s > 0) {
                        var u = .6;
                        n.fogMode = s, n.fogEnabled = !0, null != a.fogdensity && (n.fogDensity = a.fogdensity * u), null != a.fogstart && (n.fogStart = a.fogstart), null != a.fogend && (n.fogEnd = a.fogend), null != a.fogcolor && (n.fogColor = BABYLON.Utilities.ParseColor3(a.fogcolor))
                    }
                }
                var c = new BABYLON.Vector3(0, (-9.81), 0),
                    d = null != a.defaultgravity ? BABYLON.Utilities.ParseVector3(a.defaultgravity, c) : c;
                if (n.gravity = d.clone(), n.collisionsEnabled = !0, null != a.enablephysics) {
                    var m = a.enablephysics;
                    if (m === !0) {
                        var p = null == a.ccdenabled || a.ccdenabled,
                            g = null != a.ccdpenetration ? a.ccdpenetration : 1e-4,
                            h = null != a.subtimestep ? a.subtimestep : 0,
                            f = null != a.maxworldsweep ? a.maxworldsweep : 0,
                            S = null == a.deltaworldstep || a.deltaworldstep;
                        BABYLON.SceneManager.ConfigurePhysicsEngine(n, S, h, f, p, g, d)
                    }
                }
                if (null != a.userinput) {
                    var M = a.userinput;
                    BABYLON.UserInputOptions.KeyboardSmoothing = M.keyboardSmoothing, BABYLON.UserInputOptions.KeyboardMoveSensibility = M.keyboardSensitivity, BABYLON.UserInputOptions.KeyboardMoveDeadZone = M.keyboardDeadZone, BABYLON.UserInputOptions.GamepadDeadStickValue = M.padDeadStick, BABYLON.UserInputOptions.GamepadLStickXInverted = M.padLStickXInvert, BABYLON.UserInputOptions.GamepadLStickYInverted = M.padLStickYInvert, BABYLON.UserInputOptions.GamepadRStickXInverted = M.padRStickXInvert, BABYLON.UserInputOptions.GamepadRStickYInverted = M.padRStickYInvert, BABYLON.UserInputOptions.GamepadLStickSensibility = M.padLStickLevel, BABYLON.UserInputOptions.GamepadRStickSensibility = M.padRStickLevel, BABYLON.UserInputOptions.PointerAngularSensibility = M.mouseSensitivity, BABYLON.UserInputOptions.PointerWheelDeadZone = M.wheelDeadZone, BABYLON.UserInputOptions.PointerMouseDeadZone = M.mouseDeadZone, BABYLON.UserInputOptions.PointerMouseInverted = M.mouseMoveInvert, BABYLON.UserInputOptions.UseCanvasElement = M.useCanvasElement, BABYLON.UserInputOptions.UseArrowKeyRotation = M.arrowKeyRotation
                }
                if (null != a.enableinput) {
                    var y = a.enableinput;
                    if (y === !0) {
                        var v = null != a.pointerlock && a.pointerlock,
                            b = null != a.preventdefault && a.preventdefault,
                            T = null != a.usecapture && a.usecapture,
                            _ = {
                                pointerLock: v,
                                preventDefault: b,
                                useCapture: T
                            };
                        BABYLON.SceneManager.ConfigureUserInput(n, _)
                    }
                }
                null != a.freezeactivemeshes && a.freezeactivemeshes === !0 && (this._activeMeshes = !0)
            }
        }, e.prototype.postProcessSceneProperties = function(e, n, t) {
            var a = this;
            if (this._assetContainer !== !0 && null != n.extras && null != n.extras.metadata && null != n.extras.metadata.properties && n.extras.metadata.properties === !0) {
                var r = n.extras.metadata;
                if (null != r.skybox) {
                    var i = r.skybox,
                        o = null != i.skyfog && i.skyfog,
                        l = null != i.skytags ? i.skytags : "Untagged",
                        s = null != i.skysize ? i.skysize : 1e3,
                        u = null != i.rotation ? i.rotation : 0,
                        c = null != i.basename && "" !== i.basename ? e + i.basename : null,
                        d = null != i.skyfaces ? i.skyfaces : null,
                        m = null != i.rendergroup ? i.rendergroup : 0,
                        p = null != i.extensions && i.extensions.length > 0 ? i.extensions : null,
                        g = null != i.polynomial ? i.polynomial : 1;
                    try {
                        if (null != d && "" !== d && null != c && "" !== c) {
                            var h = null;
                            if ("png" === d) h = new BABYLON.CubeTexture(c, t, p), c.indexOf("_rgbd") >= 0 ? (h.isRGBD = !0, h.gammaSpace = !1) : (h.isRGBD = !1, h.gammaSpace = !0);
                            else if ("jpg" === d) h = new BABYLON.CubeTexture(c, t, p), h.isRGBD = !1, h.gammaSpace = !0;
                            else if ("ktx2" === d) h = new BABYLON.CubeTexture(c, t, p), h.isRGBD = !1, h.gammaSpace = !0;
                            else {
                                var f = !0,
                                    S = c + "." + d;
                                h = new BABYLON.CubeTexture(S, t, null, (!0), null, null, null, null, f), h.gammaSpace = !1
                            }
                            h.name = i.basename, h.coordinatesMode = BABYLON.Texture.SKYBOX_MODE, h.rotationY = BABYLON.Tools.ToRadians(u), BABYLON.SceneManager.GetRightHanded(t) === !0 && (h.rotationY += Math.PI);
                            var M = "Ambient Skybox",
                                y = BABYLON.Mesh.CreateBox(M, s, t);
                            y.id = M, y.infiniteDistance = !0, y.applyFog = o, y.renderingGroupId = m, null != l && "" !== l && BABYLON.Tags.AddTagsTo(y, l), t.useRightHandedSystem === !0 && (y.scaling.x *= -1);
                            var v = new BABYLON.StandardMaterial("Skybox-Material", t);
                            v.backFaceCulling = !1, v.disableLighting = !0, v.diffuseColor = new BABYLON.Color3(0, 0, 0), v.emissiveColor = new BABYLON.Color3(0, 0, 0), v.specularColor = new BABYLON.Color3(0, 0, 0), v.ambientColor = new BABYLON.Color3(0, 0, 0), v.reflectionTexture = h, y.material = v
                        }
                    } catch (b) {
                        console.warn(b)
                    }
                    if (null != i.environment) {
                        var T = i.environment;
                        t.environmentIntensity = null != T.level ? BABYLON.Scalar.Clamp(T.level, 0, 10) : 1;
                        var _ = null != T.info && "" !== T.info ? T.info : null;
                        if (null != _ && "" !== _) try {
                            var x = BABYLON.SceneManager.GetRootUrl(t),
                                C = x + _.rooturl,
                                A = C + _.name;
                            if (null != this._assetsManager) {
                                var w = this._assetsManager.addBinaryFileTask("Global.EnvironmentTextureTask", A);
                                w.onSuccess = function(e) {
                                    if (null != e.data) {
                                        var n = new Blob([e.data]),
                                            t = a._babylonScene,
                                            r = URL.createObjectURL(n),
                                            i = function() {
                                                URL.revokeObjectURL(r)
                                            },
                                            o = new BABYLON.CubeTexture(r, t, null, null, null, i, i, null, (!0), ".dds");
                                        t.environmentTexture = o, t.environmentTexture.name = "assets/" + _.name, null != t.environmentTexture && null != t.environmentTexture.sphericalPolynomial && (t.isReady() ? t.environmentTexture.sphericalPolynomial.scaleInPlace(g) : t.onReadyObservable.addOnce(function() {
                                            t.environmentTexture.sphericalPolynomial.scaleInPlace(g)
                                        }))
                                    } else console.error("Failed to load environment texture task: " + A)
                                }, w.onError = function(e, n, t) {
                                    console.error(n, t)
                                }
                            }
                        } catch (P) {
                            console.warn(P)
                        }
                    }
                }
                if (null != r.navigation && null != r.navigation.prebaked && "" !== r.navigation.prebaked) {
                    var O = null != r.navigation.collision && r.navigation.collision === !0,
                        B = null != r.navigation.showdebug && r.navigation.showdebug === !0,
                        k = null != r.navigation.debugcolor ? r.navigation.debugcolor : [.05, .225, .75],
                        L = new BABYLON.Color3(k[0], k[1], k[2]),
                        U = null != r.navigation.timesteps ? r.navigation.timesteps : 0;
                    if (null != this._assetsManager) {
                        var R = r.navigation.prebaked,
                            N = this._assetsManager.addBinaryFileTask("System.NavigationMeshTask", R);
                        N.onSuccess = function(e) {
                            if (null != e.data) {
                                var n = new Uint8Array(e.data);
                                BABYLON.SceneManager.LoadNavigationMesh(t, n, B, L, U, O)
                            } else console.error("Failed to load navigation mesh task: " + R)
                        }, N.onError = function(e, n, t) {
                            console.error(n, t)
                        }
                    }
                }
            }
        }, e.prototype._preloadRawMaterialsAsync = function(e, n, t) {
            var a = this._loader,
                r = new Array,
                i = BABYLON.Material.TriangleFillMode;
            return t.forEach(function(t) {
                var o = BABYLON.GLTF2.ArrayItem.Get(e + "/material", n, t);
                if (null != o) {
                    var l = a.createMaterial(e, o, i);
                    BABYLON.GLTF2.GLTFLoader.AddPointerMetadata(l, e), a._parent.onMaterialLoadedObservable.notifyObservers(l), r.push(a.loadMaterialPropertiesAsync(e, o, l))
                }
            }), Promise.all(r).then(function() {})
        }, e.prototype._parseMultiMaterialAsync = function(e, n, t, a, r) {
            var i = this;
            void 0 === r && (r = function() {});
            var o = this._loader,
                l = n;
            l._data = l._data || {};
            var s = l._data[a];
            if (!s) {
                o.logOpen(e + " " + (t.name || ""));
                var u = [],
                    c = new Array;
                n.forEach(function(n) {
                    var t = null;
                    if (n.index) {
                        var r = n.index;
                        r >= 0 && (t = i._getCachedMaterialByIndex(r))
                    }
                    null == t && (t = o.createMaterial(e, n, a), BABYLON.GLTF2.GLTFLoader.AddPointerMetadata(t, e), o._parent.onMaterialLoadedObservable.notifyObservers(t), c.push(o.loadMaterialPropertiesAsync(e, n, t))), u.push(t)
                }), s = {
                    babylonMaterials: u,
                    babylonMeshes: [],
                    promises: c
                }, l._data[a] = s, o.logClose()
            }
            return s.babylonMeshes.push(t), t.onDisposeObservable.addOnce(function() {
                var e = s.babylonMeshes.indexOf(t);
                e !== -1 && s.babylonMeshes.splice(e, 1)
            }), r(s.babylonMaterials), Promise.all(s.promises).then(function() {
                return s.babylonMaterials
            })
        }, e.prototype._parseNodeMaterialPropertiesAsync = function(e, n, t) {
            var a = null != n.extras && null != n.extras.metadata ? n.extras.metadata : null,
                r = t,
                i = new Array;
            r.backFaceCulling = null == a || null == a.backFaceCulling || a.backFaceCulling, n.doubleSided && (r.backFaceCulling = !1);
            var o = 1;
            if (n.pbrMetallicRoughness) {
                var l = n.pbrMetallicRoughness;
                if (l) {
                    if (l.baseColorFactor) {
                        var s = BABYLON.Color4.FromArray(l.baseColorFactor);
                        r.setVector4("_Color", new BABYLON.Vector4(Math.pow(s.r, 1 / 2.2), Math.pow(s.g, 1 / 2.2), Math.pow(s.b, 1 / 2.2), s.a)), o = s.a
                    } else r.setVector4("_Color", new BABYLON.Vector4(1, 1, 1, 1));
                    l.baseColorTexture && i.push(this._loader.loadTextureInfoAsync(e + "/baseColorTexture", l.baseColorTexture, function(e) {
                        e.name = t.name + " (Base Color)";
                        var n = e;
                        n.level = null != a && null != a.diffuseIntensity ? a.diffuseIntensity : 1, r.setTexture("_MainTex", n)
                    }))
                }
            }
            if (n.normalTexture && i.push(this._loader.loadTextureInfoAsync(e + "/normalTexture", n.normalTexture, function(e) {
                    e.name = t.name + " (Normal)";
                    var a = e;
                    void 0 != n.normalTexture.scale && (a.level = n.normalTexture.scale), r.setTexture("_BumpMap", a)
                })), n.occlusionTexture && i.push(this._loader.loadTextureInfoAsync(e + "/occlusionTexture", n.occlusionTexture, function(e) {
                    e.name = t.name + " (Occlusion)";
                    var a = e;
                    void 0 != n.occlusionTexture.strength && (a.level = n.occlusionTexture.strength), r.setTexture("_OcclusionMap", a)
                })), n.emissiveFactor) {
                var u = BABYLON.Color4.FromArray(n.emissiveFactor);
                (u.r > 0 || u.g > 0 || u.b > 0) && r.setVector4("_EmissionColor", new BABYLON.Vector4(Math.pow(u.r, 1 / 2.2), Math.pow(u.g, 1 / 2.2), Math.pow(u.b, 1 / 2.2), u.a))
            }
            if (n.emissiveTexture && i.push(this._loader.loadTextureInfoAsync(e + "/emissiveTexture", n.emissiveTexture, function(e) {
                    e.name = t.name + " (Emissive)";
                    var n = e;
                    r.setTexture("_EmissionMap", n)
                })), null != a) {
                if (r.wireframe = null != a.useWireframe && a.useWireframe, r.needDepthPrePass = null != a.depthPrepass && a.depthPrepass, a.customTextures) {
                    var c = function(n) {
                            var o = a.customTextures[n];
                            null != o && i.push(d._loader.loadTextureInfoAsync(e + "/" + n, o, function(e) {
                                e.name = t.name + " (Custom)", r.setTexture(n, e)
                            }))
                        },
                        d = this;
                    for (var m in a.customTextures) c(m)
                }
                if (a.customVectors)
                    for (var p in a.customVectors) {
                        var g = a.customVectors[p];
                        null != g && r.setVector4(p, BABYLON.Vector4.FromArray(g))
                    }
                if (a.customColors)
                    for (var h in a.customColors) {
                        var f = a.customColors[h];
                        null != f && r.setVector4(h, BABYLON.Vector4.FromArray(f))
                    }
                if (a.customFloats)
                    for (var S in a.customFloats) {
                        var M = a.customFloats[S];
                        null != M && r.setFloat(S, M)
                    }
                null != a.freezeMaterial && a.freezeMaterial === !0 && null != this._shaderList && this._shaderList.push(r)
            }
            var y = Promise.all(i).then(function() {});
            return r.compile(), y
        }, e.prototype._parseShaderMaterialPropertiesAsync = function(e, n, t) {
            var a = null != n.extras && null != n.extras.metadata ? n.extras.metadata : null,
                r = t,
                i = new Array;
            r.backFaceCulling = null == a || null == a.backFaceCulling || a.backFaceCulling, n.doubleSided && (r.backFaceCulling = !1), BABYLON.Utilities.HasOwnProperty(r, "ambientColor") && (r.ambientColor = null != a && a.ambientColorFactor ? BABYLON.Color3.FromArray(a.ambientColorFactor) : BABYLON.Color3.Black());
            var o = 1;
            if (n.pbrMetallicRoughness) {
                var l = n.pbrMetallicRoughness;
                if (l) {
                    if (l.baseColorFactor) {
                        var s = BABYLON.Color4.FromArray(l.baseColorFactor);
                        r.setVector4("diffuseColor", new BABYLON.Vector4(Math.pow(s.r, 1 / 2.2), Math.pow(s.g, 1 / 2.2), Math.pow(s.b, 1 / 2.2), s.a)), o = s.a
                    } else r.setVector4("diffuseColor", new BABYLON.Vector4(1, 1, 1, 1));
                    l.baseColorTexture && i.push(this._loader.loadTextureInfoAsync(e + "/baseColorTexture", l.baseColorTexture, function(e) {
                        e.name = t.name + " (Base Color)";
                        var n = e;
                        n.level = null != a && null != a.diffuseIntensity ? a.diffuseIntensity : 1, r.setTexture("diffuseTexture", n)
                    }))
                }
            }
            if (n.normalTexture && i.push(this._loader.loadTextureInfoAsync(e + "/normalTexture", n.normalTexture, function(e) {
                    e.name = t.name + " (Normal)";
                    var a = e;
                    void 0 != n.normalTexture.scale && (a.level = n.normalTexture.scale), r.setTexture("bumpTexture", a)
                })), n.occlusionTexture && i.push(this._loader.loadTextureInfoAsync(e + "/occlusionTexture", n.occlusionTexture, function(e) {
                    e.name = t.name + " (Occlusion)";
                    var a = e;
                    void 0 != n.occlusionTexture.strength && (a.level = n.occlusionTexture.strength), r.setTexture("ambientTexture", a)
                })), n.emissiveFactor) {
                var u = BABYLON.Color4.FromArray(n.emissiveFactor);
                (u.r > 0 || u.g > 0 || u.b > 0) && r.setVector4("emissiveColor", new BABYLON.Vector4(Math.pow(u.r, 1 / 2.2), Math.pow(u.g, 1 / 2.2), Math.pow(u.b, 1 / 2.2), u.a))
            }
            n.emissiveTexture && i.push(this._loader.loadTextureInfoAsync(e + "/emissiveTexture", n.emissiveTexture, function(e) {
                e.name = t.name + " (Emissive)";
                var n = e;
                r.setTexture("emissiveTexture", n)
            })), r.alpha = o;
            var c = n.alphaMode || "OPAQUE";
            switch (c) {
                case "OPAQUE":
                    r.alpha = 1, r.transparencyMode = BABYLON.ShaderMaterial.MATERIAL_OPAQUE;
                    break;
                case "MASK":
                    r.transparencyMode = BABYLON.ShaderMaterial.MATERIAL_ALPHATEST;
                    break;
                case "BLEND":
                    r.transparencyMode = BABYLON.ShaderMaterial.MATERIAL_ALPHABLEND;
                    break;
                default:
                    throw new Error(e + "/AlphaMode: Invalid value (" + n.alphaMode + ")")
            }
            if (null != a) {
                if (r.wireframe = null != a.useWireframe && a.useWireframe, r.needDepthPrePass = null != a.depthPrepass && a.depthPrepass, a.customTextures) {
                    var d = function(n) {
                            var o = a.customTextures[n];
                            null != o && i.push(m._loader.loadTextureInfoAsync(e + "/" + n, o, function(e) {
                                e.name = t.name + " (Custom)", r.setTexture(n, e)
                            }))
                        },
                        m = this;
                    for (var p in a.customTextures) d(p)
                }
                if (a.customVectors)
                    for (var g in a.customVectors) {
                        var h = a.customVectors[g];
                        null != h && r.setVector4(g, BABYLON.Vector4.FromArray(h))
                    }
                if (a.customColors)
                    for (var f in a.customColors) {
                        var S = a.customColors[f];
                        null != S && r.setVector4(f, BABYLON.Vector4.FromArray(S))
                    }
                if (a.customFloats)
                    for (var M in a.customFloats) {
                        var y = a.customFloats[M];
                        null != y && r.setFloat(M, y)
                    }
                null != a.freezeMaterial && a.freezeMaterial === !0 && null != this._shaderList && this._shaderList.push(r)
            }
            return Promise.all(i).then(function() {})
        }, e.prototype._parseDiffuseMaterialPropertiesAsync = function(e, n, t) {
            var a = null != n.extras && null != n.extras.metadata ? n.extras.metadata : null,
                r = t,
                i = new Array;
            BABYLON.Utilities.HasOwnProperty(r, "ambientColor") && (r.ambientColor = null != a && a.ambientColorFactor ? BABYLON.Color3.FromArray(a.ambientColorFactor) : BABYLON.Color3.Black()), BABYLON.Utilities.HasOwnProperty(r, "backFaceCulling") && (r.backFaceCulling = null == a || null == a.backFaceCulling || a.backFaceCulling), n.doubleSided && (BABYLON.Utilities.HasOwnProperty(r, "twoSidedLighting") && (r.twoSidedLighting = !0), BABYLON.Utilities.HasOwnProperty(r, "backFaceCulling") && (r.backFaceCulling = !1));
            var o = 1;
            if (n.pbrMetallicRoughness) {
                var l = n.pbrMetallicRoughness;
                if (l) {
                    if (BABYLON.Utilities.HasOwnProperty(r, "diffuseColor"))
                        if (l.baseColorFactor) {
                            var s = BABYLON.Color4.FromArray(l.baseColorFactor);
                            r.diffuseColor = new BABYLON.Color3(Math.pow(s.r, 1 / 2.2), Math.pow(s.g, 1 / 2.2), Math.pow(s.b, 1 / 2.2)), o = s.a
                        } else r.diffuseColor = BABYLON.Color3.White();
                    BABYLON.Utilities.HasOwnProperty(r, "diffuseTexture") && l.baseColorTexture && i.push(this._loader.loadTextureInfoAsync(e + "/baseColorTexture", l.baseColorTexture, function(e) {
                        e.name = t.name + " (Base Color)", r.diffuseTexture = e, r.diffuseTexture.level = null != a && null != a.diffuseIntensity ? a.diffuseIntensity : 1
                    }))
                }
            }
            if (BABYLON.Utilities.HasOwnProperty(r, "bumpTexture") && n.normalTexture && (i.push(this._loader.loadTextureInfoAsync(e + "/normalTexture", n.normalTexture, function(e) {
                    e.name = t.name + " (Normal)", r.bumpTexture = e, void 0 != n.normalTexture.scale && (r.bumpTexture.level = n.normalTexture.scale)
                })), BABYLON.Utilities.HasOwnProperty(r, "invertNormalMapX") && (r.invertNormalMapX = !this._loader.babylonScene.useRightHandedSystem), BABYLON.Utilities.HasOwnProperty(r, "invertNormalMapY") && (r.invertNormalMapY = this._loader.babylonScene.useRightHandedSystem)), BABYLON.Utilities.HasOwnProperty(r, "ambientTexture") && n.occlusionTexture && i.push(this._loader.loadTextureInfoAsync(e + "/occlusionTexture", n.occlusionTexture, function(e) {
                    e.name = t.name + " (Occlusion)", r.ambientTexture = e, void 0 != n.occlusionTexture.strength && (r.ambientTexture.level = n.occlusionTexture.strength)
                })), BABYLON.Utilities.HasOwnProperty(r, "emissiveColor")) {
                var u = n.emissiveFactor ? BABYLON.Color4.FromArray(n.emissiveFactor) : new BABYLON.Color4(0, 0, 0, 1);
                r.emissiveColor = new BABYLON.Color3(Math.pow(u.r, 1 / 2.2), Math.pow(u.g, 1 / 2.2), Math.pow(u.b, 1 / 2.2))
            }
            BABYLON.Utilities.HasOwnProperty(r, "emissiveTexture") && n.emissiveTexture && i.push(this._loader.loadTextureInfoAsync(e + "/emissiveTexture", n.emissiveTexture, function(e) {
                e.name = t.name + " (Emissive)", r.emissiveTexture = e, BABYLON.Utilities.HasOwnProperty(r, "useEmissiveAsIllumination") && (r.useEmissiveAsIllumination = null != a && null != a.useEmissiveAsIllumination && a.useEmissiveAsIllumination)
            })), BABYLON.Utilities.HasOwnProperty(r, "alpha") && (r.alpha = o);
            var c = n.alphaMode || "OPAQUE";
            switch (c) {
                case "OPAQUE":
                    BABYLON.Utilities.HasOwnProperty(r, "alpha") && (r.alpha = 1);
                    break;
                case "MASK":
                    r.alphaCutOff = void 0 == n.alphaCutoff ? .5 : n.alphaCutoff, r.diffuseTexture && BABYLON.Utilities.HasOwnProperty(r, "diffuseTexture") && (r.diffuseTexture.hasAlpha = !0);
                    break;
                case "BLEND":
                    r.diffuseTexture && (BABYLON.Utilities.HasOwnProperty(r, "diffuseTexture") && (r.diffuseTexture.hasAlpha = !0), BABYLON.Utilities.HasOwnProperty(r, "useAlphaFromDiffuseTexture") && (r.useAlphaFromDiffuseTexture = !0));
                    break;
                default:
                    throw new Error(e + "/AlphaMode: Invalid value (" + n.alphaMode + ")")
            }
            return this._parseCommonConstantProperties(i, e, n, t), Promise.all(i).then(function() {})
        }, e.prototype._parseCommonConstantProperties = function(e, n, t, a) {
            var r = this,
                i = null != t.extras && null != t.extras.metadata ? t.extras.metadata : null;
            if (null != i) {
                var o = a;
                if (BABYLON.Utilities.HasOwnProperty(o, "alphaMode") && (o.alphaMode = null != i && i.alphaMode ? i.alphaMode : BABYLON.Engine.ALPHA_COMBINE), BABYLON.Utilities.HasOwnProperty(o, "ambientColor") && (o.ambientColor = null != i && i.ambientColorFactor ? BABYLON.Color3.FromArray(i.ambientColorFactor) : BABYLON.Color3.Black()), BABYLON.Utilities.HasOwnProperty(o, "backFaceCulling") && (o.backFaceCulling = null == i || null == i.backFaceCulling || i.backFaceCulling), a instanceof BABYLON.PBRMaterial && (a.useMetallnessFromMetallicTextureBlue = !0, a.useRoughnessFromMetallicTextureGreen = !0, a.useRoughnessFromMetallicTextureAlpha = !1, a.useAmbientOcclusionFromMetallicTextureRed = !1, a.directIntensity = null != i.directIntensity ? i.directIntensity : 1, a.specularIntensity = null != i.specularIntensity ? i.specularIntensity : 1, a.emissiveIntensity = null != i.emissiveIntensity ? i.emissiveIntensity : 1, a.environmentIntensity = null != i.environmentIntensity ? i.environmentIntensity : 1, a.indexOfRefraction = null != i.indexOfRefraction ? i.indexOfRefraction : 1.5, null != i.useAlphaFromAlbedoTexture && (a.useAlphaFromAlbedoTexture = i.useAlphaFromAlbedoTexture), null != i.parallaxBias && i.parallaxBias > 0 && (a.useParallax = !0, a.parallaxScaleBias = .9 * i.parallaxBias, a.useParallaxOcclusion = null == i.parallaxOcclusion || i.parallaxOcclusion, a.useParallaxOcclusion === !0 && (a.parallaxScaleBias *= .5))), BABYLON.Utilities.HasOwnProperty(o, "unlit") && (o.unlit = null != i.unlitMaterial && i.unlitMaterial), BABYLON.Utilities.HasOwnProperty(o, "wireframe") && (o.wireframe = null != i.useWireframe && i.useWireframe), BABYLON.Utilities.HasOwnProperty(o, "disableLighting") && (o.disableLighting = null != i.disableLighting && i.disableLighting), BABYLON.Utilities.HasOwnProperty(o, "maxSimultaneousLights") && (o.maxSimultaneousLights = null != i.maxSimultaneousLights ? i.maxSimultaneousLights : 4), BABYLON.Utilities.HasOwnProperty(o, "needDepthPrePass") && (o.needDepthPrePass = null != i.depthPrepass && i.depthPrepass), BABYLON.Utilities.HasOwnProperty(o, "lightmapTexture") && i.lightmapTexture) {
                    i.lightmapTexture.nonColorData = !0;
                    var l = null,
                        s = null != i.lightmapTexture.index ? i.lightmapTexture.index : -1;
                    s >= 0 && (l = this._getCachedLightmapByIndex(s)), null != l ? (o.lightmapTexture = l, o.useLightmapAsShadowmap = !0, BABYLON.Utilities.HasOwnProperty(o, "ambientColor") && (o.ambientColor = BABYLON.Color3.White())) : e.push(this._loader.loadTextureInfoAsync(n + "/lightmapTexture", i.lightmapTexture, function(e) {
                        e.name = "assets/LightmapTexture-" + s, e.level = i.lightmapLevel ? i.lightmapLevel : 1;
                        var n = e,
                            t = null != window.ktxlightmaps && window.ktxlightmaps === !0;
                        t === !0 ? e.gammaSpace = !0 : (e.gammaSpace = !1, n.onLoadObservable.addOnce(function() {
                            n.isReady() ? n.isRGBD = !0 : BABYLON.Tools.Warn("Failed to register texture as RGBD: " + n.name)
                        })), o.lightmapTexture = e, s >= 0 && null != r._lightmapMap && (r._lightmapMap.has(s) || r._lightmapMap.set(s, n)), o.useLightmapAsShadowmap = !0, BABYLON.Utilities.HasOwnProperty(o, "ambientColor") && (o.ambientColor = BABYLON.Color3.White())
                    }))
                }
                a instanceof BABYLON.PBRMaterial && i.detailMapTexture && e.push(this._loader.loadTextureInfoAsync(n + "/detailMapTexture", i.detailMapTexture, function(e) {
                    e.name = a.name + " (Detail Map)", e.level = 1, a.detailMap.texture = e, a.detailMap.bumpLevel = i.detailBumpLevel ? i.detailBumpLevel : 1, a.detailMap.diffuseBlendLevel = i.detailBlendLevel ? i.detailBlendLevel : .75, a.detailMap.roughnessBlendLevel = i.detailRoughLevel ? i.detailRoughLevel : .5, a.detailMap.isEnabled = !0
                }));
                var u = BABYLON.SceneManager.GetRenderQuality(),
                    c = u === BABYLON.RenderQuality.High || u === BABYLON.RenderQuality.Medium;
                if (c === !0 && BABYLON.Utilities.HasOwnProperty(o, "reflectionColor") && (o.reflectionColor = null != i && i.reflectionColorFactor ? BABYLON.Color3.FromArray(i.reflectionColorFactor) : BABYLON.Color3.White()), c === !0 && BABYLON.Utilities.HasOwnProperty(o, "reflectionTexture") && i.reflectionCubemapInfo) {
                    var d = this._loader._rootUrl,
                        m = (d + i.reflectionCubemapInfo.rooturl + i.reflectionCubemapInfo.name).toLowerCase(),
                        p = m.lastIndexOf("."),
                        g = p > -1 ? m.substring(p).toLowerCase() : "",
                        h = !0,
                        f = new CubeTextureLoader;
                    f.name = "assets/" + i.reflectionCubemapInfo.name, f.mapkey = m, f.material = o, f.extension = g, f.prefiltered = h, i.reflectionCubemapInfo.boundingBoxSize && (f.boundingBoxSize = BABYLON.Vector3.FromArray(i.reflectionCubemapInfo.boundingBoxSize), f.name += " (" + f.boundingBoxSize.x.toString() + " " + f.boundingBoxSize.y.toString() + " " + f.boundingBoxSize.z.toString() + ")", f.mapkey += "_" + f.boundingBoxSize.x.toString() + "_" + f.boundingBoxSize.y.toString() + "_" + f.boundingBoxSize.z.toString()), i.reflectionCubemapInfo.boundingBoxPosition && (f.boundingBoxPosition = BABYLON.Vector3.FromArray(i.reflectionCubemapInfo.boundingBoxPosition), f.name += " (" + f.boundingBoxPosition.x.toString() + " " + f.boundingBoxPosition.y.toString() + " " + f.boundingBoxPosition.z.toString() + ")", f.mapkey += "_" + f.boundingBoxPosition.x.toString() + "_" + f.boundingBoxPosition.y.toString() + "_" + f.boundingBoxPosition.z.toString());
                    var S = this._reflectionMap[m];
                    null == S ? (S = [f], this._reflectionMap[m] = S) : S.push(f)
                }
                if (BABYLON.Utilities.HasOwnProperty(o, "terrainInfo") && (o.terrainInfo = null != i.terrainInfo ? i.terrainInfo : null), BABYLON.Utilities.HasOwnProperty(a, "universalMaterial")) {
                    var M = a;
                    if (i.customTextures) {
                        var y = function(t) {
                                var r = i.customTextures[t];
                                null != r && (M.checkSampler(t), e.push(v._loader.loadTextureInfoAsync(n + "/" + t, r, function(e) {
                                    e.name = a.name + " (Custom)", M.setTexture(t, e, !0)
                                })))
                            },
                            v = this;
                        for (var b in i.customTextures) y(b)
                    }
                    if (i.customVectors)
                        for (var T in i.customVectors) {
                            var _ = i.customVectors[T];
                            null != _ && M.setVector4(T, BABYLON.Vector4.FromArray(_), !0)
                        }
                    if (i.customColors)
                        for (var x in i.customColors) {
                            var C = i.customColors[x];
                            null != C && M.setVector4(x, BABYLON.Vector4.FromArray(C), !0)
                        }
                    if (i.customFloats)
                        for (var A in i.customFloats) {
                            var w = i.customFloats[A];
                            null != w && M.setFloat(A, w, !0)
                        }
                } else {
                    if (i.customTextures) {
                        var P = function(t) {
                                var r = i.customTextures[t];
                                null != r && BABYLON.Utilities.HasOwnProperty(o, t) && e.push(O._loader.loadTextureInfoAsync(n + "/" + t, r, function(e) {
                                    e.name = a.name + " (Custom)", o[t] = e
                                }))
                            },
                            O = this;
                        for (var b in i.customTextures) P(b)
                    }
                    if (i.customVectors)
                        for (var T in i.customVectors) {
                            var _ = i.customVectors[T];
                            null != _ && BABYLON.Utilities.HasOwnProperty(o, T) && (o[T] = BABYLON.Vector4.FromArray(_))
                        }
                    if (i.customColors)
                        for (var x in i.customColors) {
                            var C = i.customColors[x];
                            null != C && BABYLON.Utilities.HasOwnProperty(o, x) && (o[x] instanceof BABYLON.Vector4 ? o[x] = BABYLON.Vector4.FromArray(C) : o[x] instanceof BABYLON.Color4 ? o[x] = BABYLON.Color4.FromArray(C) : o[x] = BABYLON.Color3.FromArray(C))
                        }
                    if (i.customFloats)
                        for (var A in i.customFloats) {
                            var w = i.customFloats[A];
                            null != w && BABYLON.Utilities.HasOwnProperty(o, A) && (o[A] instanceof Boolean ? o[A] = w > 0 : o[A] = w)
                        }
                }
                null != i.freezeMaterial && i.freezeMaterial === !0 && null != this._shaderList && this._shaderList.push(a)
            }
        }, e
    }(),
    CVTOOLS_babylon_mesh = function() {
        function e(e) {
            this.name = CVTOOLS_MESH, this.enabled = !1, this._loader = e, this.enabled = this._loader.isExtensionUsed(CVTOOLS_MESH), this.order = 101
        }
        return e.prototype.dispose = function() {
            delete this._loader
        }, e
    }(),
    CVTOOLS_left_handed = function() {
        function e(e) {
            this.name = CVTOOLS_HAND, this.enabled = !1, this._loader = e, this.enabled = this._loader.isExtensionUsed(CVTOOLS_HAND), this.order = 102
        }
        return e.prototype.dispose = function() {
            delete this._loader
        }, e
    }();
BABYLON.GLTF2.GLTFLoader.RegisterExtension(CVTOOLS_NAME, function(e) {
    return new CVTOOLS_unity_metadata(e)
}), BABYLON.GLTF2.GLTFLoader.RegisterExtension(CVTOOLS_MESH, function(e) {
    return new CVTOOLS_babylon_mesh(e)
}), BABYLON.GLTF2.GLTFLoader.RegisterExtension(CVTOOLS_HAND, function(e) {
    return new CVTOOLS_left_handed(e)
}), BABYLON.SceneManager.IsWindows() && "undefined" != typeof Windows.UI.ViewManagement && "undefined" != typeof Windows.UI.ViewManagement.ApplicationViewBoundsMode && "undefined" != typeof Windows.UI.ViewManagement.ApplicationViewBoundsMode.useCoreWindow && Windows.UI.ViewManagement.ApplicationView.getForCurrentView().setDesiredBoundsMode(Windows.UI.ViewManagement.ApplicationViewBoundsMode.useCoreWindow), BABYLON.SceneManager.IsXboxConsole() && navigator.gamepadInputEmulation && (navigator.gamepadInputEmulation = "gamepad");
var TimerPlugin = window;
TimerPlugin.requestAnimFrame = function() {
    return TimerPlugin.requestAnimationFrame || TimerPlugin.webkitRequestAnimationFrame || TimerPlugin.mozRequestAnimationFrame || TimerPlugin.oRequestAnimationFrame || TimerPlugin.msRequestAnimationFrame || function(e, n) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), TimerPlugin.requestInterval = function(e, n) {
    function t() {
        var i = TimerPlugin.getTimeMilliseconds(),
            o = i - a;
        o >= n && (e.call(), a = TimerPlugin.getTimeMilliseconds()), r.value = TimerPlugin.requestAnimFrame(t)
    }
    if (!(TimerPlugin.requestAnimationFrame || TimerPlugin.webkitRequestAnimationFrame || TimerPlugin.mozRequestAnimationFrame && TimerPlugin.mozCancelRequestAnimationFrame || TimerPlugin.oRequestAnimationFrame || TimerPlugin.msRequestAnimationFrame)) return window.setInterval(e, n);
    var a = TimerPlugin.getTimeMilliseconds(),
        r = new Object;
    return r.value = TimerPlugin.requestAnimFrame(t), r
}, TimerPlugin.clearRequestInterval = function(e) {
    TimerPlugin.cancelAnimationFrame ? TimerPlugin.cancelAnimationFrame(e.value) : TimerPlugin.webkitCancelAnimationFrame ? TimerPlugin.webkitCancelAnimationFrame(e.value) : TimerPlugin.webkitCancelRequestAnimationFrame ? TimerPlugin.webkitCancelRequestAnimationFrame(e.value) : TimerPlugin.mozCancelRequestAnimationFrame ? TimerPlugin.mozCancelRequestAnimationFrame(e.value) : TimerPlugin.oCancelRequestAnimationFrame ? TimerPlugin.oCancelRequestAnimationFrame(e.value) : TimerPlugin.msCancelRequestAnimationFrame ? TimerPlugin.msCancelRequestAnimationFrame(e.value) : window.clearInterval(e), e = null
}, TimerPlugin.requestTimeout = function(e, n) {
    function t() {
        var i = TimerPlugin.getTimeMilliseconds(),
            o = i - a;
        o >= n ? e.call() : r.value = TimerPlugin.requestAnimFrame(t)
    }
    if (!(TimerPlugin.requestAnimationFrame || TimerPlugin.webkitRequestAnimationFrame || TimerPlugin.mozRequestAnimationFrame && TimerPlugin.mozCancelRequestAnimationFrame || TimerPlugin.oRequestAnimationFrame || TimerPlugin.msRequestAnimationFrame)) return window.setTimeout(e, n);
    var a = TimerPlugin.getTimeMilliseconds(),
        r = new Object;
    return r.value = TimerPlugin.requestAnimFrame(t), r
}, TimerPlugin.clearRequestTimeout = function(e) {
    TimerPlugin.cancelAnimationFrame ? TimerPlugin.cancelAnimationFrame(e.value) : TimerPlugin.webkitCancelAnimationFrame ? TimerPlugin.webkitCancelAnimationFrame(e.value) : TimerPlugin.webkitCancelRequestAnimationFrame ? TimerPlugin.webkitCancelRequestAnimationFrame(e.value) : TimerPlugin.mozCancelRequestAnimationFrame ? TimerPlugin.mozCancelRequestAnimationFrame(e.value) : TimerPlugin.oCancelRequestAnimationFrame ? TimerPlugin.oCancelRequestAnimationFrame(e.value) : TimerPlugin.msCancelRequestAnimationFrame ? TimerPlugin.msCancelRequestAnimationFrame(e.value) : window.clearTimeout(e), e = null
}, TimerPlugin.getTimeMilliseconds = function() {
    return null != BABYLON.PrecisionDate && null != BABYLON.PrecisionDate.Now ? BABYLON.PrecisionDate.Now : (performance || Date).now()
}, TimerPlugin.gameTimeMilliseconds = TimerPlugin.getTimeMilliseconds();