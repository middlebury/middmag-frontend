class Toggler {
  constructor(elem) {
    this.elem = elem;
    this.target = this.getTarget(this.elem);

    const outsideElemSelector = this.elem.getAttribute('data-toggle-onoutsideclickof');
    this.outsideElem = document.querySelector(outsideElemSelector);

    this.enabledClass = 'has-toggler';
    this.activeClass = 'is-toggled';
    this.bodyActiveClass = 'has-toggled-elem';

    this.focusTargetSelector = elem.getAttribute('data-toggle-focus');
    this.focusTarget = document.querySelector(this.focusTargetSelector);
  }

  init() {
    if(!this.target) {
      return;
    }
    this.elem.classList.add(this.enabledClass);
    this.target.classList.add(this.enabledClass);
    this.addListeners();
  }

  addListeners() {
    if(this.outsideElem) {
      document.addEventListener('click', this.handleOutsideClick);
    }

    this.elem.addEventListener('click', this.handleElemClick);
  }

  handleElemClick = e => {
    e.preventDefault();
    this.toggle(this.elem, this.target);
  }

  handleOutsideClick = e => {
    const isClickInside = this.outsideElem.contains(e.target);

    // if the click outside is on another toggler that is same group, it's not a click outside
    if(!isClickInside && this.isActive(this.elem)) {
      this.close(this.elem, this.target);
    }
  }

  getTarget(elem) {
    const selector = elem.getAttribute('data-toggle-target');
    const target = document.querySelector(selector);
    return target;
  }

  isActive(elem) {
    return elem.classList.contains(this.activeClass);
  }

  closeGroup(elem) {
    const group = elem.getAttribute('data-toggle-group');
    const groupElems = document.querySelectorAll('[data-toggle-group="' + group + '"]');

    if(groupElems) {
      [].forEach.call(groupElems, elem => {
        const target = this.getTarget(elem);

        if(this.isActive(elem)) {
          this.close(elem, target);
        }
      });
    }
  }

  close(elem, target) {
    elem.classList.remove(this.activeClass);
    target.classList.remove(this.activeClass);
    document.body.classList.remove(this.bodyActiveClass);
  }

  open(elem, target) {
    elem.classList.add(this.activeClass);
    target.classList.add(this.activeClass);
    document.body.classList.add(this.bodyActiveClass);

    if (this.focusTarget) {
      // TODO: watch for transition end instead
      setTimeout(() => {
        document.querySelector('input').focus();
      }, 100);
    }
  }

  toggle(elem, target) {
    if(this.isActive(elem)) {
      this.close(elem, target);
      return;
    }

    this.closeGroup(elem);
    this.open(elem, target);
  }
}

const togglers = document.querySelectorAll('[data-toggle-target]');

[].forEach.call(togglers, function(elem) {
  const toggler = new Toggler(elem);
  toggler.init();
});

export default Toggler;
