<script>
    import CollectionList from '$lib/components/CollectionList.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/stores';

    export let data;
    $: entry = $page.params.entry
    $: conferences = data.bundle.events.filter(e => e.types.find(t => ['conference', 'hackathon'].includes(t)))
    $: otherEvents = data.bundle.events.filter(e => !e.types.find(t => ['conference', 'hackathon'].includes(t)))

</script>

<svelte:head>
    <title>PBW Inspector</title>
</svelte:head>

<div class="w-full px-6 xl:mx-0">
    <div class="max-w-7xl mx-auto pt-2 md:pt-7">
        <h2 class="text-2xl uppercase font-bold text-gray-500">Conferences & Hackathons ({conferences.length})</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl">
            <CollectionList arr={conferences} img="logo" col="event" entry={entry} offer={true}/>
        </div>
        <h2 class="text-2xl uppercase font-bold text-gray-500">Other events ({otherEvents.length})</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl">
            <CollectionList arr={otherEvents} img="logo" col="event" entry={entry} />
        </div>
        <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Speakers ({data.bundle.speakers.length})</h2>
        <h2 class="text-xl uppercase font-bold mt-10 text-gray-500">International 🌎</h2>        
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 my-6 text-center text-xl">
            <CollectionList arr={data.bundle.speakers.filter(s => !['cz', 'sk'].includes(s.country))} entry={entry} />
        </div>
        <h2 class="text-xl uppercase font-bold mt-10 text-gray-500">Local - Czech 🇨🇿 & Slovak 🇸🇰 </h2>        
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 my-6 text-center text-xl">
            <CollectionList arr={data.bundle.speakers.filter(s => ['cz', 'sk'].includes(s.country))} entry={entry} />
        </div>
        {#if data.bundle.benefits}
            <h2 class="text-2xl uppercase font-bold text-gray-500">benefits for visitors ({data.bundle.benefits.length})</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-xl mb-8">
                <CollectionList arr={data.bundle.benefits} img="logo" col="benefit" entry={entry} aspect="aspect-[16/9]" offer={true}/>
            </div>
        {/if}
        {#if data.bundle["media-partners"]}
            <h2 class="text-2xl uppercase font-bold text-gray-500">Media Partners & Communities ({data.bundle["media-partners"].length})</h2>
            <h2 class="text-xl uppercase font-bold mt-10 text-gray-500">International 🌎</h2>  
            <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-9 my-6 text-center text-2xl mb-8">
                <CollectionList arr={data.bundle["media-partners"].filter(m => !['czech', 'slovak'].includes(m.languages[0]))} img="logo" col="media-partner" entry={entry} aspect="aspect-[16/9]" size="small" />
            </div>
            <h2 class="text-xl uppercase font-bold mt-10 text-gray-500">Local - Czech 🇨🇿 & Slovak 🇸🇰 </h2>        
            <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-9 my-6 text-center text-2xl mb-8">
                <CollectionList arr={data.bundle["media-partners"].filter(m => ['czech', 'slovak'].includes(m.languages[0]))} img="logo" col="media-partner" entry={entry} aspect="aspect-[16/9]" size="small" />
            </div>
        {/if}
        <h2 class="text-2xl uppercase font-bold text-gray-500">Unions ({data.bundle.unions.length})</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6 text-center text-3xl mb-8">
            <CollectionList arr={data.bundle.unions} img="logo" col="union" entry={entry}/>
        </div>
        <Footer bundle={data.bundle} />
    </div>
</div>