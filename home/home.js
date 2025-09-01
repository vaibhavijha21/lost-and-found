const items = [
  {
    id: 1,
    title: "Black Backpack",
    image: "https://genietravel.com/cdn/shop/files/13_c457f37a-da03-4025-bc90-0e405b21b44b.jpg?v=1720518555",
    description: "Lost near library",
    category: "Bags",
    location: "Square1",
    status: "lost",
    date: "2024-01-15",
    contact: "john.doe@email.com"
  },
  {
    id: 2,
    title: "Water Bottle",
    image: "https://oceanbottle.co/cdn/shop/products/OceanBottle_BOB_Front_Ocean-Blue_2048px_927b4df9-48ca-4e74-81e0-9de65cad057c.jpg?v=1661510139&width=720",
    description: "Found near cafeteria",
    category: "Bottle",
    location: "Turing",
    status: "found",
    date: "2024-01-14",
    contact: "jane.smith@email.com"
  },
  {
    id: 3,
    title: "Phone Charger",
    image: "https://img.freepik.com/free-photo/charger-usb-cable-type-c-white-isolated-background_58702-4501.jpg",
    description: "Lost lenovo charger in classroom",
    category: "Charger",
    location: "Explo",
    status: "lost",
    date: "2024-01-13",
    contact: "mike.wilson@email.com"
  },
  {
    id: 4,
    title: "ID Card",
    image: "https://northeastregistries.sfo2.digitaloceanspaces.com/wp-content/uploads/2022/01/22182207/identificationcard.jpg",
    description: "Found in parking lot",
    category: "IDCard",
    location: "Square1",
    status: "found",
    date: "2024-01-12",
    contact: "sarah.jones@email.com"
  },
  {
    id: 5,
    title: "Keys",
    image: "https://covenantsecurityequipment.com/cdn/shop/files/CSE-AS-ExtraKeys_700x700.png?v=1713479233",
    description: "Found in Square one first floor",
    category: "Keys",
    location: "Square1",
    status: "found",
    date: "2024-01-11",
    contact: "david.brown@email.com"
  },
  {
    id: 6,
    title: "Water Bottle",
    image: "https://oceanbottle.co/cdn/shop/files/Frame19_e1d4f3d4-12ac-4b4d-be96-20dca2604844.png?v=1730371025&width=720",
    description: "Found near cafeteria",
    category: "Bottle",
    location: "Turing",
    status: "found",
    date: "2024-01-10",
    contact: "emma.davis@email.com"
  },
  {
    id: 7,
    title: "Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Lost MacBook Pro in lecture hall",
    category: "Electronics",
    location: "Newton",
    status: "lost",
    date: "2024-01-09",
    contact: "alex.turner@email.com"
  },
  {
    id: 8,
    title: "Wallet",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Found in student center",
    category: "Personal",
    location: "DeMorgan",
    status: "found",
    date: "2024-01-08",
    contact: "lisa.garcia@email.com"
  }
];

// Track selected filters
let selectedCategory = null;
let selectedLocation = null;
let selectedStatus = null;

// Render items with enhanced styling
function renderItems(list) {
  const grid = document.getElementById("itemGrid");
  grid.innerHTML = ""; // clear old items

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="bx bx-search text-6xl text-gray-500 mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-400 mb-2">No items found</h3>
        <p class="text-gray-500">Try adjusting your search criteria or filters</p>
      </div>
    `;
    return;
  }

  list.forEach(item => {
    const box = document.createElement("div");
    box.className = "bg-[#1e293b] rounded-xl border border-palette overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer";
    box.addEventListener('click', () => openItemModal(item));

    // Badge for lost/found with better styling
    const badgeColor = item.status === "lost" 
      ? "bg-gradient-to-r from-red-500 to-red-600" 
      : "bg-gradient-to-r from-green-500 to-green-600";
    const badgeIcon = item.status === "lost" ? "bx-time" : "bx-check-circle";

    // Format date
    const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    box.innerHTML = `
      <div class="relative">
        <div class="w-full h-48 overflow-hidden">
          <img src="${item.image}" class="object-cover w-full h-full hover:scale-110 transition-transform duration-300" alt="${item.title}">
        </div>
        <span class="absolute top-3 right-3 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <i class="bx ${badgeIcon}"></i>
          ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
        <div class="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          ${formattedDate}
        </div>
      </div>
      <div class="p-4 space-y-3">
        <h3 class="font-bold text-white text-lg line-clamp-1">${item.title}</h3>
        <p class="text-gray-300 text-sm line-clamp-2">${item.description}</p>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-blue-400">
            <i class="bx bx-map-pin"></i>
            <span class="text-sm">${item.location}</span>
          </div>
          <div class="flex items-center gap-2 text-purple-400">
            <i class="bx bx-category"></i>
            <span class="text-sm">${item.category}</span>
          </div>
        </div>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
          View Details
        </button>
      </div>
    `;

    grid.appendChild(box);
  });

  updateCounts(list);
  updateTotalCount(list);
  updateRecentActivity(list);
}

// Update lost/found counts with better styling
function updateCounts(list) {
  const lostCount = list.filter(i => i.status === "lost").length;
  const foundCount = list.filter(i => i.status === "found").length;

  document.getElementById("lostCount").innerHTML = `
    <div class="text-3xl font-bold text-red-400">${lostCount}</div>
    <div class="text-sm text-red-300">Lost Items</div>
  `;
  
  document.getElementById("foundCount").innerHTML = `
    <div class="text-3xl font-bold text-green-400">${foundCount}</div>
    <div class="text-sm text-green-300">Found Items</div>
  `;
}

// Update total count
function updateTotalCount(list) {
  document.getElementById("totalCount").textContent = list.length;
}

// Update recent activity
function updateRecentActivity(list) {
  const recentActivity = document.getElementById("recentActivity");
  const recentItems = list.slice(0, 5); // Show last 5 items
  
  if (recentItems.length === 0) {
    recentActivity.innerHTML = '<p class="text-gray-500 text-center">No recent activity</p>';
    return;
  }

  recentActivity.innerHTML = recentItems.map(item => `
    <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-[#374151] transition-colors">
      <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
        <img src="${item.image}" class="w-full h-full object-cover" alt="${item.title}">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-white text-sm font-medium truncate">${item.title}</p>
        <p class="text-gray-400 text-xs">${item.status} in ${item.location}</p>
      </div>
      <span class="text-xs text-gray-500">${new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
    </div>
  `).join('');
}

// Update button selection with enhanced styling
function updateButtonSelection() {
  // Category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.textContent === selectedCategory) {
      btn.classList.add('bg-blue-600', 'border-blue-500', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
      btn.classList.remove('bg-[#374151]', 'hover:bg-[#4b5563]');
    } else {
      btn.classList.remove('bg-blue-600', 'border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
      btn.classList.add('bg-[#374151]', 'hover:bg-[#4b5563]');
    }
  });

  // Location buttons
  document.querySelectorAll('.location-btn').forEach(btn => {
    if (btn.textContent === selectedLocation) {
      btn.classList.add('bg-green-600', 'border-green-500', 'text-white', 'shadow-lg', 'shadow-green-500/20');
      btn.classList.remove('bg-[#374151]', 'hover:bg-[#4b5563]');
    } else {
      btn.classList.remove('bg-green-600', 'border-green-500', 'shadow-lg', 'shadow-green-500/20');
      btn.classList.add('bg-[#374151]', 'hover:bg-[#4b5563]');
    }
  });

  // Status buttons
  document.querySelectorAll('.status-btn').forEach(btn => {
    const status = btn.getAttribute('data-status');
    if (status === selectedStatus) {
      const isLost = status === 'lost';
      btn.classList.add(
        isLost ? 'bg-red-600' : 'bg-green-600',
        isLost ? 'border-red-500' : 'border-green-500',
        'text-white',
        'shadow-lg',
        isLost ? 'shadow-red-500/20' : 'shadow-green-500/20'
      );
      btn.classList.remove('bg-[#374151]', 'hover:bg-[#4b5563]');
    } else {
      btn.classList.remove('bg-red-600', 'bg-green-600', 'border-red-500', 'border-green-500', 'shadow-lg', 'shadow-red-500/20', 'shadow-green-500/20');
      btn.classList.add('bg-[#374151]', 'hover:bg-[#4b5563]');
    }
  });
}

// Apply filters with enhanced logic
function applyFilters() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  let filtered = items;

  if (selectedCategory) {
    filtered = filtered.filter(i => i.category === selectedCategory);
  }
  if (selectedLocation) {
    filtered = filtered.filter(i => i.location === selectedLocation);
  }
  if (selectedStatus) {
    filtered = filtered.filter(i => i.status === selectedStatus);
  }
  if (query) {
    filtered = filtered.filter(i =>
      i.title.toLowerCase().includes(query) ||
      i.description.toLowerCase().includes(query) ||
      i.location.toLowerCase().includes(query) ||
      i.category.toLowerCase().includes(query)
    );
  }

  renderItems(filtered);
  updateButtonSelection();
}

// Open item detail modal
function openItemModal(item) {
  const modal = document.getElementById("itemModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalTitle.textContent = item.title;

  const statusColor = item.status === "lost" ? "text-red-400" : "text-green-400";
  const statusIcon = item.status === "lost" ? "bx-time" : "bx-check-circle";

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="w-full h-64 overflow-hidden rounded-lg">
        <img src="${item.image}" class="w-full h-full object-cover" alt="${item.title}">
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-400">Status</label>
          <div class="flex items-center gap-2">
            <i class="bx ${statusIcon} ${statusColor}"></i>
            <span class="text-white capitalize">${item.status}</span>
          </div>
        </div>
        
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-400">Category</label>
          <div class="flex items-center gap-2">
            <i class="bx bx-category text-blue-400"></i>
            <span class="text-white">${item.category}</span>
          </div>
        </div>
        
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-400">Location</label>
          <div class="flex items-center gap-2">
            <i class="bx bx-map-pin text-green-400"></i>
            <span class="text-white">${item.location}</span>
          </div>
        </div>
        
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-400">Date</label>
          <div class="flex items-center gap-2">
            <i class="bx bx-calendar text-purple-400"></i>
            <span class="text-white">${new Date(item.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </div>
      
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-400">Description</label>
        <p class="text-white bg-[#0f1419] p-3 rounded-lg">${item.description}</p>
      </div>
      
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-400">Contact</label>
        <p class="text-blue-400">${item.contact}</p>
      </div>
      
      <div class="flex gap-3 pt-4">
        <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200 font-medium">
          <i class="bx bx-envelope mr-2"></i>Contact Owner
        </button>
        <button class="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors duration-200 font-medium">
          <i class="bx bx-share mr-2"></i>Share
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
  document.getElementById("itemModal").classList.add('hidden');
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Category buttons
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      if (selectedCategory === this.textContent) {
        selectedCategory = null;
      } else {
        selectedCategory = this.textContent;
      }
      applyFilters();
    });
  });

  // Location buttons
  document.querySelectorAll(".location-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      if (selectedLocation === this.textContent) {
        selectedLocation = null;
      } else {
        selectedLocation = this.textContent;
      }
      applyFilters();
    });
  });

  // Status buttons
  document.querySelectorAll(".status-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const status = this.getAttribute('data-status');
      if (selectedStatus === status) {
        selectedStatus = null;
      } else {
        selectedStatus = status;
      }
      applyFilters();
    });
  });

  // Search box
  document.getElementById("searchBox").addEventListener("input", applyFilters);

  // Modal close button
  document.getElementById("closeModal").addEventListener("click", closeModal);

  // Close modal when clicking outside
  document.getElementById("itemModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeReportForm();
    }
  });

  // Report Item Form Event Listeners
  setupReportForm();

  // Initialize the dashboard
  renderItems(items);
  updateButtonSelection();
});

// Setup report form functionality
function setupReportForm() {
  const reportFormModal = document.getElementById("reportFormModal");
  const reportItemForm = document.getElementById("reportItemForm");
  const imageInput = document.getElementById("imageInput");
  const imagePreview = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");

  // Open report form from main button (top bar)
  const mainReportButton = document.getElementById('mainReportBtn');
  if (mainReportButton) {
    mainReportButton.addEventListener("click", () => {
      openReportForm();
    });
  }

  // Open report form from sidebar button
  const reportItemButton = document.getElementById('reportItemBtn');
  if (reportItemButton) {
    reportItemButton.addEventListener("click", () => {
      openReportForm();
    });
  }

  // Close report form
  document.getElementById("closeReportForm").addEventListener("click", closeReportForm);
  document.getElementById("cancelReport").addEventListener("click", closeReportForm);

  // Close report form when clicking outside
  reportFormModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeReportForm();
    }
  });

  // Handle image upload and preview
  imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("Image size must be less than 5MB");
        imageInput.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        previewImg.src = e.target.result;
        imagePreview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle form submission
  reportItemForm.addEventListener("submit", handleFormSubmission);
}

// Open report form modal
function openReportForm(presetType = null) {
  const modal = document.getElementById("reportFormModal");
  const form = document.getElementById("reportItemForm");
  const title = document.getElementById("reportFormTitle");
  const subtitle = document.getElementById("reportFormSubtitle");

  // Reset form
  form.reset();
  document.getElementById("imagePreview").classList.add("hidden");
  
  // Set preset type if provided
  if (presetType) {
    const radioButton = form.querySelector(`input[value="${presetType}"]`);
    if (radioButton) {
      radioButton.checked = true;
    }
    
    if (presetType === "lost") {
      title.textContent = "Report Lost Item";
      subtitle.textContent = "Help us find your lost item by providing detailed information";
    } else {
      title.textContent = "Report Found Item";
      subtitle.textContent = "Help return a found item to its owner by providing details";
    }
  } else {
    title.textContent = "Report Item";
    subtitle.textContent = "Fill in the details below to report your item";
  }

  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  form.querySelector('input[name="date"]').value = today;

  modal.classList.remove("hidden");
}

// Close report form modal
function closeReportForm() {
  document.getElementById("reportFormModal").classList.add("hidden");
}

// Handle form submission
function handleFormSubmission(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const itemData = {
    id: Date.now(), // Generate unique ID
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    location: formData.get("location"),
    status: formData.get("itemType"),
    date: formData.get("date"),
    contact: formData.get("contact"),
    phone: formData.get("phone"),
    specificLocation: formData.get("specificLocation"),
    additionalDetails: formData.get("additionalDetails")
  };

  // Handle image upload
  const imageFile = formData.get("image");
  if (imageFile && imageFile.size > 0) {
    // In a real application, you would upload this to a server
    // For now, we'll use a placeholder or the file data
    const reader = new FileReader();
    reader.onload = (e) => {
      itemData.image = e.target.result;
      addNewItem(itemData);
    };
    reader.readAsDataURL(imageFile);
  } else {
    // Use placeholder image if no image provided
    itemData.image = getPlaceholderImage(itemData.category);
    addNewItem(itemData);
  }
}

// Add new item to storage and display
function addNewItem(itemData) {
  // Add to items array
  items.unshift(itemData); // Add to beginning of array
  
  // Save to localStorage (in a real app, this would go to a database)
  localStorage.setItem('lostAndFoundItems', JSON.stringify(items));
  
  // Update display
  renderItems(items);
  updateButtonSelection();
  
  // Show success message
  showSuccessMessage(itemData);
  
  // Close form
  closeReportForm();
}

// Get placeholder image based on category
function getPlaceholderImage(category) {
  const placeholderImages = {
    'Bags': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Charger': 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Bottle': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'IDCard': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Phone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Keys': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Electronics': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Personal': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'Other': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  };
  
  return placeholderImages[category] || placeholderImages['Other'];
}

// Show success message
function showSuccessMessage(itemData) {
  // Create success notification
  const notification = document.createElement("div");
  notification.className = "fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full";
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <i class="bx bx-check-circle text-2xl"></i>
      <div>
        <h4 class="font-semibold">Item Reported Successfully!</h4>
        <p class="text-sm opacity-90">Your ${itemData.status} item "${itemData.title}" has been added to the system.</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Load items from localStorage on page load
function loadItemsFromStorage() {
  const storedItems = localStorage.getItem('lostAndFoundItems');
  if (storedItems) {
    const parsedItems = JSON.parse(storedItems);
    items.length = 0; // Clear current items
    items.push(...parsedItems); // Add stored items
  }
}

// Initialize storage loading
loadItemsFromStorage();