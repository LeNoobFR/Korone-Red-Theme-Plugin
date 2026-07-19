# Korone Roblox Theme

## Description

Korone Roblox Theme is an unofficial userscript that changes the appearance of the Korone website to resemble Roblox. It replaces several Korone logos with Roblox logos and applies a custom red color theme across the website.

This addon is purely cosmetic. It does not modify gameplay, user accounts, or server functionality.

---

# Features

* Replaces the Korone square icon with the Roblox 2017 icon.
* Replaces the Korone logo with the Roblox 2015 logo.
* Changes the website's favicon to the Roblox icon.
* Applies a Roblox-inspired red theme.
* Changes the navigation bar color.
* Changes alert backgrounds.
* Changes icon card backgrounds.
* Changes pagination colors.
* Changes various website background colors.
* Automatically reapplies the theme when the page updates.

---

# How it works

The addon is a JavaScript userscript that runs in your browser using Violentmonkey or Tampermonkey.

It modifies the webpage after it loads by:

* Replacing specific image URLs.
* Changing CSS variables.
* Applying custom CSS styles.
* Watching for page updates using a MutationObserver so the theme remains active.

No files on the Korone servers are modified.

---

# Installation

1. Install **Violentmonkey** or **Tampermonkey**.
2. Create a new userscript.
3. Delete the default template.
4. Paste the contents of `Korone Roblox Theme.user.js`.
5. Save the userscript.
6. Open https://www.pekora.zip/

The theme will load automatically.

---

# Usage

After installation, simply browse the Korone website.

The userscript automatically applies the Roblox theme on every supported page.

No configuration is required.

---

# Required Permissions

This userscript only requires:

* `@match https://www.pekora.zip/*`
* `@grant none`

It does not request any additional browser permissions.

---

# External APIs or Third-Party Services

This addon uses publicly hosted image files from Wikimedia Commons:

* Roblox 2017 Icon
* Roblox 2015 Logo

No external APIs are used.

---

# Warnings

* This addon is unofficial.
* It only changes the appearance of the website.
* It is not affiliated with Korone.
* Website updates may temporarily break some visual modifications.

---

# Compatibility

Compatible with:

* Violentmonkey
* Tampermonkey

Supported website:

* https://www.pekora.zip/

---

# Known Limitations

* Some UI elements may change after Korone updates.
* Automatically generated CSS class names may change in future versions.
* Only the visual appearance is modified.

---

# Screenshots

> **Required before submission**

Add screenshots showing:

* Home page
* Navbar
* Roblox logo replacement
* Red theme
* Cards and pagination

Example:

```
images/home.png
images/navbar.png
images/profile.png
```

---

# Disclaimer

This addon is a community-created project.

It is **not developed, endorsed, or supported by The Offical Team Of Korone**.

Roblox logos and trademarks belong to their respective owners.
