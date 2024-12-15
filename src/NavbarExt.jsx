import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavbarExt() {




  return (
    <><Disclosure as="nav" className="bg-white">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        
          <div className="flex items-center sm:hidden">

          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch  ">

            <div className="hidden sm:ml-6 sm:block bg-black">
              <div className="flex">

                <div className='text-white hover:bg-gray-600 px-3 py-2 text-lg font-medium border-r border-white'>
                  Rezervasyonlarınız İçin <br />
                  +90 312 498 21 21      <br />
                  +90 555 800 92 61
                </div>

                <div className='text-white hover:bg-gray-600 px-3 py-2 text-lg font-medium border-r border-white'>
                  Mail Adresimiz <br />
                  info@bizimcati.com.tr
                </div>
                <div className='text-white hover:bg-gray-600 px-3 py-2 text-lg font-medium border-r border-white'>        
<ul>
<li><a rel="external" href="https://www.facebook.com/clubbizimcati" title="Sitemizi Facebook üzerinden takip edin" target="_blank"></a></li>
<li><a rel="external" href="https://twitter.com/bizimcati" title="Sitemizi Twitter üzerinden takip edin" target="_blank">as</a></li>
<li ><a rel="external" href="#" title="Sitemizi Google üzerinden takip edin" target="_blank"></a></li>
<li ><a rel="external" href="https://www.instagram.com/clubbizimcati/" title="Sitemizi Instagram üzerinden takip edin" target="_blank"></a></li>
<li ><a rel="external" href="#" title="Sitemizi Linkedin üzerinden takip edin" target="_blank"></a></li>
<li ><a rel="external" href="#" title="Sitemizi Youtube üzerinden takip edin" target="_blank"></a></li>
<li ><a rel="external" href="https://tr.pinterest.com/pin/293085888234366966/" title="Sitemizi Pinterest üzerinden takip edin" target="_blank"></a></li>
<li ><a rel="external" href="https://www.bizimcati.com.tr/sitemap_index.xml" title="Sitemizi Rss üzerinden takip edin" target="_blank"></a></li>
</ul>              
</div></div>
            </div>
          </div>

        </div>
      


    </Disclosure></>
  );
}

export default NavbarExt