export function getInitials(fullName :string | null |undefined) {
    if(fullName === undefined || fullName === null){
        return;
    }
    // Split the full name into words
    const words = fullName.trim().split(/\s+/);
    
    // Check if there are at least two words
    if (words.length < 2) {
      throw new Error("The full name must contain at least two words.");
    }
    
    // Get the first letter of the first two words
    const initials = words[0][0] + words[1][0];
    
    return initials.toLowerCase(); // or .toUpperCase() if you want uppercase initials
  }