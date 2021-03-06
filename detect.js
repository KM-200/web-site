(function () {
  var a = document.getElementById("autodownload");
  [
	  ["Ubuntu/11.10", "apt:zeroinstall-injector"],
	  ["Ubuntu/11.04", "https://downloads.sourceforge.net/project/zero-install/injector/1.0-rc1/zeroinstall-injector_1.0~rc1-1_all.deb"],
	  ["Ubuntu/10.10", "https://downloads.sourceforge.net/project/zero-install/injector/1.0-rc1/zeroinstall-injector_1.0~rc1-1_all.deb"],
	  ["Ubuntu/10.04", "https://downloads.sourceforge.net/project/zero-install/injector/1.0-rc1/zeroinstall-injector_1.0~rc1-1_all.deb"],
	  ["Ubuntu/9.10", "apt:zeroinstall-injector"],
	  ["Ubuntu/9.04", "http://downloads.sourceforge.net/zero-install/zeroinstall-injector_0.41-1_all.deb"],
	  ["Ubuntu/8.10", "apt:zeroinstall-injector"],
	  ["Ubuntu/8.04", "http://downloads.sourceforge.net/zero-install/zeroinstall-injector_0.39-1_all.deb"],
	  ["Ubuntu", "apt:zeroinstall-injector"],
	  ["Debian", "install-linux.html#debian"],
	  ["FreeBSD", "install-unix.html#freebsd"],
	  ["OS X", "http://downloads.sourceforge.net/project/zero-install/0install/2.8/ZeroInstall.pkg"],
	  ["SUSE", "install-linux.html#suse"],
	  ["Fedora", "install-linux.html#fedora"],
	  ["Mandriva", "install-linux.html#mandriva"],
	  ["Red Hat", "install-linux.html#redhat"],
	  ["Slackware", "install-linux.html#slackware"],
	  ["Knoppix", "install-linux.html#knoppix"],
	  ["Linux", "install-linux.html"],
	  ["Gentoo", "http://gentoo-portage.com/rox-base/zeroinstall-injector"],
	  ["Windows", "http://0install.de/downloads/?lang=en"],
  ].forEach(function(entry) {
    if (navigator.userAgent.search(entry[0]) >= 0) {
      a.innerHTML = "Get Zero Install for " + entry[0];
      a.setAttribute("href", entry[1]);
      return;
    }
  })
}) ()
