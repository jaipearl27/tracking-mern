export enum DeviceFamilies {
    WINDOWS_MACHINE = "WINDOWS_MACHINE",  // Consumer generated the click using a Windows machine.
    LINUX_MACHINE = "LINUX_MACHINE",      // Consumer generated the click using a Linux machine.
    APPLE_MAC = "APPLE_MAC",              // Consumer generated the click using an Apple machine.
    IPHONE = "IPHONE",                    // Consumer generated the click using an iPhone.
    IPAD = "IPAD",                        // Consumer generated the click using an iPad.
    ONE = "ONE",                          // Consumer generated the click using a OnePlus One mobile device.
    CHROMEBOOK = "CHROMEBOOK",            // Consumer generated the click using a Google Chromebook.
    UNKNOWN = "UNKNOWN"                   // The DeviceFamily could not be tracked.
  }
  