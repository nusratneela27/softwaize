document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .container {
      max-width: 1800px;
      width: 100%;
      margin: 0 auto;
    }
    .navbar {
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      padding: 10px;
    }
    .dropdown-navbar {
      display: none;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      gap: 1rem;
    }
    .dropdown-item {
      display: inline-block;
      padding: 10px;
    }
    .dropdown-item img {
      background-color: #ededed;
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    .dropdown-item p {
      font-size: 14px;
      margin-top: 20px;
      text-transform: uppercase;
      text-align: center;
    }
  `;
  document.head.appendChild(style);

  // Create the container for the navbar
  const container = document.createElement('div');
  container.className = 'container';

  // Create the navbar
  const navbar = document.createElement('div');
  navbar.className = 'navbar';

  // Create the menu toggle button
  const menuToggle = document.createElement('i');
  menuToggle.id = 'menu-toggle';
  menuToggle.className = 'fa-solid fa-bars';

  // Create the name paragraph
  const nameParagraph = document.createElement('p');
  nameParagraph.textContent = 'James Michfiif';

  // Create the shopping bag icon
  const shoppingBagIcon = document.createElement('i');
  shoppingBagIcon.className = 'fa-solid fa-bag-shopping';

  // Append the menu toggle, name, and shopping bag icon to the navbar
  navbar.appendChild(menuToggle);
  navbar.appendChild(nameParagraph);
  navbar.appendChild(shoppingBagIcon);

  // Create the dropdown navbar
  const dropdownNavbar = document.createElement('div');
  dropdownNavbar.id = 'dropdown-navbar';
  dropdownNavbar.className = 'dropdown-navbar';

  // Create an array of dropdown items
  const dropdownItems = [
    { href: '/new.html', src: '/assets/new.png', text: 'New' },
    { href: '/best-sellers.html', src: '/assets/best-sellers.png', text: 'Best Sellers' },
    { href: '/rings.html', src: '/assets/rings.png', text: 'Rings' },
    { href: '/clearance.html', src: '/assets/clearance.png', text: 'Clearance' },
    { href: '/necklaces.html', src: '/assets/necklaces.png', text: 'Necklace' }
  ];

  // Iterate through the items and create the dropdown structure
  dropdownItems.forEach(item => {
    const dropdownItem = document.createElement('div');
    dropdownItem.className = 'dropdown-item';

    const dropdownLink = document.createElement('a');
    dropdownLink.href = item.href;
    dropdownLink.className = 'dropdown-link';

    const dropdownImg = document.createElement('img');
    dropdownImg.src = item.src;
    dropdownImg.alt = item.text;

    const dropdownText = document.createElement('p');
    dropdownText.textContent = item.text;

    dropdownLink.appendChild(dropdownImg);
    dropdownLink.appendChild(dropdownText);
    dropdownItem.appendChild(dropdownLink);
    dropdownNavbar.appendChild(dropdownItem);
  });

  // Append the navbar and dropdown to the container
  container.appendChild(navbar);
  container.appendChild(dropdownNavbar);

  // Insert the container above the hero banner
  const mainElement = document.querySelector('main');
  const saleSection = mainElement.querySelector("section")
  mainElement.insertBefore(container, saleSection.nextSibling);

  // Add event listener for menu toggle
  menuToggle.addEventListener('click', () => {
    if (dropdownNavbar.style.display === 'none' || dropdownNavbar.style.display === '') {
      dropdownNavbar.style.display = 'block';
    } else {
      dropdownNavbar.style.display = 'none';
    }
  });
});
