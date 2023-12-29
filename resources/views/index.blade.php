@extends('layouts/base')

@section('content')

<div class="grid grid-rows-2">
    <div class="grid grid-cols-2">
        <div class="col-1/2 bg-black p-5 h-100">
            <div class="text-white">
                <div class="text-5xl font-bold text-blue-5000">
                    Konti
                </div>
                <small>By GeekQuest</small>
            </div>

            <p class="text-2xl font-bold text-white mt-5">
                Konti helps keeps track of contributions to various initiatives, causes and projects for Groups.
            </p>
            <div class="mt-3 mb-3 text-center w-full text-white p-2">
                <a href="{{ route('signup.create') }}" class="p-2 bg-gray-800 text-white rounded-md">
                    Start an Initiative
                </a>
            </div>

        </div>
        <div class="col-1/2 bg-green-400 p-5">
            <p class="text-3xl text-white font-bold">What are Initiatives?</p>
           
            <div class="initiative mb-2">
                <p class="text-2xl font-bold">Welfare Contributions</p>
                <p class="text-1xl py-2">
                    Whether it's to support a friend or community member during a tough time, loss of a family member or the good times like Weddings, Birthdays, and new-born babies..
                </p>
                <a href="" class="bg-black p-2 text-white text-center outline-gray-100 align-items-end">
                    Start a Welfare Initiative &gt;
                </a>
            </div>
            <div class="initiative mb-2">
                <p class="text-2xl font-bold">Security contributions</p>
                <p class="text-1xl py-2">
                    Keep track of contributions for neighborhood watch to ensure you area is sufficiently protected from theft etc..
                </p>
                <a href="" class="bg-black p-2 text-white text-center outline-gray-100 align-items-end">
                    Start a Security Contribution Initiative &gt;
                </a>
            </div>
            <div class="initiative mb-2">
                <p class="text-2xl font-bold">Community projects</p>
                <p class="text-1xl py-2">
                    Contribute to Group or Community projects to help your communities grow, thrive and support each other. 
                </p>
                <a href="" class="bg-black p-2 text-white text-center outline-gray-100 align-items-end">
                    Start a Project Initiative &gt;
                </a>
            </div>
            <div class="initiative">
                <p class="text-2xl font-bold">Contributions for Meetups</p>
                <p class="text-1xl py-2">
                    Organizing a Meetup usually requires organize a physical space that needs to be booked and other logistics, use Konti to keep track of contributions for Meet ups and events for your community or group.
                </p>
                <a href="" class="bg-black p-2 text-white text-center outline-gray-100 align-items-end">
                    Start a Meetup Initiative &gt;
                </a>
            </div>
        </div>
    </div>
    
    <div class="grid grid-cols-3">
        <div class="col-1/4 text-center bg-red-500 py-5">
            <img src="" alt="" class="center">
            <p class="text-3xl text-white">
                Made for Groups
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nemo modi nobis quo dolorum ut ab vero voluptas, alias ex quae quasi dolor aliquid voluptatibus similique, placeat aliquam dolorem exercitationem.
            </p>
        </div>
        <div class="col-1/4 text-center  bg-red-500 py-5">
            <img src="" alt="" class="center">
            <p class="text-3xl text-white bg-red-500">
                Made for Accountability
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nemo modi nobis quo dolorum ut ab vero voluptas, alias ex quae quasi dolor aliquid voluptatibus similique, placeat aliquam dolorem exercitationem.
            </p>
        </div>
        <div class="col-1/4 text-center bg-red-500 py-5">
            <img src="" alt="" class="center">
            <p class="text-3xl text-white">
                Made in Malawi
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nemo modi nobis quo dolorum ut ab vero voluptas, alias ex quae quasi dolor aliquid voluptatibus similique, placeat aliquam dolorem exercitationem.
            </p>
        </div>
    </div>
</div>
@endsection