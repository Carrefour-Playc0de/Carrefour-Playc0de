import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilJugueteriaCarrefour extends BasePage {

    readonly JUGUETERIA_CARREFOUR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUGUETERIA_CARREFOUR = this.page.locator('//a [@id="menu-item-category-jugueteria-carrefour"]')
    }

    async clickBazarTextilJugueteriaCarrefour(): Promise<void> {
        await this.click(this.JUGUETERIA_CARREFOUR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilJugueteriaCarrefour(): Promise<void> {
        await this.clickBazarTextilJugueteriaCarrefour()
    }
}
