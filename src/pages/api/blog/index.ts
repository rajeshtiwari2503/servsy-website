import { NextApiRequest, NextApiResponse } from 'next';

// Mock database for blog posts
const blogPosts = [
  {
    id: 'air-cooler-maintenance',
    title: 'Essential Air Cooler Maintenance Tips for Summer',
    excerpt: 'Keep your air cooler running efficiently with these maintenance tips. Learn how to clean filters, prevent water leakage, and ensure optimal cooling performance.',
    content: `
      <h2>Essential Air Cooler Maintenance Tips for Summer</h2>
      
      <p>As summer approaches, your air cooler becomes an essential appliance for maintaining comfort in your home. Regular maintenance not only ensures optimal cooling performance but also extends the lifespan of your cooler. Here are some essential maintenance tips to keep your air cooler running efficiently throughout the summer:</p>
      
      <h3>1. Clean or Replace Filters Regularly</h3>
      <p>Dirty filters restrict airflow and reduce cooling efficiency. Clean the filters at least once a month during heavy usage periods. If your cooler has replaceable filters, consider changing them at the beginning of each summer season.</p>
      
      <h3>2. Check Water Tank and Prevent Leakage</h3>
      <p>Inspect the water tank for any cracks or damage. Clean it thoroughly to remove mineral deposits and prevent algae growth. If you notice any leakage, check the water distribution system and ensure all connections are secure.</p>
      
      <h3>3. Clean Cooling Pads</h3>
      <p>The cooling pads are crucial for effective cooling. Remove them carefully and rinse with clean water to remove dust and mineral deposits. If they appear damaged or worn out, replace them immediately for optimal cooling.</p>
      
      <h3>4. Lubricate Moving Parts</h3>
      <p>Apply a few drops of lubricating oil to the motor and fan bearings to ensure smooth operation. This reduces friction and prevents overheating of the motor.</p>
      
      <h3>5. Check Electrical Connections</h3>
      <p>Inspect all electrical connections for any signs of damage or wear. Ensure the power cord is in good condition and there are no exposed wires.</p>
      
      <h3>6. Clean the Exterior</h3>
      <p>Wipe down the exterior of the cooler with a damp cloth to remove dust and dirt. This not only improves the appearance but also prevents dust from being circulated in your home.</p>
      
      <h3>7. Prepare for Storage</h3>
      <p>At the end of summer, drain all water from the tank and dry the cooler thoroughly before storing it. Cover it with a dust cover to protect it during the off-season.</p>
      
      <p>By following these simple maintenance tips, you can ensure your air cooler provides efficient cooling throughout the summer months. If you encounter any issues that you cannot resolve, don't hesitate to contact Servsy for professional assistance.</p>
    `,
    date: 'March 1, 2025',
    category: 'Maintenance Tips',
    readTime: '5 min read',
    author: 'Servsy Team',
    image: 'https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/dalle-2025-03-06-22.54.02---a-modern-and-clean-illustration-of-a-city-map-with-location-pins-representing-service-availability-in-different-areas.-the-design-is-sleek-and-profes-29cb886.webp'
  },
  {
    id: 'led-tv-buying-guide',
    title: 'LED TV Buying Guide: What to Look for in 2025',
    excerpt: 'Confused about which LED TV to buy? Our comprehensive guide covers resolution, panel types, smart features, and other factors to consider before making a purchase.',
    content: `
      <h2>LED TV Buying Guide: What to Look for in 2025</h2>
      
      <p>With technology evolving rapidly and numerous options available in the market, choosing the right LED TV can be overwhelming. This comprehensive guide will help you navigate through the key factors to consider when purchasing an LED TV in 2025.</p>
      
      <h3>1. Resolution</h3>
      <p>Resolution refers to the number of pixels that make up the display:</p>
      <ul>
        <li><strong>Full HD (1920 x 1080 pixels)</strong>: Good for smaller screens and budget options</li>
        <li><strong>4K Ultra HD (3840 x 2160 pixels)</strong>: Offers four times the resolution of Full HD, ideal for screens 43 inches and larger</li>
        <li><strong>8K (7680 x 4320 pixels)</strong>: The highest resolution available, best for very large screens (65+ inches)</li>
      </ul>
      
      <h3>2. Panel Types</h3>
      <p>Different panel technologies offer varying picture quality and viewing experiences:</p>
      <ul>
        <li><strong>LED-LCD</strong>: Most common and affordable option</li>
        <li><strong>QLED</strong>: Offers better brightness and color accuracy than standard LED</li>
        <li><strong>OLED</strong>: Provides perfect blacks, infinite contrast, and wide viewing angles</li>
        <li><strong>Mini-LED</strong>: Improved local dimming for better contrast than standard LED</li>
        <li><strong>Micro-LED</strong>: Emerging technology combining OLED's contrast with LED's brightness</li>
      </ul>
      
      <h3>3. Smart Features</h3>
      <p>Most modern TVs come with smart features, but they vary in functionality:</p>
      <ul>
        <li>Operating system (Android TV, webOS, Tizen, etc.)</li>
        <li>Voice control capabilities</li>
        <li>App availability and support</li>
        <li>Integration with smart home devices</li>
      </ul>
      
      <h3>4. Refresh Rate</h3>
      <p>Higher refresh rates result in smoother motion, especially important for gaming and sports:</p>
      <ul>
        <li><strong>60Hz</strong>: Standard refresh rate, adequate for most content</li>
        <li><strong>120Hz</strong>: Better for fast-moving content like sports and action movies</li>
        <li><strong>Variable refresh rate (VRR)</strong>: Essential for gaming to prevent screen tearing</li>
      </ul>
      
      <h3>5. HDR (High Dynamic Range)</h3>
      <p>HDR enhances contrast and color range for more realistic images:</p>
      <ul>
        <li><strong>HDR10</strong>: Basic HDR format supported by most content</li>
        <li><strong>Dolby Vision</strong>: Dynamic HDR format that adjusts settings scene by scene</li>
        <li><strong>HDR10+</strong>: Samsung's dynamic HDR format, similar to Dolby Vision</li>
        <li><strong>HLG</strong>: Designed for broadcast television</li>
      </ul>
      
      <h3>6. Connectivity</h3>
      <p>Ensure your TV has the right ports for your devices:</p>
      <ul>
        <li><strong>HDMI 2.1</strong>: Required for 4K/120Hz gaming and 8K content</li>
        <li><strong>USB ports</strong>: For connecting external drives or powering streaming devices</li>
        <li><strong>Optical audio output</strong>: For connecting to sound systems</li>
        <li><strong>Ethernet port</strong>: For stable internet connection</li>
      </ul>
      
      <h3>7. Sound Quality</h3>
      <p>While most TVs have decent built-in speakers, consider:</p>
      <ul>
        <li>Output power (measured in watts)</li>
        <li>Support for Dolby Atmos or DTS:X</li>
        <li>Compatibility with external sound systems</li>
      </ul>
      
      <h3>8. Size and Viewing Distance</h3>
      <p>Choose a TV size based on your viewing distance:</p>
      <ul>
        <li>For 4K TVs: Viewing distance (in inches) ÷ 1.5 = recommended screen size</li>
        <li>For 1080p TVs: Viewing distance (in inches) ÷ 2.5 = recommended screen size</li>
      </ul>
      
      <p>By considering these factors, you can make an informed decision when purchasing your next LED TV. Remember that the best TV for you depends on your specific needs, viewing habits, and budget. If you need assistance with installation or setup after purchase, Servsy offers professional LED TV installation services across India.</p>
    `,
    date: 'February 15, 2025',
    category: 'Buying Guide',
    readTime: '7 min read',
    author: 'Tech Expert Team',
    image: 'https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/dalle-2025-03-06-22.54.02---a-modern-and-clean-illustration-of-a-city-map-with-location-pins-representing-service-availability-in-different-areas.-the-design-is-sleek-and-profes-29cb886.webp'
  },
  {
    id: 'washing-machine-troubleshooting',
    title: 'Common Washing Machine Problems and DIY Solutions',
    excerpt: 'Troubleshoot basic washing machine issues with our step-by-step guide. Learn when to call a professional and when you can fix problems yourself.',
    content: `
      <h2>Common Washing Machine Problems and DIY Solutions</h2>
      
      <p>Washing machines are essential household appliances that can sometimes develop issues. While some problems require professional attention, many common issues can be resolved with simple DIY solutions. This guide will help you troubleshoot basic washing machine problems and determine when to call a professional.</p>
      
      <h3>1. Washing Machine Won't Start</h3>
      <p><strong>Possible causes and solutions:</strong></p>
      <ul>
        <li><strong>Power supply issues</strong>: Check if the machine is properly plugged in and the circuit breaker hasn't tripped</li>
        <li><strong>Door not closed properly</strong>: Ensure the door is completely closed and latched</li>
        <li><strong>Water supply</strong>: Verify that water supply valves are open</li>
        <li><strong>Control panel issues</strong>: Reset the machine by unplugging it for 1 minute, then plug it back in</li>
      </ul>
      
      <h3>2. Washing Machine Is Noisy</h3>
      <p><strong>Possible causes and solutions:</strong></p>
      <ul>
        <li><strong>Unbalanced load</strong>: Redistribute clothes evenly in the drum</li>
        <li><strong>Foreign objects</strong>: Check for coins, keys, or other items that might have been left in pockets</li>
        <li><strong>Machine not level</strong>: Adjust the feet to ensure the machine is perfectly level on the floor</li>
        <li><strong>Worn bearings</strong>: If you hear a grinding noise, the bearings might need replacement (professional repair recommended)</li>
      </ul>
      
      <h3>3. Washing Machine Leaks Water</h3>
      <p><strong>Possible causes and solutions:</strong></p>
      <ul>
        <li><strong>Overloading</strong>: Reduce the amount of laundry in each load</li>
        <li><strong>Using too much detergent</strong>: Follow the manufacturer's recommendations for detergent amount</li>
        <li><strong>Loose hose connections</strong>: Check and tighten inlet and drain hose connections</li>
        <li><strong>Damaged door seal</strong>: Inspect the door gasket for tears or debris and clean or replace if necessary</li>
        <li><strong>Clogged drain pump</strong>: Clean the drain pump filter (refer to your user manual for instructions)</li>
      </ul>
      
      <h3>4. Clothes Not Getting Clean</h3>
      <p><strong>Possible causes and solutions:</strong></p>
      <ul>
        <li><strong>Overloading</strong>: Wash smaller loads to allow proper water circulation</li>
        <li><strong>Insufficient detergent</strong>: Use the recommended amount of detergent for your load size and water hardness</li>
        <li><strong>Incorrect water temperature</strong>: Select the appropriate temperature for the type of clothes and soil level</li>
        <li><strong>Clogged dispensers</strong>: Clean detergent and fabric softener dispensers</li>
      </ul>
      
      <h3>5. Washing Machine Not Draining</h3>
      <p><strong>Possible causes and solutions:</strong></p>
      <ul>
        <li><strong>Clogged drain filter</strong>: Clean the drain pump filter (usually located at the front bottom of the machine)</li>
        <li><strong>Kinked drain hose</strong>: Straighten the drain hose to allow proper water flow</li>
        <li><strong>Drain pump issues</strong>: Listen for the drain pump running; if it's silent during the drain cycle, it might be faulty</li>
        <li><strong>Clogged drain pipe</strong>: Check and clear any blockages in your home's drain pipe</li>
      </ul>
      
      <h3>6. Washing Machine Stops Mid-Cycle</h3>
      <p><strong>Possible causes and solutions:</strong></p>
      <ul>
        <li><strong>Power fluctuations</strong>: Consider using a voltage stabilizer if you experience frequent power issues</li>
        <li><strong>Overheating</strong>: Allow the machine to cool down and ensure proper ventilation around it</li>
        <li><strong>Unbalanced load</strong>: Redistribute clothes evenly and restart the cycle</li>
        <li><strong>Electronic control issues</strong>: Reset the machine by unplugging it for a few minutes</li>
      </ul>
      
      <h3>When to Call a Professional</h3>
      <p>While many issues can be resolved with DIY solutions, some problems require professional attention:</p>
      <ul>
        <li>Electrical issues (burning smell, sparks, or shocks)</li>
        <li>Major water leaks that persist after checking hoses and connections</li>
        <li>Mechanical problems (grinding noises, drum not turning)</li>
        <li>Control panel malfunctions that don't resolve with resetting</li>
        <li>Issues covered under warranty (to avoid voiding the warranty)</li>
      </ul>
      
      <p>Regular maintenance can prevent many common washing machine problems. Clean the drum, dispensers, and filters regularly, and leave the door open after use to prevent mold and mildew growth. If you're experiencing persistent issues with your washing machine, Servsy offers professional repair services across India. Our trained technicians can diagnose and fix complex problems, ensuring your washing machine operates efficiently for years to come.</p>
    `,
    date: 'January 28, 2025',
    category: 'Troubleshooting',
    readTime: '6 min read',
    author: 'Servsy Repair Team',
    image: 'https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/washing-machine-troubleshooting-blog.jpg'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all blog posts
    return res.status(200).json(blogPosts);
  } else {
    // Method not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}