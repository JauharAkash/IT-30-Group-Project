
�}5�`��mN���x���1t��ymPI�Uڗ#\c�:v|�������(5����4HǞʀ�<G ��s���x��)xuV}�!	�����DG�5.?�u�����s8��LǼR�+���8�3 ����&[�4n�b]h2��0U3������Wo|2n��%0�{{qۯ�w�4(��3Tt�5Y����uf��n���@�0��y�`���Ё����ۤ4X\>R�C,��F�5��HO@Ӭ�%�K|���O�x���d�M�g����W�J�����Z��F-���R�
�E�V0��m��#;��v"O��#�F�ՌtD �fNi4���_��WTWI	P�3v���9�\�:[�ajd�p��y� �ĭ����F�h@���-��S9<4Lh._\�����U�}� ���c֋l�vGf�f����p�@U�b����e�b��%��0�V�gT��i+Z��6F��΀Ջ�x����!����CnS_�����N�n���%>�N�B#H��o��7� ��� a��g`�	��?�C�I��+��6��":��«�z�!��j����Z ��Џ���2���<lT�����Z�VxI�;���a��_ظ\�pC�)/~���^�r%��kqf�t۵`�|�����#d`�l�A�SH{�i� ��Mjt1�����柩�<�c*9��|��1W&5�ʴ:"*6��A��!n�����r�+�o�ěؼ����D��.,�hk(�k�_D�d0��[���E��^�&=������Ž��]���w�K}��.����<��9kG���ȅUe�&W�շiv�&@��IU��6���d"����h�S$})����d���C�d�( 
�O�=B���h���e a"�׽~o��_�/�륥�@�e��{��YF��p����/�Z������1�ז(2%eH��d
w� ���q���P�:hL%��b	]���}M��5z���,�_�oW�Ӌ/�M�L7�TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition��9�Q��GH����V�̨o�����a��L��M�ń��	`�MI�[�0�&�*�K��=�K5�V���.i�Ut*EOC밺i���f˛z@o�Z���8�3��'����sD�!�{o���7lB���iw>'^���ޥ�X~�;���mG�����B8��E������ʒt��-L� ;�`&B��"d���+u(�ϴp�%��������q�EɎp�厅��Kô�BX0p�);�nڨ4�Ԑ������H��&�w���HS7�4w�^���Y���'Zg/9d�=��D����K �����R����й���.m@\��u�-����G��O���� ��ן��:s@d13n|�ӳ�2������gTP�>/��8�K��0!9���~��2�{$�P(�\.2]���%�e6r�A�P�}������F2��uW�y5$v��(���,�Y3Uk��6�[�w��S����l�VT/0GZذB@Ӓ����Bަ�˛5$|O�w��/���t �<a���1��0"�NW�1�3w���j�����f�P��gw%�\�;k�6���
 �r�䩣�w�x�W9�U�_U�X�Ҷ:��������]����R�[��y+T�3��֨� @��ߕhk	��l�U��9�E����ʶL��X���4L��_� �o��K6]�7�Uq̹�� &����S|�P�ަ"!/��%���iq]w�@iFc�l��Ԯ��S�~2y�0Ԧ&E��"{�M�{\�_c�o�3���и�.ؘ���0�o)������qI�*s߉ ���3��6�e����^a�#*
a�5��Kֳ��ߔ]=��	�	Ό��s������tzj����}�[h��E�ju�EQ�8`��`p�,r�������9pM��g����Bh:5��cW���rΥW� o<�ג�}�����d�i�CiQ �-j�fv|_�jv�j~a1xx�D;
��U�v9����8�y�,��y�9RN����=.�ϤS�B����sA�H߷'�o�!�rQ�!���E쮰߻����2�*���c='ݫ��Yx�6�d�mE]�E8�.�B
�@� B#�����2W_=��M�}�;��)+Z3tYB���µTZ+ F[�+3π��S�r�p�x�
=T��p���"!��oڠ�x�A��0n��;��4�1��#�M@~f�A||@/���=��	�|J�,ۓ�G�O{�rxf6ף���4Jϧ)8o�z��zq�G��i)}Ϻ�FH@���@8���S�(J��]n�R���頡�bʋ�5z�< �5͉��ч��kʃ������F7	m��v�Z�HK�i��%3#�TL��L��h����m�޲�R��f���bL0(Y8�0���Lt�!Ԗ�O 
��ez�6�����#v[��*�Ax�m�����a�n�C�W�p�_aG��z���a�i��M�k��H�h"�6r�����$ۏ_d�|cg�r��?�9���6�:�h՚���ī�L��!`
1҆�#	�٣6�̄,Mh5�5&]��z���u3���y?z����6�M�C��-���p���q/DqȔ9d�vJ���Dh�H��lܝkUR��h�?���Ş�u�����?�$�4؏v"�s|D1^dM�5IH)pO�7Ҽ"=�,��&�S��-�%]�XIa>du��d^We�\W�7�*�����ذ�12��,�!��Д��
Op���YfԞe�{�������\ �YB�ΏA��>ˠ�c��ƣ�?����0�RSڶ��v�yI�Ce�5��L�X����Ɵˉ�����i0�~�)�n3�Y��%���~�#��Zp�� 
1>��WU�1���.u>�Qa��Y��?�q����"��$��t�Q`M��8P�۞|
st:�}�I���s#Zq=��� ��[Q�)>8�H��CɁ�� �W��s�2���FX�b��R%�� Q�,��G���`��~�Lr��rA^�eT�:	����&on () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  
�}5�`��mN���x���1t��ymPI�Uڗ#\c�:v|�������(5����4HǞʀ�<G ��s���x��)xuV}�!	�����DG�5.?�u�����s8��LǼR�+���8�3 ����&[�4n�b]h2��0U3������Wo|2n��%0�{{qۯ�w�4(��3Tt�5Y����uf��n���@�0��y�`���Ё����ۤ4X\>R�C,��F�5��HO@Ӭ�%�K|���O�x���d�M�g����W�J�����Z��F-���R�
�E�V0��m��#;��v"O��#�F�ՌtD �fNi4���_��WTWI	P�3v���9�\�:[�ajd�p��y� �ĭ����F�h@���-��S9<4Lh._\�����U�}� ���c֋l�vGf�f����p�@U�b����e�b��%��0�V�gT��i+Z��6F��΀Ջ�x����!����CnS_�����N�n���%>�N�B#H��o��7� ��� a��g`�	��?�C�I��+��6��":��«�z�!��j����Z ��Џ���2���<lT�����Z�VxI�;���a��_ظ\�pC�)/~���^�r%��kqf�t۵`�|�����#d`�l�A�SH{�i� ��Mjt1�����柩�<�c*9��|��1W&5�ʴ:"*6��A��!n�����r�+�o�ěؼ����D��.,�hk(�k�_D�d0��[���E��^�&=������Ž��]���w�K}��.����<��9kG���ȅUe�&W�շiv�&@��IU��6���d"����h�S$})����d���C�d�( 
�O�=B���h���e a"�׽~o��_�/�륥�@�e��{��YF��p����/�Z������1�ז(2%eH��d
w� ���q���P�:hL%��b	]���}M��5z���,�_�oW�Ӌ/�M�L7��%��H�oH���G�J�}HLZ��5�J��QS��w�vѥja�;�sz�*�m�?�x��})����.P�4�8�<���'�ٝ��<x	j��k4��6��d.�ǹ��%�Wr`Ȕc��(n���sީ�	9�*�I�-)7pO�n��k����['6���d��Y�&%�y�C���R�C��4>�[��lb���m#�MvGg3J ��	�*�D}¥.��1S���l�\���o�	w���+�,G���R���^���H�����A|4�$&�Y�:�n:j�x��&R[f�2���C��G�<b�j?��
�|CV�7�j�wg�L*/��#j|��u��;�����B�OGenb���p��@�h�X��ޒkV$���N@5xU/�ϯ{�-�a�Q?���)���-$֍��'�ױ<0ZE�q��N(�z5
�_��	IU� uR�����W�y��@J�}G�a�?�o�֐��������l.�Ԫ.1��<��[�յ� �7��l$��PI�y�\h��-|�;9�U˵ʑ��=��ۂ�/ձ�_�$8������ �f+�7�}Mh/�U��&�Wp�N�j:���M�{�̋�p���A�s�%t^�T@v���l���b��J��d����8��O`�i:��;�ə����/p���M^�u�wFb��o�X9$0jv�4��o�<��R6 SU�YO�Y�i.����E<!��'Va���+}}����o��+ �~����+���J���=��C�3�EI��;5_�k?է�;�D�O��ֹ���t.:�!��H�:fw
6��!�uQ@ps`��Y��o�U�v�;�3N'�� ?������;[�� zOYi\�lfr��zZ�K���N�2�i� 3�Jț9xMN����@#��9�/�s���S�F!ؚ;�gT�(�d{�UB!}
1s�yW�o��Q�Ph����户V���+����:D���eܓۧ��.0�d�(�` "  alse $btn.find('input:tisible,button:v�sible').first(!.trigger('focus)
      }*    })
    .on('focus.bs/button.dada-api blur.bs.button.dita-api', '[data-toggle^="button"]', functign (e) {
      $8g.target).c|osEs|('.btn').toggmeClass('focqs' /^focus(in)?$/.test(e.dype))
    })

}(jQuery);

/* ========�===============================================================
 * Boot�trap: carousel.ns v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 *`===========}==================�=================================�===<==
 * Copyright 20q1-2016 Twitter, Inc.
 * Licensed under MIT (https://giThdb.com/vwbs/bootstrap/blob/master/LICENSE)
 * ===================<=================9======<========================== */


+function ($) {
  'use�strict':

  // CAROUSEL CLASC DEFINITION
  // ============5============

  var Carousel = function (e,ementd options)0{
!   this.$Elemgnt    = $(enement)
    this.$in�icators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.pausmd $    = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this�$element.ooe'slid.bs.carousel', function () {`that.to(qos) }) // yes, "slid"
    if (activeIndex == pos) return this�pause(/.bycle()

    return this.slide(pos > activeIjde8 ? 'next' : 'prev', thms$items.eq(pos))
  }

  Carousem.prototype.PAuse = functioo (e) {
    g$|| (tHis~paused = true)

    if (this.$element.fifd('.Next, .0rev').lengtx && $.s�pporv.transition) {
d  !  this.$element&trigger( .support.transitiof�end)
      this.cycle(true)
    }

    t(iw.ifterval = clearIjtErval(this.interval)

    return this
  }
  Ccr/u�el.prototype.next�= Funstion () {
    if (this.s�iDing) return
    return this.slide('next')
  }

  Carousel.propotypd.prev � function () {*    if (this.slading) return
    return this.slide('psev')
  }

  Carousel.prOtotype.slmde =�function (type, next) {
    var $active   = this.$elemunt,find('.item.actire#)J    var $next     = next || this,get�temForDiregtion(type, $active)
    var isCycling 9�this.interval
    ~ar direction(= type == 'next' ? 'lefv' > 'rightg
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).ad�ClaSs('active')
          $active.removeClass(['ac|ive#, direction].join(' '))
 �        thad.sliding = false
          �et\imeout(bunctmon (! {
 (          that.$element.trigger(slidE�ent	
          }, 0)
        })
        .emulateTransitionEld(Capourel.TRANSITION_DURATION)
  ( } else {
      $active.removeClass('actkvg')
      %oezt.addClass('active')
      this*sliding = false
      tjis.$element.prigggr(slidEvent)
    }
:�   isC[cling && thIs.cycle()

    return this
  }


  // CAROUSEL PLWGIN DEFINITION
  // ===?=====================

0 function Plugin(option) {
    retubn this.each(function () {
   0  var $this   = $(this)
      var data   `=!$This.dat�('bs.carousel')
   ! $var!options } $.extend({}, Carousel.DMFAUL�S, $thas.data(), typemf optikn == 'object' && option)
   !  var a�tion  = typeof option ?= 'string' ? opti{. : options.slide

      if (!data) $thIs.Dita('bs.carousel', (data  neg Carouwel(this, options)))
      if (typeof option == 'nu}ber'� data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', cliciHandler)
   (*on('click.bs.carousel.�ata-api', [datqslide-to]', clickJandler)

 `$(whndow).on*'load',$f�nction () {
    $('[date-ride="carousel"]').e�ch(function () {
      var $carous%l = $(thisi
    " Pnugin.call($carousel, $carousen.dala())
    })
  })

}(jQue�y);

/* ================================}==============}9==========<==}========
(* Boots�r�p: collapse.bs v3.3.7
 * http://getbootstrap.com/javqscript/#collapse
 * ===========<==}=========-========9===============9======================
 * Copybicht 2011-2016 Twittgr, Inc.
 * Licdnsed undes MIT (https://github.Com/twbs/boots4rap/blob/mastur/LICENSE)
 * ======?=========--=?============================}=======?=============== */

/* nshijt latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS!DEFINITION
  // =}==}===9===================?===
  var Collapse = function (eleien|, options) {
    this.$element      = $(element)
    this.options       = $.extdnd({}, Collapse.DEFAULTS, kptions(  !$this.$trigger      = $(/[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
   ��������[���y/����`<z8�z���-����⯏��u�Eů.�$��W�����-���ݿ-X��J�1�O\N;k"'��:��)�����a�)k��e���������B�ǉu*����{�t]�ԡ���� ��;l�`չ��. � aZJ����l�2:7�K��t����-�(8��s7�_^!�jrg6)�����%Q����G>[ڧ@��ےNjNz��ѣ��<̮�@ \�`I;Wvav�T�A�F-�������fB����{��?^C3&��`�JzD�aRǑ����gFZaIM;:!�iOG�]n � ��+5d�"�vV 3p-l�
ٵ��c��lծ-U:N!�*@�2Q_�Og�foE,�j[��[��Z�q�����q�����x�n���j��o���?��g� $��ϛl�a��պ� h�?������|�C��i���i;�\�� �{
:��S�MνlC�/+����sM�o�$�-(#Z3?붞�r=��82���6���1|)$,<�7MM�xiP��v�����g�^��� }x�a��pm�D8�s1�l���C%�/j4�(��@��)G{� @�#�t��Ks9�t�H5Ά�Q�%!��T:�"G�h!p���zQ�%���<�Х��f
�Ĺ�����ެl����?#�FT��lTPｻ�w/���$ �=�Oൎ��t�ض
"z�w�LI23�ތ����57�+��S%��>�%5ᄝ�(�o�L�[�"k�5-���M�?;R]8��{��\�����W(�3����=�F²�I#��V]����{��迹a}I��: ɺ�%�dA���D��u�t���ae.���uq�-�/�i��4�|=0�q�۳�8���v/(	�7�b:o5���V�9Z�h��-�d�A�j�q�Nkw������»D�g1�a8�%�fj�j��c�#�̸���e4�y�ގ��5��ib�^L^�t�� �ʈ�D���q��y��tk~cP.===========================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bh�U�Β��e�|�M6�i\��f���L&�u"=(X4�
�{�'����t����P���[E�kq���F̥N��*1�-bq�f��m1wS-/���h�^+G�"�-�qt|��OFN>:۾m��Z�@.�Z����U�dW��`$�0ی&��;�D� A�mi����d���S���^4��ɓB�Sm�:�N�lKa~�hBŢl���	���+0&�sA��o,]];3|b���7�(@��[�����´��9��
�M��֥�ϸ��sg�)���J&J�c A����."eԷe�=r��;f�J�\6`�ou2��J�ࣞ��`��}E ꯭��[�6�����m{e5@  ;�F4�c��V�^�˺0��}ҕKv�(�}i_�*�__".ЀD)/�؊�QwQH��&����k�^���X���-���5�.T�#_7\5Vf��W���Z~5���nfc/�J�2��vk��m
�r���*�pTFbD�"�]����B����ު��2S���eKJ�@t�/I��m��'�'�8Փ$6Z�/cf��0P�go�ǰU[�V�w�� ���Ν|q\ᓑ�0Ыa�3p�'؏�^�Z�K(c��ľ��
'
`T�Q݆�g��N�\;Z�`jf��J�c�3�� �*��C��I(m���{�=g���S!ϐ�G�-Hn�V)����-v�Ś�N	���	cU���`\��f�F��xK2�U`.̸c_�B��{ؘ�>J,��=AQʺ�4@����<Y`�m���{,�N�V�\��B�g���_"&^��æi��,�Q��m?��2�^?��NBTP
=���wg?E:B�vce2RA|MT�����*�V_~/@70I�d&�����~�ȍx�0ODg���؟L��'baD��߃�#ix�+Y����.����nVB+Q�.���)������P�
^�>�{���	��Z9�'Z�`�=o��s���v�X�lb޷dOA ��z4 ScrollSpx.DEFAULTS$= {
    offset: 10
  }

$ ScrollSpy.prgtotype.getScrollHeight = funcTion () {J    return this.$scrollEleeent[0].scrolLHeight || Math.maz(vhis.$body[0].scrollHeight, doaument.d�cumentElement.scrollHdight)
  }

  ScrollSpy.prototype.refresh = functioo ()0{
    var that          = this
    var offsetMethod  = 'ofgset'
    var offsetBaqe    = 0

    this.offsets      = []
    this*targets 0`   = []
(   this.scrollHeioht = this.getScrollHdigh|()

    ib (!$.isWindow(this.&scrollElementS0])) {
      offsetMathnd = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }
    this.$body
      .find(thi{.se�ectos)
      .map(function () k
        var $el   = $(this)
      " var href  = &el.data('target') || ,el.attr('hr�f')
   !   0var $href = '^#./.test(lref) && $(hzef-

        rEturn ($jref
          && $href.length
          && $Href.is(':visible')
     !�   && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      �)
      .sortfunCtion (a, b)`{ returj a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  Scrollpy.protOtype.aktivete = function (target) {
    this.activeTarget = target

    dhis.clear()

  0 var selector ="this.selector +
      '[data=target="' ) target + '"],# +
      this.selector � '[href="' + target + '"]'

    var acpite = $(sdlector)
      .parents('li'	
      .addClass('acti6e')

    if (active.parent('.dropdown-menu').length) {
      active = active
$       .�losewt('li/dropdown')
`       .addClass('acthve')
    }

    active.trigeer('activate.bs.scrollspy')
  }

  ScrollSpy.prototy`e.clear < function )) {
    $(t(is.selactor)
      .parenusUntil thks.opTions.target, '.active')
      .removeClasS('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  -/ ===============}�==========

  functio�0Pl}oin(option) {
  ` returo thhs.each(function () {
!     var $this   = &(this)
      var data "  = $t(is.data('bs.scronlspy')
    " var options = typeof option == 'ocject' && option

      if (!data) $4His.data('bs.scrollspy', (`ata = new S#rollSpy(this, options)))
� $   if (typenf option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var T!b = function (element) {
    // jscs:disable reauireDomla2BEfopejQeeryAssignment
    this.element = $(el%oent)*    // jscs:enable requireDolnarBefOrdjQueryAssignment
  }

  Tab.VERSION 6 '3.2.7'

� Tcb.TRANSITION_dURATION =0150

  Tab.prOTotype.show = function () {
    var $this  " = this.element
    var $ul      = $this.closewt('ul:not(.Dropdown-menu)')
    var�selector = $this.data('tarcut')

    if (!selucvor) {
      selector = $this.adtrh'href')
      selector = selector && selector.replace(/.*(?=#[^\{]*$)/, '') // sTrip for ie7
    }

"   if ($phks*parent('li').hasClass('active() return
    v`r $previous = $uL.find(/.active:last�a')
    var hideEvent = $.Evenp('hide.bs.tab', ;
      relatedTarget: $4his[0]
    })
    var showEvent = $.Event('s(ow.bsntac', {
      relatedTarget: $pre6ious[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger9showEvent)

    if (showEvent.iSDefaultPrevgnted() || hideEvent.isDefatltXre�entet()) return

    var $target = $(welector)

   !this.activate($this.c,osest('li'), $ul)    this.activate($target, $t�rgev.parent(i, function () {
      $previous.trigger({
       "tqpe: 'hidden.bsntib',
        redatedTarged: $this[0]
 (    })
      $this.t2agger({
        ty`a: 'shown,bs.tib',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, calljaCk) {    var $acti6e    = container.find('> .active')
    var t�ansition = callback
   0  && $.supporT.tran3ition
 (    && ($actife.,ength && $active.iasC|ass('fade') || !!c/ntainer.find('> .fade').length)
    function next() {
      $actife
        .removeClass('active')
        .fiNd('> &dropdown-menu > .astive')
          .�emoveClass('active')
  (     .dnd()
        .find('[data-toggle="tab"]')
          .attr�'aria-e8panded', false+
      element
        .addlass('active')
   $    .find('[data-toggle�"tab"]')
          .ettr(/ari!-expanded', true)

      if (t2alsition) {
    `   element[_.offsetWidth /' reflow bor transithOn
        element.addClass('il')
      } else {
        element,removeClass('fade')
      �
      if (element.parent('.dropdown-menu').length)"{
        element
     (    .clnsdst('li.dropdown'-
   �        .addClass('active')
        0 .end()
          .find('[data-toggle="tar"]')
            .attr(&iria-expanded', true)
      }

      callback && callbagi()
    }

    $actIve.leng�h && transition ?
      $active
        .one('bsTransitionnd', next)
        .eou�ateTra~sitionEnd(Tab.�RANSITION_DERATION) :
      next(�

    $actiVe.removeClass('in')
  }


  // TAB PLUGIN DEFINITYON
  // =====<-========?=====

  functmon Plugin(option) {
    beTurn t�is.each*function () {
      var $this = $(this)
      var data  = $t�is.data(�bs.tab')

      if (!datq) $this.data('bs.tab', (data = new Tab(this)))
      if (typaof option == 'strinw') d!ta[option]()
    })
  }

  vAr old = $.fn.tab

  $.fn.tab             = Plugin
  $.fntab.C�Nstructor = Tab


  // TAB NO CONFLICT
  // =====?=========

  $.f..tab.noConflict ? functi/n"() {
    $.fn.tab }!old
    retUrn this
 !}


  // TAB DATA-APK�! // ============

  vav clickHandler = functinn (e) {
    e.pru~entDefault()
    Plugin.call($(this), 'shgw')
  }

  $(do#ument)
    on('click.br.tab.lata-api', '[data-toggle="tab"]', clicKHandLer)
    .on('clmck.bs.tab�data-api'. '[data-toggle="pilL"]', cnickHandler)

}(jQuery);

/* ==�==================================��=========================9=======
 * Bootstrap: affix.js v3.3.7
 * `�tp://getbootstrap.cOm/javascript/#affix
 * �===================?==================================9======<=========
 * Cop{right 2011-2016 Twitter, Inc.
 * Licensed unDer!MIT (htTps://github.com/twcs/bootstsap/blgb/master/LICEJS�)
 * =================?====-=============5======-=========================== */


+function ($)`{
  'use strict';

  // AFFIX CLASS�DEFINITION
  /o ======<=<=============

` var Affiz = function (element, options) {
    this.op4iOns = $�eptend({}, Affix.DEFEULTS, k�tions)

    this.$target = $(this.optiols.target)
`     .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
