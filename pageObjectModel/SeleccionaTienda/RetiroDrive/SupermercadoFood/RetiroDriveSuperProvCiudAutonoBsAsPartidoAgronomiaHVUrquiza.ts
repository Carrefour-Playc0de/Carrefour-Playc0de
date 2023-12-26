import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza extends BasePage {

    readonly HIPER_VILLA_URQUIZA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIPER_VILLA_URQUIZA = this.page.locator("//body/div[contains(@class,\'left-0 fixed top-0 bottom-0 bg-base z-999 flex flex-column\')]/div[contains(@class,\'valtech-carrefourar-region-locator-0-x-drawerContent valtech-carrefourar-region-locator-0-x-drawerContent--locator overflow-y-auto\')]/div[contains(@class,\'valtech-carrefourar-region-locator-0-x-childrenContainer valtech-carrefourar-region-locator-0-x-childrenContainer--locator flex flex-grow-1\')]/div[contains(@class,\'w-100 h-100 flex flex-column mh5 pb6 pb0-m\')]/div[contains(@class,\'store-list mb0 mt0 overflow-y-scroll h-100\')]/div[1]/div[1]")
    }

    async clickHiperVillaUrquiza(): Promise<void> {
        await this.click(this.HIPER_VILLA_URQUIZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAsPartidoHVillaUrquiza(): Promise<void> {
        await this.clickHiperVillaUrquiza()
    }
}
